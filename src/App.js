import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Leaderboard from './pages/Leaderboard';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import WelcomePage from './pages/WelcomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignInForm from './pages/SignInForm';
import Profile from './pages/Profile';
import Classroom from './pages/Classroom';
import SubscriptionForm from './pages/SubscriptionForm';

// Inside <Routes> in App component:
<Route path="/subscribe" element={<SubscriptionForm />} />


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/continue-with-email" element={<SignInForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/subscription" element={<SubscriptionForm />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
