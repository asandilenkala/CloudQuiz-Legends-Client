import React, { useState } from 'react';
import '../pages css/Leaderboard.css';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Leaderboard [All]');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleCategories = (e) => {
    setCategory(e.target.value);
    console.log('Selected Category:', e.target.value);
  };

  const allParticipants = [
    { name: 'Asandile', category: 'Education', score: 950 },
    { name: 'Thando', category: 'Gaming', score: 900 },
    { name: 'Lerato', category: 'Career', score: 870 },
    { name: 'Kagiso', category: 'General', score: 860 },
    { name: 'Zanele', category: 'Education', score: 830 },
    { name: 'Sibusiso', category: 'Gaming', score: 820 },
    { name: 'Ntombi', category: 'Career', score: 800 },
    { name: 'Mandla', category: 'General', score: 790 },
    { name: 'Nomsa', category: 'Education', score: 780 },
    { name: 'Tumi', category: 'Gaming', score: 760 },
    { name: 'Kabelo', category: 'Career', score: 740 },
    { name: 'Ayanda', category: 'General', score: 730 },
    { name: 'Siyabonga', category: 'Education', score: 710 },
    { name: 'Naledi', category: 'Gaming', score: 700 },
    { name: 'Buhle', category: 'Career', score: 680 },
    { name: 'Lwazi', category: 'General', score: 670 },
    { name: 'Phumzile', category: 'Education', score: 650 },
    { name: 'Sipho', category: 'Gaming', score: 640 },
    { name: 'Precious', category: 'Career', score: 620 },
    { name: 'Andile', category: 'General', score: 600 }
  ];

  const getFilteredParticipants = () => {
    const filtered = category === 'Leaderboard [All]'
      ? allParticipants
      : allParticipants.filter(p => `Leaderboard [${p.category}]` === category);

    return filtered
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  };

  const topParticipants = getFilteredParticipants();

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

      <h1>Welcome to CloudQuiz Legends!</h1>

      <ul className='leaderboard-select-list'>
        <li>
          <select
            className='leaderboard-select'
            name='category-list'
            value={category}
            onChange={handleCategories}
          >
            <option>Leaderboard [All]</option>
            <option>Leaderboard [General]</option>
            <option>Leaderboard [Education]</option>
            <option>Leaderboard [Gaming]</option>
            <option>Leaderboard [Career]</option>
          </select>
        </li>
      </ul>

      <h5 className="leaderboard-heading">{category}</h5>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Category</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {topParticipants.map((participant, index) => (
            <tr key={participant.name}>
              <td>{index + 1}</td>
              <td>{participant.name}</td>
              <td>{participant.category}</td>
              <td>{participant.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
