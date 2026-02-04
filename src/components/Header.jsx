import logo from "../../public/logo.svg";
import "../styles/Header.css"
import NavElements from "./NavElements";

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
                <NavElements text="VISION" />
                <NavElements text="PRIZE" />
                <NavElements text="MEMBERS" />
                <NavElements text="PROJECTS" />
            </ul>
            </div>
        </>
    )
}

export default Header;