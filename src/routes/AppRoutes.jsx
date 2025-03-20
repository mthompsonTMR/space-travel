import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Spacecrafts from "../pages/Spacecrafts.jsx";
import SpacecraftDetail from "../pages/SpacecraftDetail.jsx";
import Construction from "../pages/Construction.jsx";
import Planets from "../pages/Planets.jsx";
import PlanetDetail from "../pages/PlanetDetail.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spacecrafts" element={<Spacecrafts />} />
        <Route path="/spacecraft/:id" element={<SpacecraftDetail />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet/:id" element={<PlanetDetail />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
