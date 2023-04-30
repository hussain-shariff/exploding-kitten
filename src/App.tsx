import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  
  return (
    <div className="bg-[#020611] py-10">
      <Router>
        <Routes>
          <Route index element={<Main/>}></Route>
          <Route path="/leaderboard" element={<LeaderBoard/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
