import Slider from '../components/Slider';
import '../styles/MainProjects.css';
import { Link } from "react-router-dom";
import projectsList from '../../data/projectsList';

const half = Math.ceil(projectsList.length / 2);

const slideProjectsUp = projectsList.slice(0, half);
const slideProjectsDown = projectsList.slice(half);

function MainProjects() {
  return (
    <div className='mainProjects'>
      <div className='projects-intro'>
        <div>
          <h1>PROJECTS</h1>
          <p>서로의 능력을 모아 함께 완성한 <br />
            MAS의 프로젝트들을 만나보세요</p>
        </div>
        {/* 자세히 보기 누르면 프로젝트 화면으로 이동 */}
        <Link to="/projects" className='projects-btn'>자세히 보기 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M1 8H17M17 8L9.8 1M17 8L9.8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></Link>
      </div>
      
      <div className='projects-slide1'>
        <Slider slideList={slideProjectsUp} direction="reverse" name='projects-slideUp'/>
      </div>
      <Slider slideList={slideProjectsDown} direction="normal" name='projects-slideDown'/> 
      
      
    </div>
        
  );
}


export default MainProjects;