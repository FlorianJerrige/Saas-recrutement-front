import React from 'react';

const BlogSearch = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for jobs..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default BlogSearch;
