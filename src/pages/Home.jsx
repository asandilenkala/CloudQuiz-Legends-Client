import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages css/Home.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Function to handle search input
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const goToCategories = () => {
      navigate('/categories');
    }

    const goToQuiz = () => {
      navigate('/quiz');
    }
    
    return (
        <>
           <div className="filter-container">
              <input
                type="text"
                placeholder="Search bar"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
              />
            </div>

           <h1>Welcome to CloudQuiz!</h1>
           <p>🧠Learn. ⚔️Compete. 🏆Master.</p>
           <br/>
           <ul className='button-link'>
               <li><button className='button' onClick={goToQuiz}><strong>Start Quiz</strong></button></li>
               <li><button className='button' onClick={goToCategories}><strong>Browse Categories</strong></button></li>
           </ul>
           
           
        </>
    )
};

export default Home;