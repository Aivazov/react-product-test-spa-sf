import React from 'react';
import styles from '../components/styles/NotFound.module.scss';

console.log(styles);

export default function NotFound() {
  return (
    <div className={styles.root}>
    {/* <div className="text-center"> */}
      <h1 className="text-3xl font-bold text-gray-800">
        {/* <h1 className="text-3xl font-bold text-gray-800"> */}
        Ooops! Page not found :(
      </h1>
    </div>
  );
}
