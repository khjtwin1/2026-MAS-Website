import "../styles/Header.css";
import NavElements from "./NavElements";
import SocialLinks from "./SocialLinks";
import Apply from "./Apply";

const navItems = [
  { text: "VISION", path: "#vision" },
  { text: "PRIZE", path: "/" },
  { text: "MEMBERS", path: "/" },
  { text: "PROJECTS", path: "/" },
  { text: "Q&A", path: "#qna" },
];


function Header() {
  const logo = "/logo.svg";
  return (
      <div className="header">
        <div className="header_logo">
          <img src={logo} alt="로고" />
          <div className="logoText">
            <p className="logo">MAS</p>
            <p className="logoMeaning">My Ability Share</p>
          </div>
        </div>
        <ul className="nav_list">
          {navItems.map((item) => (
            <NavElements key={item.text} text={item.text} path={item.path} />
          ))}
        </ul>
        <div className="header_socialLinks">
          <SocialLinks />
        </div>
        <Apply className="header_apply" />
    </div>
  );
}

export default Header;