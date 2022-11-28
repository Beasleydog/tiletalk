import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './pages/game/Game';
import Test from './pages/test/Test';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Game />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
);
