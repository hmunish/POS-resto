import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import ReportsContainer from "./Components/Reports/ReportsContainer";
import Settings from "./Components/Settings/Settings";

const App = () => (
  <main>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<ReportsContainer />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </main>
);

export default App;
