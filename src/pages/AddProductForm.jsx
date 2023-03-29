import React from 'react';

export default function AddProductForm() {
  return (
    <div>
      <h1>Adding of the product</h1>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          <input type="num" placeholder="Price" />
        </label>
        <label htmlFor="">
          <input type="num" placeholder="Rating" />
        </label>
        <label htmlFor="">
          <input type="num" placeholder="Stock" />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Category" />
        </label>
        <label htmlFor="">
          <textarea type="text" placeholder="Description" />
        </label>
      </form>
    </div>
  );
}
