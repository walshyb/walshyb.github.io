/**
 * @param {string} text
 */
export default function HeaderText({ text }) {
  return (
    <>
      {text.split("").map((character) => {
        return <span>{character}</span>;
      })}
    </>
  );
}
