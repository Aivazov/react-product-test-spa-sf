import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Searchbox from './Searchbox';

export default function HeaderLayout({ searchValue, setSearchValue }) {
  return (
    <div className="max-w-[960px] mx-auto my-0 px-4 py-0">
      <header className="flex items-center h-[90px] justify-between py-2 mb-4 border-b border-black">
        <p className="m-0">
          <span role="img" aria-label="computer icon">
            💻
          </span>
          <Link to="/" className="no-underline">
            Products Store
          </Link>
        </p>
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Link to="/add-product" className="no-underline">
          Add Product
        </Link>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
