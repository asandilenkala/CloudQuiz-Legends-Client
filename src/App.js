import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Leaderboard from './pages/Leaderboard';
import Quiz from './pages/Quiz';
import Score from './pages/Score';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    
    <div className="main-content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        </Routes>
    </div>  
    
    
    <Footer/>

    </BrowserRouter>
  );
}

export default App; 