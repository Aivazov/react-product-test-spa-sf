import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ProductsSkeleton(props) {
  return (
    <tr className="flex items-center justify-between h-10 px-3 overflow-hidden mb-2">
      <ContentLoader
        speed={2}
        width={928}
        height={40}
        viewBox="0 0 928 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        // className="flex items-center justify-between h-10 bg-[#f3f3f3] rounded-2xl px-3 mb-2"
        // className="flex items-center justify-between h-10 bg-[#f3f3f3] rounded-2xl px-3 overflow-hidden mb-2"
        {...props}
      >
        <rect x="0" y="0" rx="16" ry="16" width="928" height="40" />
      </ContentLoader>
    </tr>
  );
}
