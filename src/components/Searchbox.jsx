import React from 'react';
import { HiSearch } from 'react-icons/hi';

export default function Searchbox() {
  return (
    <div className="flex justify-center items-center relative mb-4 uppercase">
      <HiSearch className="w-5 h-5 absolute right-[6px] top-[26px]" />
      <input type="text" className="px-2 mt-5 pb-2 rounded-[4px] border border-black" />
    </div>
  );
}
