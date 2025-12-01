# Cross-Platform Color Font Support

A guide to document the process of making the "Stargirl" font (and potentially other Color Fonts?) work on iOS, macOS, Android, and Linux.
Because of conflicting color formats (Apple using `sbix`, Android using `CBDT`), the most reliable solution is to generate two separate font files and let the browser select the correct one via CSS.

### Foreward

###### <sup>Or just <a href="#anchor">skip to the guide</a></sup>

When I was redesigning [my website](https://bwal.sh), I was going for a kind of retro, "in-your-face" aesthetic, without being overly much. Alongside the use of many textures, pixel art, and whimsy, I wanted a typeface that could match. I found the PERFECT font on Creative Fabrica called [Stargirl](https://www.creativefabrica.com/product/stargirl/). It fit the theme exactly. So I bought a license, and wanting my website to also look like a page out of a 2000s magazine and the sites of early yonder, I designed my site (at least everything above the fold) to heavily rely on this font. Upon popping it in my site, it looked great! That is until I deployed tested it on other devices. Enter: Color Fonts.

I began researching why this font wasn't working on other browsers, and even on some devices entirely. I soon found out that the typeface I downloaded is a [color font](https://fonts.google.com/knowledge/introducing_type/introducing_color_fonts), or chromatic font. The silliest, yet best, way I think to describe them is like Word Art, but portable (with a big asterisk). Color fonts allow the use of multiple colors in a single glyph in a font. It's an exciting, relatively new technology that isn't fully supported across browsers (or even systems) yet. Turns out that Stargirl falls under such category!

So off the bat, Stargirl wasn't working everywhere I needed it to be. I did a bunch of Googling and many sources told me to convert the OTF file to other formats that browsers and systems would likely handle better such as TTF and WOFF. I tried all the converters online that I could find, alongside some popular font-editing tools, but none appeared to handle this font well. After doing a little digging, Stargirl is a little unorthodox in its foundation because apparently the glyphs aren't vector-based; under the hood they're actually PNGs! Turns out this makes many converters upset because the default functionality is to strip colors, drop bitmaps, or fail to convert glyph data entirely, as typeface glyphs are usually SVGs. It turns out the tool only accepts TrueType (.ttf) files, and because Stargirl came as an OpenType (.otf) file, the software refused to read it, throwing a cryptic "bad magic number" error.

To make matters more complicated, we were dealing with a bit of a format war. Apple devices look for a table inside the font called sbix (which holds those PNG images), while Android and Linux prefer a table called CBDT. They effectively do the same thing, but they don't speak the same language. Most standard converters try to "fix" this by stripping out all the non-standard bitmap data, which just leaves you with a plain black silhouette.

We had to get a little surgical to fix this. I worked with an AI buddy to whip up a custom Python script using the fontTools library. The goal was to perform a very specific operation: convert the font’s outlines from OpenType to TrueType so BitsNPicas would accept the file, but it **had** to do it without touching the existing color data. We also had to programmatically delete a rogue SVG table that was confusing iOS devices and causing the font to render invisibly on iPhones.Once the script gave us a clean, TrueType file that still kept its Apple colors intact, we were finally able to feed it into BitsNPicas. From there, we could "clone" the image data and inject it back in as a CBDT table, essentially tricking Android devices into recognizing the font.

After many hours and more digging into fonts than I was expecting to do, the result is a "hybrid" font setup that serves the right file to the right device, ensuring Stargirl looks correct no matter where you view it! This might be a highly specific issue as the font I was working with had many oddities about it, so I'm not too sure how much help it can be to others, but I documented the steps taken to get Stargirl working!

<a name="anchor"></a>

## Prerequisites

1. **Python 3** installed.
2. **Java** installed (for BitsNPicas).
3. **BitsNPicas.jar** downloaded ([Get it here](https://github.com/kreativekorp/bitsnpicas/releases)).
   - I used 2.1.1
4. **Python Libraries**:
   ```bash
   pip install fonttools cu2qu
   ```

---

## Step 1: Create the Base File (Apple/iOS Compatible)

First, we use a Python script to convert the font to TrueType, preserve the Apple `sbix` images, and **delete the conflicting `SVG` table** that causes iOS rendering failures.

**Script: `convert_and_clean.py`**

```python
import sys
from fontTools.ttLib import TTFont, newTable
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen

def convert_and_clean(input_path, output_path):
    print(f"Loading {input_path}...")
    font = TTFont(input_path)

    # 1. Capture glyph order and original glyphs _before_ we change anything
    glyphOrder = font.getGlyphOrder()
    original_glyph_set = font.getGlyphSet()

    # Check for color tables
    if 'sbix' in font:
        print("Found 'sbix' table. Preserving it.")
    else:
        print("Warning: No 'sbix' table found.")

    if 'SVG ' in font:
        print("Found 'SVG' table. Deleting it to prevent conflicts.")
        del font['SVG '] # Critical for iOS

    # 2. Convert outlines (CFF -> TrueType)
    print("Converting outlines to TrueType...")
    ttf_glyphs = {}
    for glyphName in glyphOrder:
        ttPen = TTGlyphPen(None)
        cu2quPen = Cu2QuPen(ttPen, max_err=1.0, reverse_direction=True)
        try:
            original_glyph_set[glyphName].draw(cu2quPen)
            ttf_glyphs[glyphName] = ttPen.glyph()
        except Exception as e:
            print(f" Failed to convert '{glyphName}', using empty glyph.")
            ttPen = TTGlyphPen(None)
            ttf_glyphs[glyphName] = ttPen.glyph()

    # 3. Swap the tables
    print("Rebuilding font structure...")
    font['loca'] = newTable('loca')
    font['glyf'] = newTable('glyf')
    font['glyf'].glyphs = ttf_glyphs
    font['loca'].locations = []

    # Create proper maxp table for TrueType
    font['maxp'] = newTable('maxp')
    font['maxp'].tableVersion = 0x00010000
    font['maxp'].numGlyphs = len(glyphOrder)
    font['maxp'].maxZones = 1
    font['maxp'].maxTwilightPoints = 0
    font['maxp'].maxStorage = 0
    font['maxp'].maxFunctionDefs = 0
    font['maxp'].maxInstructionDefs = 0
    font['maxp'].maxStackElements = 0
    font['maxp'].maxSizeOfInstructions = 0
    font['maxp'].maxComponentElements = 0

    # Remove CFF (PostScript) table
    if 'CFF ' in font:
        del font['CFF ']

    # Update header
    font.sfntVersion = "\x00\x01\x00\x00"

    # 4. Save
    font.save(output_path)
    print(f"Done! Saved to {output_path}")

# Assumes input file is "Stargirl.otf"
if __name__ == "__main__":
    convert_and_clean("Stargirl.otf", "Stargirl-Base.ttf")
```

**Run the script:**

```bash
python convert_and_clean.py
```

- **Result:** You now have `Stargirl-Base.ttf`. (This file works on macOS and iOS).

---

## Step 2: Create the Android File

We will now take that base file and inject the Android-compatible `CBDT` table into it.

1.  **Extract Images from Base:**

    ```bash
    java -jar BitsNPicas.jar extractsbix Stargirl-Base.ttf
    ```

    _Output: A folder named `Stargirl-Base.ttf.sbix.d`_

2.  **Rename the Folder:**
    - _Duplicate the folder_**(!)** and rename the copy to change `.sbix.d` to `.cbdt.d`.

    - You should now have one folder named: `Stargirl-Base.ttf.cbdt.d` and `Stargirl-Base.ttf.sbix.d`

3.  **Inject the Android Data:**

    ```bash
    java -jar BitsNPicas.jar injectcbdt Stargirl-Base.ttf
    ```

    - **Result:** This generates a new file, usually named `Stargirl-Base.ttf.cbdt.ttf`.

---

## Step 3: CSS Implementation

We now have two files:

1.  `Stargirl-Base.ttf.cbdt.ttf` (Contains Google/Android colors).
2.  `Stargirl-Base.ttf` (Contains Apple colors, no Android data).

We load them in this specific order. Android/Linux devices will accept the first file. iOS devices (which are stricter) may reject the first file but will successfully load the second "clean" file.

```css
@font-face {
  font-family: "StarGirls";
  src:
    url("./Stargirl-Base.ttf.cbdt.ttf") format("truetype"), /* Android/Linux loads this */
    url("./Stargirl-Base.ttf") format("truetype"); /* iOS/macOS falls back to this */
}

h1 {
  font-family: "StarGirls", sans-serif;
}
```
