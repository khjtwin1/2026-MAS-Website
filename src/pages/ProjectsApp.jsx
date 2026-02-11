import ProjectsBanner from '../components/ProjectsBanner';
import ProjectsBox from '../components/ProjectsBox';
import '../styles/Projects.css'
import { Link } from "react-router-dom";
function ProjectsApp() {
  return (
    <>
    {/* header */}
      
      <ProjectsBanner/>

      <div className='list'>
        <Link to='/projects' className='notSelect'>ALL</Link>
        <Link to='/projects/Web' className='notSelect'>WEB</Link>
        <Link to='/projects/App' className='selected' style={{backgroundColor:'rgba(255, 157, 0, 0.32)' }}>APP</Link>
      </div>

      <div className='allProjects'>
        <div className='twoProjects'>
          <ProjectsBox img="/Momento.svg" type='App' year='2025' 
          title='Momento : 학교 생활을 더 편리하고 즐겁게'
          subTitle={
          "선생님이 내준 미션 또는 과제를 완료하면, 학급 캐릭터가 성장하여\n반의 단합, 선생님의 학생관리를 동시에 해결하는 앱입니다."} />
          <ProjectsBox img="/팝픽.svg" type='App' year='2025' 
          title='POP!CK'
          subTitle={
          "라부부를 통해 들여다보는 나의 성격유형 - 팝마트 피규어 도감 및 쇼핑 앱"} />
        </div>

        <div className='twoProjects'>
          <ProjectsBox img="/다랩.svg" type='App' year='2025' 
          title='다랩'
          subTitle={
          "칭찬과 격려를 시각화 해주는 칭찬도장 시스템"} />
          <ProjectsBox img="/오름.svg" type='App' year='2025' 
          title='오름'
          subTitle={ // 등산으로 목표 설정, 캐릭터·산 선택, 등반일지와 상황 기록으로 디지털 디톡스 지원
                      //할 일을 통해 휴대폰 시간을 줄이는 디지털디톡스 서비스
                      //“등산”을 통해 매일 목표를 세우고, 동행 캐릭터 설정,\n목표 산 선택, 오늘의 등반, 등반일지, 등반 상황 등 여러\n기능을 통해 목표를 세워 디지털 디톡스를 지원합니다.
          "“등산”을 통해 매일 목표를 세워 할 일을 통해\n휴대폰 시간을 줄이는 디지털디톡스 서비스"} />
        </div>

        <div className='twoProjects'>
          <ProjectsBox img="/MUSEWAVE.svg" type='App' year='2025' 
          title='MUSE WAVE'
          subTitle={
          "사용자 맞춤형 AI튜터가 공감대를 형성하여\n공부를 도와주는 맞춤형 AI튜터 학습 앱 입니다."} />
          <ProjectsBox img="/솦챌_읽go.svg" type='App' year='2025' 
          title='읽go'
          subTitle={
          "논문, 보고서, 전공 서적 등 어렵고 깊이 있는 글을 제대로 소화하고,\n자신의 지식으로 만들도록 돕는 AI 학습 파트너"} />
        </div>
      
      </div>
      
      

    {/* footer */}
    </>
  );
}

export default ProjectsApp;