import Loader from '@/Components/Loader/loader';
import React from 'react';

interface LoaderProps {
  size?: string;
  color?: string;
}

const Loading: React.FC<LoaderProps> = () => {
  return (
    <Loader />
  );
};

export default Loading;
