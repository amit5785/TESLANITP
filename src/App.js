import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import './App.css';
import Team from './Pages/Team';

class App extends Component {
  render() {
  return (
  <div>
    <BrowserRouter>
        <Routes>
          <Route path="/"  exact element={<HomePage />} />
          <Route path="/team" element={<Team />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}
}

export default App;
