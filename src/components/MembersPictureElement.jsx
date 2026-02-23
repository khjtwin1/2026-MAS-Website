import { Link } from "react-router-dom";
import "../styles/MemberPictureElement.css"


function MemberPictureElement({ memberPicture, memberClass, memberName, memberYear, memberFea1, memberFea2 }) {
  return (
    <div className="card">
        <img src={memberPicture} alt="" className="memberPicture"/>
        <div>
            <div className="memberOverlay">
                <div>
                    <p className="memberClass">{memberClass}</p>
                    <h1 className="memberName">{memberName}</h1>
                    <span className="memberYear">{memberYear}</span>
                </div>

                <div className="memberFea">
                    <p className="memberFea1">{memberFea1}</p>
                    <p className="memberFea2">{memberFea2}</p>
            </div>
            </div>

            
        </div>
    </div>
  );
}

export default MemberPictureElement;
