import Slider from '../components/Slider';
import '../styles/MainMembers.css';
import { Link } from "react-router-dom";
import membersList from "../../data/membersList.js";

function MainMembers() {
  return (
    <div id="members">
      <div className='mainMembers'>
          <div className='members-intro'>
            <div>
              <h1>MEMBERS</h1>
              <p>MAS를 빛내고 지금까지 <br />
                이끌어 온 부원들입니다</p>
            </div>
          {/* 이거 누르면 members 페이지로 이동함 */}
          <Link to="/members" className='members-btn'>더 보기 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M1 8H17M17 8L9.8 1M17 8L9.8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg></Link>
        </div>
        {/* direction 슬라이드 방향
        normal: 오른쪽 -> 왼쪽   reverse: 왼쪽 -> 오른쪽 */}
        <Slider slideList={membersList} direction="normal" name='members-slide'/> 
      </div>
    </div>
  );
}


export default MainMembers;