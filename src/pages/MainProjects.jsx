import Slider from '../components/Slider';
import '../styles/MainProjects.css';
import { Link } from "react-router-dom";

const slideProjects1 = [
  {
    img: "/Dalab.svg"
  },
  {
    img: "/Momento.svg"
  },
  {
    img: "/Signal.svg"
  },
  {
    img: "/Oleum.svg"
  },
  {
    img: "/POP!CK.svg"
  },
  {
    img: "/ReadGo.svg"
  },
]
const slideProjects2 = [
  {
    img: "/SajuBoys.svg"
  },
  {
    img: "/GreetingChallenge.svg"
  },
  {
    img: "/STEPBYSTEP.svg"
  },
  {
    img: "/Ulikkili.svg"
  },
  {
    img: "/SignLanguageTranslator.svg"
  },
  {
    img: "/Nyangnyangmasmap.svg"
  },
]

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
      
      <div className='projects-slide1'><Slider slideProjects={slideProjects1} width={387} height={219} direction="reverse" /></div>
      <Slider slideProjects={slideProjects2} width={387} height={219} direction="normal" /> 
      
      
    </div>
      // normal   reverse
        
  );
}


export default MainProjects;