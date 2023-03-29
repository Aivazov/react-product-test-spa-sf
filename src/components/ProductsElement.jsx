import React from 'react';
import NoImage from '../assets/images/no-image.png';
import { GrClose } from 'react-icons/gr';

export default function ProductsElement({ data }) {
  return (
    // <tr className="grid grid-cols-9" role="alert">
      <tr className="flex items-center justify-between" role="alert">
      <td>
        <label className="product-id">
          <span className="checkmark">{data.id}</span>
        </label>
      </td>
      <td className="flex items-center justify-start">
        <div className="img">
          {data.images[0] ? (
            <img src={data.images[0]} width={50} height={50} alt="" />
          ) : (
            <img src={NoImage} width={50} height={50} alt="" />
          )}
        </div>
      </td>
      <td className="name">
        <span>{data.title}</span>
      </td>
      <td className="description max-w-[200px]">
      {/* <td className="description max-w-[200px] overflow-y-scroll overflow-x-hidden"> */}
        <span className="active">{data.description}</span>
      </td>
      <td className="price">
        <span className="active">{data.price}</span>
      </td>
      <td className="rating">
        <span className="active">{data.rating}</span>
      </td>
      <td className="stock">
        <span className="active">{data.stock}</span>
      </td>
      <td className="category">
        <span className="active">{data.category}</span>
      </td>
      <td className="flex justify-center items-center">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <GrClose />
          </span>
        </button>
      </td>
    </tr>
  );
}
