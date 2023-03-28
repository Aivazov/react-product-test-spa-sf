import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Searchbox from './Searchbox';

export default function Header() {
  return (
    <div>
      <header className='flex items-center justify-center'>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Merch Store
        </p>
        <nav className="flex flex-row justify-center items-center">
          <Searchbox />
          <Link to="/products" className=''>Add Product</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
