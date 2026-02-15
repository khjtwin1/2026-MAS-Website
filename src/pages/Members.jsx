import Header from "../components/Header.jsx";
import MemberCard from "../components/MemberCard.jsx";
import membersList from "../../data/membersList.js";
import "../styles/Members.css";
import { useState } from "react";

function Members(){
    const [gen, setGen] = useState(5);
    const filteredMembers = membersList.filter(
        (m) => m.generation === gen
    );
    // const members_banner = "/members_banner.svg";

    return(
        <>
            <Header />
            <div className="members">
                <div className="banner">
                    
                    <p className="banner_title">MEMBERS</p>
                    <p>MAS를 빛내고 지금까지<br/>이끌어 온 부원들입니다.</p>
                </div>

                <div className="generation_buttons">
                    {[4,5,6].map((g) => (
                        <button key={g} className={`genBtn ${gen === g ? "selected" : ""}`} onClick={() => setGen(g)}>
                            {g}기
                        </button>
                    ))}
                </div>

                <div className="members_grid">
                    {gen === 6 ? <p className="comingSoon">6기 모집중🔥</p> : (
                            filteredMembers.map((m) => (
                                <MemberCard
                                    key={m.name}
                                    image={m.image}
                                    generation={m.generation}
                                    name={m.name}
                                    major={m.major}
                                    role={m.role}
                                    tag1={m.tag1}
                                    tag2={m.tag2}
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Members;