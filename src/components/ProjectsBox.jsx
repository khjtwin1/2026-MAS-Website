import '../styles/ProjectsBox.css';

function ProjectsBox({img, type, year, title, subTitle}) {
  return (
    // 전체 상자
    <div className="project-box">
      {/* 배경 이미지 */}
      <div 
        className="project-image" 
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* 프로젝트 타입 & 연도 컨테이너 */}
        <div className="project-tag-wrap">
          <span className="tag">{type}</span>
          <span className="tag">{year}</span>
        </div>
      </div>
      
      <div className="project-content">
        <p className="boxTitle">{title}</p> {/* 프로젝트 이름 */}
        <span className="boxSubTitle">{subTitle}</span> {/* 프로젝트 설명 */}
      </div>
    </div>
  );
}

export default ProjectsBox;