import { Link } from "react-router-dom";
import "../styles/MembersMain.css";
import Apply from "../components/Apply.jsx";
import membersList from "../../data/membersList.js";

function MembersMain(){
    const arrow = "/arrow.svg";
    return (
        <div className="members_main">
            <div className="top">
                <div className="texts">
                    <h1>MEMBERS</h1>
                    <p>MAS를 빛내고 지금까지<br/>이끌어 온 부원들입니다.</p>
                </div>
                <div className="buttons">
                    <Apply />
                    <Link to="/members" className="watch_more">
                        <p>더보기</p>
                        <img src={arrow} alt="arrow" className="arrow" />
                    </Link>
                </div>
            </div>
            <div className="slide">
                <div className="slide_card">
                    {membersList.map((item) => (
                        <img key={item.name} src={item.image} alt={item.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MembersMain;