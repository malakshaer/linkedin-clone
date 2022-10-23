import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import Application from "./pages/Application";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Notification from "./components/Notification";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
