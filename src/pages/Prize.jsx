import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import prizeList from "../../data/prizeList.js";
import PrizeYearElement from "../components/PrizeYearElement";
import PrizePictureElement from "../components/PrizePictureElement";
import Banner from "../components/Banner";
import "../styles/Prize.css"
import { useState } from "react";

function Prize() {
    const [gen, setGen] = useState(2026);
    const filteredPrizes = prizeList.filter(
        (p) => p.year === gen
    );

  return (
    <>
        <Header/>
        <div className="prize">
            <div>
                <Banner bannerIMG="/prize_orange.svg" h1Title="PRIZE" pExplanation1="끊임 없는 노력과 성장으로 " pExplanation2="인정받은 MAS의 주요 성과입니다."/>
            </div>

            <div className="Year">
                {[2024,2025,2026].map((g) => (
                    <button key={g} className={`yearBtn ${gen === g ? "selected" : ""}`} onClick={() => setGen(g)}>
                        {g}
                    </button>
                ))}
            </div>

            <div className="prize_grid">
                {filteredPrizes.map((p, index) => (
                    <PrizePictureElement
                        key={index}
                        PictureElement={p.image}
                        explanationElement={p.explanation}
                    />
                ))}
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Prize;