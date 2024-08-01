import "./Header.scss";
import Wanderlust from "./Wanderlust";
import Anya from "../images/anya.gif";

export default function Header() {
  return (
    <header className="header">
      <Wanderlust src={Anya} count={10} />
      <div className="content-container">
        <div className="pic-container">
          <img
            className="profile-pic"
            src="https://placehold.co/200x200/EEE/31343C"
          />
        </div>
        <div className="title-container">
          <h1>Hi, I'm Brandon</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </header>
  );
}
