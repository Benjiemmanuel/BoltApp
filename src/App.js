import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LandPage from "./pages/LandPage";
import AuthorizePage from "./pages/AuthorizePage";
import VerifyPage from "./pages/VerifyPage";
import EmailNameFieldPage from "./pages/UserForm"; // Import EmailNameFieldPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/landpage" element={<LandPage />} />
        <Route path="/authorize" element={<AuthorizePage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/emailnamefield" element={<EmailNameFieldPage />} />{" "}
        {/* Route for EmailNameFieldPage */}
      </Routes>
    </Router>
  );
};

export default App;
