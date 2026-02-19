import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import PrizeYearElement from "../components/PrizeYearElement";
import PrizePictureElement from "../components/PrizePictureElement";
import Banner from "../components/Banner";
import "../styles/Prize.css"

function Prize() {
  return (
    <div>
        <div>
            <Banner bannerIMG="/prize_orange.svg" h1Title="PRIZE" pExplanation1="끊임 없는 노력과 성장으로 " pExplanation2="인정받은 MAS의 주요 성과입니다."/>
        </div>

        <div className="Year">
            <PrizeYearElement Year="2026" />
            <PrizeYearElement Year="2025" />
            <PrizeYearElement Year="2024" />
        </div>
            
        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>

        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>

        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>
    </div>  
  );
}

export default Prize;