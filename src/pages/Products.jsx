import React, { useState, useEffect } from 'react';
// import { getProducts } from '../API';
import axios from 'axios';
import ProductsElement from '../components/ProductsElement';
import ProductsSkeleton from '../components/ProductsSkeleton';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'https://dummyjson.com/products';

export default function Products({ searchValue, setSearchValue }) {
  const [total, setTotal] = useState({});
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [productsPerTime, setProductsPerTime] = useState(10);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const productsComponent = products
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((product) => <ProductsElement key={product.id} data={product} />);

  const skeletons = [...new Array(10)].map((_, idx) => (
    <ProductsSkeleton key={idx} />
  ));

  const fetchProducts = () => {
    setIsLoading(true);
    return axios
      .get(`${URL}?limit=${productsPerTime}&skip=${skip}`)
      .then((res) => {
        // console.log('res.data.products', res.data.products);
        setTotal(res.data.total);
        console.log('total products', res.data.total);
        setProducts(res.data.products);
        setTotalPages(res.data.total / productsPerTime);
        setIsLoading(false);
        console.log('totalPages', totalPages);
        return res;
      });
  };

  // const removeItem = () => {};

  useEffect(() => {
    fetchProducts();
    // onPageNav();
  }, [totalPages]);

  const sortById = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstId, secondId) => secondId.id - firstId.id
      );
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
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
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
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
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
    }
  };

  const sortByPrice = () => {
    setToggle(!toggle);
    setSorted(products);
    if (!toggle) {
      const sortDescendingOrder = [...products].sort(
        (firstPrice, secondPrice) => secondPrice.price - firstPrice.price
      );
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
    }
  };

  const sortByRating = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstRating, secondRating) => secondRating.rating - firstRating.rating
      );
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
    }
  };

  const sortByStock = () => {
    setToggle(!toggle);
    setSorted(products);
    if (toggle === false) {
      const sortDescendingOrder = [...products].sort(
        (firstStock, secondStock) => secondStock.stock - firstStock.stock
      );
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
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
      setProducts(sortDescendingOrder);
    } else {
      setProducts(sorted);
    }
  };

  const onPageNav = (index) => {
    console.log(index);
    setActivePage(index);

    return axios
      .get(`${URL}?limit=${productsPerTime}&skip=${productsPerTime * index}`)
      .then((res) => {
        setTotal(res.data.total);
        setProducts(res.data.products);
        setTotalPages(total / productsPerTime);
        setIsLoading(false);
        return res;
      });
  };

  const onPageMove = (value) => {};

  console.log('TotalPages', totalPages);
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
                {isLoading && skeletons}
                {!isLoading && products.length > 0 && productsComponent}
                {!isLoading && products.length < 1 && (
                  <div>Found no products yet</div>
                )}

                {totalPages && (
                  <Pagination>
                    {activePage > 0 ? (
                      <Pagination.Prev
                        onClick={() => onPageNav(activePage - 1)}
                      />
                    ) : (
                      <Pagination.Prev disabled />
                    )}
                    {[...new Array(totalPages)].map((_, index) => (
                      <Pagination.Item
                        key={index}
                        active={index === activePage}
                        onClick={() => onPageNav(index)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}

                    {/* {Array.from({ length: 10 }).map((_, index) => (
                    <Pagination.Item key={index}>{index + 1}</Pagination.Item>
                  ))} */}
                    {activePage + 1 !== totalPages ? (
                      <Pagination.Next
                        onClick={() => onPageNav(activePage + 1)}
                      />
                    ) : (
                      <Pagination.Next disabled />
                    )}
                  </Pagination>
                )}

                {/* <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item >{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
