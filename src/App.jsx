import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import OurPrize from "./pages/OurPrize.jsx";
import Prize from "./pages/Prize.jsx";
import Members from "./pages/Members";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/ourPrize" element={<OurPrize />}/>
      <Route path="/prize" element={<Prize />}/>
      <Route path="/members" element={<Members />}/>
      Rou
    </Routes>
  );
}

export default App;
