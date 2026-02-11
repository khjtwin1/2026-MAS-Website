import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MainProjects from "./pages/MainProjects";
import Projects from "./pages/Projects";
import ProjectsWeb from "./pages/ProjectsWeb";
import ProjectsApp from "./pages/ProjectsApp";
function App() {
  return (
    <Routes>
      {/* 메인 안에 있는 Projects 페이지 */}
      <Route path="/" element={<MainProjects />} />
      
      {/*프로젝트 페이지 중 자세히 보기를 누르면 이동하는 페이지 */}
      <Route path="/projects" element={<Projects />} />  {/* All */}
      <Route path="/projects/Web" element={<ProjectsWeb />} /> {/* Web */}
      <Route path="/projects/App" element={<ProjectsApp />} /> {/* App */}
    </Routes>
  );
}

export default App;
