"use client";
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CardProps } from '@/app/page';

const ListCard: React.FC<CardProps> = ({ name }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {    
    if (name) {
      router.push(`/repo/${name}`);
    }
  }, [name, router]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDown}
      className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl w-full hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="p-4 flex items-center justify-center">
       
        <h3 
          className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-all duration-300"
          style={{
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
          }}
          title={name}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ListCard;
