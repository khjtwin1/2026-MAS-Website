import ProjectsBanner from '../components/ProjectsBanner';
import ProjectsBox from '../components/ProjectsBox';
import '../styles/Projects.css'
import { Link } from "react-router-dom";

const projects = [
  {
    img: "/SignLanguageTranslator.svg",
    type:'Web',
    year:'2025',
    title:'수화번역기',
    subTitle: "비장애인과 장애인의 소통 장벽을 허물어 소통을 돕는 서비스" 
  },
  {
    img: "/Nyangnyangmasmap.svg",
    type:'Web',
    year:'2025',
    title:'냥냥마스맵',
    subTitle: "길고양이를 좋아하는 사람들을 위한 길고양이 커뮤니티" 
  },
  {
    img: "/Ulikkili.svg",
    type:'Web',
    year:'2025',
    title:'우리끼리',
    subTitle: "학교 생활을 더 편리하고 즐겁게 만들기 위한\n우리반만의 프라이빗한 공간" 
  },
  {
    img: "/GreetingChallenge.svg",
    type:'Web',
    year:'2025',
    title:'인사챌린지',
    subTitle: "미림의 전통인 인사를 게임으로 쉽게 배울 수 있는 서비스" 
  },
  {
    img: "/STEPBYSTEP.svg",
    type:'Web',
    year:'2025',
    title:'STEPBYSTEP',
    subTitle: "건강에 한걸을 한걸음" 
  },
  {
    img: "/SajuBoys.svg",
    type:'Web',
    year:'2025',
    title:'사주보이즈',
    subTitle: "사주를 보다 정확하고 간편하게 해주는 사주 명리학을 기반으로 한 사주 웹사이트" 
  },
  {
    img: "/SCHOK.svg",
    type:'Web',
    year:'2025',
    title:'SCHOK',
    subTitle: "속초시 학생들에게 꼭 필요한 정보만 모은 정보 플랫폼" 
  },
  {
    img: "/Signal.svg",
    type:'Web',
    year:'2025',
    title:'SIGNAL',
    subTitle: "온라인으로 한 걸음 다가가는 미림인을 위한 서비스" 
  }
]

function ProjectsWeb() {
  return (
    <>
    {/* header */}
      
      <ProjectsBanner/>

      <div className='list'>
        <Link to='/projects' className='notSelect'>ALL</Link>
        <Link to='/projects/Web' className='selected'>WEB</Link>
        <Link to='/projects/App' className='notSelect'>APP</Link>
      </div>
      
      <div className='allProjects'>
        {
          projects.map(item => (
            <ProjectsBox 
            key={item.title}
            img={item.img}
            type={item.type}
            year={item.year}
            title={item.title}
            subTitle={item.subTitle}
            />
          ))
        }
      </div>
      

    {/* footer */}
    </>
  );
}

export default ProjectsWeb;