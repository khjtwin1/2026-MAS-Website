import { useNavigate } from "react-router-dom"; 
import "../styles/OurPrize.css"

function OurPrize() {
  const navigate = useNavigate();
  const nextButtonIMG = "/ourprize_nextButton.svg";
  const everyPictureIMG = "/ourprize_picture.svg";
  const planetIMG = "/ourprize_planet.svg";

  return (
    <section id="ourPrize">
      <div className="ourPrizeSection">
        <img src={planetIMG} alt="" className="ourprize_background"/>

        <div className="ourPrize">
          <h1 className="our">OUR</h1>
          <h1 className="prize">PRIZE</h1>

          <p className="explanation">우리는 매년 새로운 기록을 경신하며 <br />학교를 대표하는 전공 동아리로 거듭나고 있습니다.</p>

          <button className="morePrize" onClick={() => {
            navigate("/prize");
          }}>
            더 많은 수상내역 보기<img src={nextButtonIMG} alt="" className="nextButton"/></button>    
        </div>

        <div className="ourpPicture">
          <img src={everyPictureIMG} alt="" className="ourprizePicture"/>
        </div>  
        
      </div>
    </section>
    
  );
}

export default OurPrize;