import ProjectsBanner from '../components/ProjectsBanner';
import ProjectsBox from '../components/ProjectsBox';
import '../styles/Projects.css'
import { Link } from "react-router-dom";

const projects = [
  {
    img: "/Oleum.svg",
    type:'App',
    year:'2025',
    title:'오름',
    subTitle: "“등산”을 통해 매일 목표를 세워 할 일을 통해\n휴대폰 시간을 줄이는 디지털디톡스 서비스" 
  },
  {
    img: "/MUSEWAVE.svg",
    type:'App',
    year:'2025',
    title:'MUSE WAVE',
    subTitle: "사용자 맞춤형 AI튜터가 공감대를 형성하여\n공부를 도와주는 맞춤형 AI튜터 학습 앱 입니다." 
  },
  {
    img: "/ReadGo.svg",
    type:'App',
    year:'2025',
    title:'읽go',
    subTitle: "논문, 보고서, 전공 서적 등 어렵고 깊이 있는 글을 제대로 소화하고,\n자신의 지식으로 만들도록 돕는 AI 학습 파트너" 
  },
  {
    img: "/Dalab.svg",
    type:'App',
    year:'2025',
    title:'다랩',
    subTitle: "칭찬과 격려를 시각화 해주는 칭찬도장 시스템" 
  },
  {
    img: "/Momento.svg",
    type:'App',
    year:'2025',
    title:'Momento',
    subTitle: "반 친구들이 선생님이 내준 미션 또는 과제를 완료하면,\n학급 캐릭터가 성장하여 반의 단합, 선생님의 학생관리를\n동시에 해결하는 앱입니다." 
  },
  {
    img: "/POP!CK.svg",
    type:'App',
    year:'2025',
    title:'POP!CK',
    subTitle: "라부부를 통해 들여다보는 나의 성격유형 - 팝마트 피규어 도감 및 쇼핑 앱" 
  },
]

function ProjectsApp() {
  return (
    <>
    {/* header */}
      
      <ProjectsBanner/>

      <div className='list'>
        <Link to='/projects' className='notSelect'>ALL</Link>
        <Link to='/projects/Web' className='notSelect'>WEB</Link>
        <Link to='/projects/App' className='selected'>APP</Link>
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

export default ProjectsApp;