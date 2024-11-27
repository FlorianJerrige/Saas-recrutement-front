import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs'
import BlogPage from './Pages/Blog';
import ArticlePage from './Articles/Article1';
import Login from './Pages/Login';
import SidebarLayout from './components/SidebarLayout';
import Footer from './Pages/Footer';
import ContactPage from './Pages/ContactPage';
import LegalMentions from './Pages/LegalMentions';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tasks" element={<TodoList />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<SidebarLayout/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/mentions-legales" element={<LegalMentions/>} />

        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
