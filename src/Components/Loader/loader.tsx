import React from 'react';

interface LoaderProps {
  size?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'w-12 h-12', color = 'text-blue-500' }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        className={`animate-spin ${size} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm2 0H2a10 10 0 0110-10v2a8 8 0 00-8 8z"
        />
      </svg>
    </div>
  );
};

export default Loader;
