import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Members from "./pages/Members";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/members" element={<Members />}/>
    </Routes>
  );
}

export default App;
