import React from 'react';
import NoImage from '../assets/images/no-image.png';

export default function Products() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="text-start">Products</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-wrap">
            <table className="table table-responsive-xl">
              <thead>
                <tr>
                  <th className="pr-2">ID</th>
                  <th className="pr-2">Photo</th>
                  <th className="pr-2">Name</th>
                  <th className="pr-2 max-w-[200px]">Description</th>
                  <th className="pr-2">Price</th>
                  <th className="pr-2">Rating</th>
                  <th className="pr-2">Stock</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert" role="alert">
                  <td>
                    <label className="product-id">
                      <span className="checkmark">1</span>
                    </label>
                  </td>
                  <td className="flex items-center justify-start">
                    <div className="img">
                      <img src={NoImage} width={50} height={50} alt="" />
                    </div>
                  </td>
                  <td className="name">
                    <span>Apple Iphone 13</span>
                  </td>
                  <td className="description max-w-[200px]">
                    <span className="active">
                      An apple mobile which is nothing like apple
                    </span>
                  </td>
                  <td className="price">
                    <span className="active">$549</span>
                  </td>
                  <td className="rating">
                    <span className="active">4.69</span>
                  </td>
                  <td className="stock">
                    <span className="active">94</span>
                  </td>
                  <td className="category">
                    <span className="active">smartphones</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>

                <tr className="alert" role="alert">
                  <td>
                    <label className="product-id">
                      <span className="checkmark">1</span>
                    </label>
                  </td>
                  <td className="flex items-center justify-start">
                    <div className="img">
                      <img src={NoImage} width={50} height={50} alt="" />
                    </div>
                  </td>
                  <td className="name">
                    <span>Apple Iphone 13</span>
                  </td>
                  <td className="description max-w-[200px]">
                    <span className="active">
                      An apple mobile which is nothing like apple
                    </span>
                  </td>
                  <td className="price">
                    <span className="active">$549</span>
                  </td>
                  <td className="rating">
                    <span className="active">4.69</span>
                  </td>
                  <td className="stock">
                    <span className="active">94</span>
                  </td>
                  <td className="category">
                    <span className="active">smartphones</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
