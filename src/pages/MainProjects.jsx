import '../styles/MainProjects.css';
import { Link } from "react-router-dom";
function MainProjects() {
  return (
    <>
      <div className='projects-intro'>
        <div>
          <h1>PROJECTS</h1>
          <p>서로의 능력을 모아 함께 완성한 <br />
            MAS의 프로젝트들을 만나보세요</p>
        </div>
        {/* 자세히 보기 누르면 프로젝트 화면으로 이동 */}
        <Link to="/projects" className='btn'>자세히 보기 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M1 8H17M17 8L9.8 1M17 8L9.8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></Link>
      </div>
      <p>이미지 슬라이드 애니메이션 들어갈 곳</p>
        
    </>
  );
}


export default MainProjects;