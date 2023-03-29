import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Searchbox from './Searchbox';

export default function HeaderLayout() {
  return (
    <div className="max-w-[960px] mx-auto my-0 px-4 py-0">
      <header className="flex items-center justify-between gap-3 py-2 mb-4 border-b border-black">
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          <Link to="/" className="">
            Products Store
          </Link>
        </p>
        <nav className="flex flex-row justify-center items-center">
          <Searchbox />
        </nav>
        <Link to="/add-product" className="">
          Add Product
        </Link>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
