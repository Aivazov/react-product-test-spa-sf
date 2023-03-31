import React, { useState, useEffect } from 'react';
// import NoImage from '../assets/images/no-image.png';
// import { getProducts } from '../API';
import axios from 'axios';
import ProductsElement from '../components/ProductsElement';
import ProductsSkeleton from '../components/ProductsSkeleton';

const URL = 'https://dummyjson.com/products?limit=10';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);
    return axios.get(URL).then((res) => {
      console.log('res.data.products', res.data.products);
      setProducts(res.data.products);
      setIsLoading(false);
      return res;
    });
  };

  // const removeItem = () => {};

  useEffect(() => {
    fetchProducts();
  }, []);

  // fetchProducts();
  console.log('products', products);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="text-start hidden">Products</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-wrap">
            <table className="flex flex-col">
              <thead>
                {/* <tr className="grid grid-cols-9"> */}
                <tr className="flex items-center justify-between">
                  <th className="">ID</th>
                  <th className="w-[60px]">Photo</th>
                  <th className="">Name</th>
                  <th className="w-[330px]">Description</th>
                  <th className="">Price</th>
                  <th className="">Rating</th>
                  <th className="">Stock</th>
                  <th className='w-[50px]'>Category</th>
                  <th className='w-7'> </th>
                </tr>
              </thead>
              <tbody>
                {isLoading &&
                  [...new Array(10)].map(() => <ProductsSkeleton />)}

                {!isLoading &&
                  products.length > 0 &&
                  products.map((product) => (
                    <ProductsElement key={product.id} data={product} />
                  ))}

                {!isLoading && products.length < 1 && (
                  <div>Found no products yet</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
