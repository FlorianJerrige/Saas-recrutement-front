import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../Data/blogs';

const ArticlePage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-gray-600">Article not found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="my-8 w-full max-h-96 object-cover rounded-lg" />
        <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
