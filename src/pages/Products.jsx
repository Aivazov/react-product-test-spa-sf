import React, { useState, useEffect } from 'react';
// import NoImage from '../assets/images/no-image.png';
// import { getProducts } from '../API';
import axios from 'axios';
import ProductsElement from '../components/ProductsElement';
import ProductsSkeleton from '../components/ProductsSkeleton';

const URL = 'https://dummyjson.com/products?limit=10';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

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

  const sortById = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstId, secondId) => secondId.id - firstId.id
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
    // const sortDescendingOrder = [...products].sort(
    //   (firstId, secondId) => secondId.id - firstId.id
    // );

    // setProducts(sortDescendingOrder);
    // return sortDescendingOrder;

    // return products.sort((firstId, secondId) => secondId.id - firstId.id);
    // console.log(sortDescendingOrder);
  };

  const sortByTitle = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstTitle, secondTitle) =>
          secondTitle.title.localeCompare(firstTitle.title)
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

  const sortByDescription = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstDescription, secondDescription) =>
          secondDescription.description.localeCompare(
            firstDescription.description
          )
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

  const sortByPrice = () => {
    setToggle(!toggle);
    setSorted(products);
    if (!toggle) {
      const sortDescendingOrder = [...products].sort(
        (firstPrice, secondPrice) => secondPrice.price - firstPrice.price
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

  const sortByRating = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstRating, secondRating) => secondRating.rating - firstRating.rating
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

  const sortByStock = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstStock, secondStock) => secondStock.stock - firstStock.stock
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

  const sortByCategory = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstCategory, secondCategory) =>
          secondCategory.category.localeCompare(firstCategory.category)
      );
      console.log('done');
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
      console.log('denied');
    }
  };

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
                  <th className="cursor-pointer" onClick={sortById}>
                    ID
                  </th>
                  <th className="w-[60px]">Photo</th>
                  <th className="cursor-pointer" onClick={sortByTitle}>
                    Title
                  </th>
                  <th
                    className="w-[330px] cursor-pointer"
                    onClick={sortByDescription}
                  >
                    Description
                  </th>
                  <th className="cursor-pointer" onClick={sortByPrice}>
                    Price
                  </th>
                  <th className="cursor-pointer" onClick={sortByRating}>
                    Rating
                  </th>
                  <th className="cursor-pointer" onClick={sortByStock}>
                    Stock
                  </th>
                  <th
                    className="w-[50px] cursor-pointer"
                    onClick={sortByCategory}
                  >
                    Category
                  </th>
                  <th className="w-7"> </th>
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
