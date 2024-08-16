import "./IntroBox.scss";
import PlaidBg from "../images/gingham_plaid_background.png";

export default function IntroBox() {
  return (
    <section className="intro-box">
      <div className="intro-img-container">
        <img className="intro-img" src="https://placehold.co/300x300" />
      </div>
      <div className="intro-content">
        <div className="intro-text">
          <p>Howdy!</p>
          <p>Some stuff</p>
          <p>Or jump down to other stuff</p>
        </div>

        <div className="affiliate-banners">
          <img className="affiliate-banner" src="https://placehold.co/81x33" />
          <img className="affiliate-banner" src="https://placehold.co/81x33" />
          <img className="affiliate-banner" src="https://placehold.co/81x33" />
        </div>
      </div>
    </section>
  );
}
