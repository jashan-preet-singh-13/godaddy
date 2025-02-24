import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Oops! Page not found</p>
        <p className="mt-2 text-gray-500">The page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
