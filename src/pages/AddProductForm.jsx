import React from 'react';

export default function AddProductForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Adding of the product</h1>
      <div className="flex justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-start items-stretch space-y-3"
        >
          <div>
            <label>
              <input
                type="text"
                placeholder="Name"
                className="border border-black rounded-lg py-2 px-4 text-start mr-4"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Author"
                className="border border-black rounded-lg py-2 px-4 text-start"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="date"
                placeholder="Date"
                className="border border-black rounded-lg py-2 px-4 text-start mr-4"
              />
            </label>
            <label>
              <input
                type="number"
                placeholder="Price"
                className="border border-black rounded-lg py-2 px-4 text-start"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="number"
                placeholder="Rating"
                className="border border-black rounded-lg py-2 px-4 text-start mr-4"
              />
            </label>
            <label>
              <input
                type="number"
                placeholder="Stock"
                className="border border-black rounded-lg py-2 px-4 text-start"
              />
            </label>
          </div>
          <label>
            <input
              type="text"
              placeholder="Category"
              className="border border-black rounded-lg py-2 px-4 text-start w-full"
            />
          </label>
          <label className="">
            <textarea
              type="text"
              placeholder="Description"
              className="border border-black rounded-lg py-2 px-4 text-start w-full"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-black rounded-lg text-white py-3 hover:bg-gray-600 transition-all ease duration-200"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
