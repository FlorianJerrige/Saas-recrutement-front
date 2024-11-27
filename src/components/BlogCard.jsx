import React from 'react';

const BlogCard = ({ title, excerpt, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-80 h-96 flex flex-col items-start h-full cursor-pointer max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{excerpt}</p>
        <button className="mt-4 text-indigo-600 font-semibold">Read more →</button>
      </div>
    </div>
  );
};

export default BlogCard;
