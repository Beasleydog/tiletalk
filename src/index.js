import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './pages/game/Game';
import Done from './pages/done/Done';
import Start from './pages/start/Start';
import Instructions from './pages/instructions/Instructions';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/game" element={<Game />} />
      <Route path="/done" element={<Done />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/" element={<Start />} />
    </Routes>
  </Router>
);
