import "./Wanderlust.scss";

/**
 * @params {number} count - number of imgs to display
 * @params {string} src - source of the images
 */
export default function Wanderlust({ src, count }) {
  const imgs = [];

  for (let i = 0; i < count; i++) {
    imgs.push(<img key={i} className="wanderlust-img" src={src} />);
  }

  return <div className="wanderlust">{imgs}</div>;
}
