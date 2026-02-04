import logo from "../../public/logo.svg";
import "../styles/Header.css";
import NavElements from "./NavElements";
import SocialLinks from "./SocialLinks";
import Apply from "./Apply";

const navItems = ["VISON", "PRIZE", "MEMBERS", "PROJECTS", "Q&A"];

function Header() {
  return (
    <>
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
            <NavElements key={item} text={item} />
          ))}
        </ul>
        <div className="header_socialLinks">
          <SocialLinks />
        </div>
        <div className="header_apply">
          <Apply />
        </div>
      </div>
    </>
  );
}

export default Header;
