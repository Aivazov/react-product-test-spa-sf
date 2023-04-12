import React, { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './components/HeaderLayout';

import Products from './pages/Products';
// import FormikForm from './pages/FormikForm';
import ProductForm from './pages/ProductForm/ProductForm';
import NotFound from './pages/NotFound';
import Counter from './components/Counter';

import './App.css';

export const SearchValueContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      <Routes>
        <Route
          path="/"
          element={
            <HeaderLayout
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />
          }
        >
          {/* <Route path="/" element={<Counter />} /> */}
          <Route
            path="/"
            element={
              <Products
                // searchValue={searchValue}
                // setSearchValue={setSearchValue}
              />
            }
          ></Route>
          <Route path="add-product" element={<ProductForm />}></Route>
          {/* <Route path="add-product" element={<AddProductForm />}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </SearchValueContext.Provider>
  );
}

export default App;
