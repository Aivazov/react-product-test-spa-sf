import React from 'react';
import { HiSearch } from 'react-icons/hi';

export default function Searchbox({ searchValue, setSearchValue }) {
  return (
    <div className="flex justify-center items-center relative mb-4 uppercase mx-6">
      <HiSearch className="w-5 h-5 absolute right-[6px] top-[31px]" />
      <input
        value={searchValue}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        className="min-w-[300px] px-2 py-2 mt-5 rounded-[4px] border border-black outline-none"
        placeholder="Search product by title..."
      />
    </div>
  );
}
