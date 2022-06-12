import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.style.css';
import { Navigation } from '../Navigation';
import { Home } from '../Home';
import { Gallery } from '../Gallery';
import { Login } from '../auth/Login';
import { Search } from '../Search';
import { Experience } from '../Experience';
import { MyExperiences, MyProfile } from '../user';
import { NoMatch } from '../NoMatch';
import * as ROUTES from '../../constants/routes';


export const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.EXPERIENCES} element={<Gallery />} />
            <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          </Route>
          <Route path={ROUTES.SIGN_IN} element={<Login />} />
          <Route path={ROUTES.USER_PROFILE} element={<MyProfile />} />
          <Route path={ROUTES.USER_EXPERIENCES} element={<MyExperiences />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}


