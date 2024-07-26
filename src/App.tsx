import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import TeamFeedback from './TeamFeedback';
import ClientFeedback from './ClientFeedback';
import PricingPage from './PricingPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<TeamFeedback />} />
        <Route path="/clients" element={<ClientFeedback />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
