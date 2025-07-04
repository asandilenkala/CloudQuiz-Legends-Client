import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages css/Categories.css';

const Categories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showEducation, setShowEducation] = useState(false);
    const navigate = useNavigate();

    // Function to handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
  };

  // Navigation handler
  //const goToQuiz = (subCategory) => {
  // navigate(`/quiz/${subCategory}`);
  //};

  const goToQuiz = (e) => {
    navigate(`/quiz`);
  };

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

           <h1>Quiz Categories</h1>
           <br/>
           <ul className='button-links'>
                <li>
                <button className="buttons" onClick={() => setShowEducation(true)}>
                    <strong>📚 Education</strong>
                </button>

                {showEducation && (
                    <div className="modal-overlay" onClick={() => setShowEducation(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>📚 Education Subcategories</h3>
                        <ul>
                            <li>
                                <button onClick={() => goToQuiz('Mathematics')} className="subcat-button">
                                <strong>Mathematics</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Physics')} className="subcat-button">
                                <strong>Physics</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Chemistry')} className="subcat-button">
                                <strong>Chemistry</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Biology')} className="subcat-button">
                                <strong>Biology</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('History')} className="subcat-button">
                                <strong>History</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Geography')} className="subcat-button">
                                <strong>Geography</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Language & Grammar')} className="subcat-button">
                                <strong>Language & Grammar</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Technology')} className="subcat-button">
                                <strong>Technology</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Literature')} className="subcat-button">
                                <strong>Literature</strong>
                                </button>
                            </li>
                            </ul>
                            <button className="close-button" onClick={() => setShowEducation(false)}>Close</button>
                    </div>
                    </div>
                            )}
                </li>


               <li>
                <button className="buttons" onClick={() => setShowEducation(true)}>
                    <strong>💼 Career</strong>
                </button>

                {showEducation && (
                    <div className="modal-overlay" onClick={() => setShowEducation(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>💼 Career Subcategories</h3>
                        <ul>
                            <li>
                                <button onClick={() => goToQuiz('Coding & Programming')} className="subcat-button">
                                <strong>Coding & Programming</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Digital Marketing')} className="subcat-button">
                                <strong>Digital Marketing</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Business & Finance')} className="subcat-button">
                                <strong>Business & Finance</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Communication Skills')} className="subcat-button">
                                <strong>Communication Skills</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Job Interview Prep')} className="subcat-button">
                                <strong>Job Interview Prep</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Project Management')} className="subcat-button">
                                <strong>Project Management</strong>
                                </button>
                            </li>
                            </ul>
                            <button className="close-button" onClick={() => setShowEducation(false)}>Close</button>
                    </div>
                    </div>
                            )}
                </li>
           </ul>
           <ul className='button-links'>
               <li>
                <button className="buttons" onClick={() => setShowEducation(true)}>
                    <strong>🎮 Gaming</strong>
                </button>

                {showEducation && (
                    <div className="modal-overlay" onClick={() => setShowEducation(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>🎮 Gaming Subcategories</h3>
                        <ul>
                            <li>
                                <button onClick={() => goToQuiz('Console Gaming')} className="subcat-button">
                                <strong>Console Gaming</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('PC Gaming')} className="subcat-button">
                                <strong>PC Gaming</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Game History')} className="subcat-button">
                                <strong>Game History</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Popular Franchises')} className="subcat-button">
                                <strong>Popular Franchises</strong>
                                </button>
                            </li>
                            </ul>
                            <button className="close-button" onClick={() => setShowEducation(false)}>Close</button>
                    </div>
                    </div>
                            )}
                </li>

               <li>
                <button className="buttons" onClick={() => setShowEducation(true)}>
                    <strong>⚽ Sport</strong>
                </button>

                {showEducation && (
                    <div className="modal-overlay" onClick={() => setShowEducation(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>⚽ Sport Subcategories</h3>
                        <ul>
                            <li>
                                <button onClick={() => goToQuiz('Soccer / Football')} className="subcat-button">
                                <strong>Soccer / Football</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Rugby')} className="subcat-button">
                                <strong>Rugby</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Martial Arts')} className="subcat-button">
                                <strong>Martial Arts</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Basketball')} className="subcat-button">
                                <strong>Basketball</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Athletics')} className="subcat-button">
                                <strong>Athletics</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Cricket')} className="subcat-button">
                                <strong>Cricket</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Tennis')} className="subcat-button">
                                <strong>Tennis</strong>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => goToQuiz('Golf')} className="subcat-button">
                                <strong>Golf</strong>
                                </button>
                            </li>
                            </ul>
                            <button className="close-button" onClick={() => setShowEducation(false)}>Close</button>
                    </div>
                    </div>
                            )}
                </li>
           </ul>
           
           
        </>
    )
};

export default Categories;