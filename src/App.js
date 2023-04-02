import { Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import HeaderLayout from './components/HeaderLayout';

import './App.css';
import Products from './pages/Products';
import AddProductForm from './pages/AddProductForm';
import NotFound from './pages/NotFound';

function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
      >
        <Route
          path="/"
          element={
            <Products
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        ></Route>
        <Route path="add-product" element={<AddProductForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
