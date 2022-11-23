import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import LandingPage from "./Pages/LandingPage";
import PageLayout from './Pages/PageLayout';
import LoginPage from './Pages/LoginPage';
import PlayerPage from './Pages/PlayersPage';
import TeamPage from './Pages/TeamsPage';
import MatchDataPage from './Pages/MatchDataPage';
import LivePage from './Pages/LivePage';
import StandingPage from './Pages/StandingPage';
import OAuthCallbackPage from './Pages/OAuthCallbackPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />} >
        <Route index element={<LandingPage />} />
        <Route path="players" element={<PlayerPage />} />
        <Route path="teams" element={<TeamPage />} />
        <Route path="match-data" element={<MatchDataPage />} />
        <Route path="live" element={<LivePage />} />
        <Route path="standings" element={<StandingPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="oauth/callback" element={<OAuthCallbackPage />} />
    </Routes>
  );
}

export default App;
