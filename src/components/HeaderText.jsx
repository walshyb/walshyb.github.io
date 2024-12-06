import "./HeaderText.scss";
/**
 * @param {string} text
 */
export default function HeaderText({ text }) {
  return (
    <>
      {text.split("").map((character) => {
        return (
          <span data-val={character} className="character-bg">
            {character}
          </span>
        );
      })}
    </>
  );
}
