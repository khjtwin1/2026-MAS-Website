import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      
      
    </Routes>
  )
}
export default App;
