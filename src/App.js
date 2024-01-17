import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import ReportsContainer from "./Components/Reports/ReportsContainer";

const App = () => (
  <main>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<ReportsContainer />} />
    </Routes>
  </main>
);

export default App;
