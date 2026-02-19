import Header from "../components/Header.jsx";
import MemberCard from "../components/MemberCard.jsx";
import membersList from "../../data/membersList.js";
import MemberPictureElement from "../components/MembersPictureElement";
import Banner from "../components/Banner";
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
                <div>
                    <Banner bannerIMG="/member_banner.svg" h1Title="MEMBERS" pExplanation1="MAS를 빛내고 지금까지 " pExplanation2="이끌어 온 부원들 입니다."/>
                </div>

                <div className="generation_buttons">
                    {[4,5,6].map((g) => (
                        <button key={g} className={`yearBtn ${gen === g ? "selected" : ""}`} onClick={() => setGen(g)}>
                            {g}기
                        </button>
                    ))}
                </div>

                <div className="members_grid">
                    {gen === 6 ? <p className="comingSoon">6기 모집중🔥</p> : (
                            filteredMembers.map((m) => (
                                <MemberPictureElement
                                    key={m.name}
                                    memberPicture={m.image}
                                    memberClass={m.major === 1 ? "뉴미디어소프트웨어과" : "뉴미디어디자인과"}
                                    memberName={m.name}
                                    memberYear={`${m.generation}기  ${m.role}`}
                                    memberFea1={m.tag1}
                                    memberFea2={m.tag2}
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