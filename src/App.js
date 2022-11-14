import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.css';
import Team from './Pages/Team';
import Events from './Pages/Events';
import Faculty from './Pages/Faculty';
import ErrorPage from './Pages/ErrorPage';

class App extends Component {
  render() {
  return (
  <div>
    <BrowserRouter>
        <Routes>
          <Route path="/"  exact element={<HomePage />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/event" exact element={<Events/>} />
          <Route path="/faculty" exact element={<Faculty/>} />
          <Route path='*'   element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}
}

export default App;
