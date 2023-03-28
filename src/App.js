import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
    </Routes>
  );
}

export default App;
