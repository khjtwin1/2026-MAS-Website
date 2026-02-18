import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/*프로젝트 페이지 중 자세히 보기를 누르면 이동하는 페이지 */}
      <Route path="/projects" element={<Projects />} />  {/* All */}
      
      
    </Routes>
  )
}
export default App;
