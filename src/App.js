import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Bannar from "./DashBoard/Banner/Bannar";
import DashboardHome from './DashBoard/DashboardHome/DashboardHome';
import GlobalSetting from "./Pages/GlobalSetting";
import Session from "./Pages/Session";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHome />}> </Route>
          <Route path="/banner" element={<Bannar />}> </Route>
          <Route path="/global-settings" element={<GlobalSetting />}> </Route>
          <Route path="/session" element={<Session />}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
