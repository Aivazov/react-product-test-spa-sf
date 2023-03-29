import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import HeaderLayout from './components/HeaderLayout';

import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Products />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
