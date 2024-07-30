import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
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
