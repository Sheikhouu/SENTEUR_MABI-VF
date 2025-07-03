import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import MediaManager from './pages/MediaManager';
import IncenseProducts from './pages/IncenseProducts';
import WomenCollection from './pages/WomenCollection';
import LuxeHomme from './pages/LuxeHomme';
import AmbientFragrances from './pages/AmbientFragrances';
import Blog from './pages/Blog';
import Article from './pages/Article';
import BlogArticle from './pages/BlogArticle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/media" element={<MediaManager />} />
          <Route path="/categories/incense" element={<IncenseProducts />} />
          <Route path="/categories/women" element={<WomenCollection />} />
          <Route path="/categories/men" element={<LuxeHomme />} />
          <Route path="/categories/ambient" element={<AmbientFragrances />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/blog/huiles-parfumees" element={<BlogArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;