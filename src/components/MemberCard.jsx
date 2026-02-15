import "../styles/MemberCard.css";

function MemberCard({ image, generation, name, major, role, tag1, tag2}){
    return (
        <div className="memberCard">
            <img src={image} alt={name} />
            <div className="contents">
                <p className="major">{major === 1 ? "뉴미디어소프트웨어과" : "뉴미디어디자인과"}</p>
                <p className="name">{name}</p>
                <p className="info">{generation}기 {role}</p>
                <div className="tags">
                    <p>{tag1}</p>
                    <p>{tag2}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;