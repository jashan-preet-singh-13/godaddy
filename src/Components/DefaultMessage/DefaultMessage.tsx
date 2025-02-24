import React from 'react';

interface DefaultMessageProps {
  message?: string;
}

const DefaultMessage: React.FC<DefaultMessageProps> = ({ message = 'No data available' }) => {
  return (
    <div className="flex flex-col items-center justify-center  p-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">{message}</h2>
    </div>
  );
};

export default DefaultMessage;
