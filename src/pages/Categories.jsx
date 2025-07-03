import React, { useState} from 'react';
import '../pages css/Categories.css';

const Categories = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
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
               <li><button className='buttons'><strong>Education</strong></button></li>
               <li><button className='buttons'><strong>Gaming</strong></button></li>
           </ul>
           <ul className='button-links'>
               <li><button className='buttons'><strong>Career</strong></button></li>
               <li><button className='buttons'><strong>Sport</strong></button></li>
           </ul>
           
           
        </>
    )
};

export default Categories;