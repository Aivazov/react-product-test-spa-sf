import React from 'react';
import NoImage from '../assets/images/no-image.png';
import { GrClose } from 'react-icons/gr';

import styles from '../components/styles/ProductsElement.module.scss';

export default function ProductsElement({ data }) {
  return (
    // <tr className="grid grid-cols-9" role="alert">
    <tr
      className={styles.root}
      // className="flex items-center justify-between h-10 bg-gray-400 rounded-2xl px-3 overflow-hidden mb-2"
      role="alert"
    >
      <td className="w-[10px]">
        <label className="product-id">
          <span className="checkmark">{data.id}</span>
        </label>
      </td>
      <td className="flex items-center justify-start w-[50px]">
        {/* <td className={styles.root.images}> */}
        {/* <td className="flex items-center justify-start"> */}
        <div className="img">
          {data.thumbnail ? (
            <img src={data.thumbnail} width={50} height={50} alt="" />
          ) : (
            <img src={NoImage} width={50} height={50} alt="" />
          )}
        </div>
      </td>
      <td className="w-[110px]">
        <span className="max-w-[50px]">{data.title}</span>
      </td>
      <td className="description  w-[260px]">
        {/* <td className="description max-w-[200px] overflow-y-scroll overflow-x-hidden"> */}
        <span className="active ">{data.description}</span>
      </td>
      <td className="price mr-3">
        <span className="active">{data.price}</span>
      </td>
      <td className="rating w-[30px] mr-2">
        <span className="active">{data.rating}</span>
      </td>
      <td className="stock">
        <span className="active">{data.stock}</span>
      </td>
      <td className="category w-[50px] text-center mr-3 ">
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
