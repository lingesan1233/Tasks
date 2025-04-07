import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        className="border p-2 rounded w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};