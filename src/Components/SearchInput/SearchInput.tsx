"use client";
import React, { ChangeEvent, useState } from 'react';

interface Repo {
  name: string;
  url: string;
}

interface SearchInputProps {
  placeholder?: string;
  setData: (e: Repo[]) => void;
  data: Repo[];
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', setData, data }) => {
  const [text, setText] = useState("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setText(newQuery);
    const filteredData = data.filter(
      (repo) =>
        repo.name.toLowerCase().includes(newQuery.toLowerCase())
    );

    if (setData) {
      setData(filteredData);
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full py-2 px-4 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchInput;
