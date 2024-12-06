import "./Header.scss";
import Wanderlust from "./Wanderlust";
import Anya from "../images/anya.gif";
import HeaderText from "./HeaderText";
import Kris from "../images/kris.png";

export default function Header() {
  return (
    <header className="header">
      <div className="content-container">
        <div className="pic-container">
          <img className="profile-pic" src={Kris} />
        </div>
        <div className="title-container">
          <h1>
            <HeaderText text="Hi, I'm Brandon" />
          </h1>
          <h2>
            <HeaderText text="Software Engineer" />
          </h2>
        </div>
      </div>
    </header>
  );
}
