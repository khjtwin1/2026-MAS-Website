import SocialLinks from "./SocialLinks";
import "../styles/Footer.css";
import NavElements from "./NavElements";

let navItems = [
  "VISON",
  "PRIZE",
  "MEMBERS",
  "PROJECTS",
  "Q&A",
  "JOIN THE CREW",
];

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="footer_logo">
          <p>MAS</p>
          <p className="orange">.</p>
        </div>
        <div className="info">
          <p>MAS - Official Club Website</p>
          <p>Mirim Meister High School - Major Club</p>
          <p>"Show your potential."</p>
        </div>
        <SocialLinks />
      </div>

      <div className="right">
        <p className="title">NAVIGATION</p>
        <ul className="nav_list">
          {navItems.map((item) => (
            <NavElements key={item} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
