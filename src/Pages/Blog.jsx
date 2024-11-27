import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import blogs from '../Data/blogs';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Le Blog de la Tech</h1>
        <h2 className="text-center mb-20"> Découvrez le monde de la tech en lisant les articles rédigés rien que pour vous par la Team Cognito</h2>

        <h1 className="text-3xl font-bold"> Les Langages</h1>

        <div className="flex flex-wrap gap-6 mt-4 grid lg:grid-cols-3 sm:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              image={blog.image}
              onClick={() => navigate(`/blog/${blog.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
