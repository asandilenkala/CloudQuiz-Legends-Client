import React from 'react';
import { Link} from 'react-router-dom';
import '../pages css/Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul className='sidebar-links'>
                <li><Link to='/leaderboard'>Real-Time Leaderboards</Link></li>
                <li><Link to='/perfomance'>Perfomance Analytics</Link></li>
                <li><Link to='/integration'>Educational Integration</Link></li>
            </ul>
        </div>
    )
} 

export default Sidebar;