import React, { useState, useEffect } from 'react';
import '../pages css/Classroom.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Classroom = () => {
  const [view, setView] = useState('list');
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [newClassroom, setNewClassroom] = useState({ heading: '', description: '' });
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true); // Simplified role toggle

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off('chat message');
  }, []);

  const handleCreate = () => {
    if (!newClassroom.heading) return;
    const newRoom = { ...newClassroom, id: Date.now(), users: [], quizzes: [], chat: [], admin: true };
    setClassrooms([...classrooms, newRoom]);
    setNewClassroom({ heading: '', description: '' });
    setView('list');
  };

  const handleDelete = (id) => {
    setClassrooms(classrooms.filter(c => c.id !== id));
    setSelectedClassroom(null);
    setView('list');
  };

  const handleEdit = (field, value) => {
    setSelectedClassroom({ ...selectedClassroom, [field]: value });
  };

  const handleSaveEdit = () => {
    setClassrooms(
      classrooms.map(c => (c.id === selectedClassroom.id ? selectedClassroom : c))
    );
    setSelectedClassroom(null);
    setView('list');
  };

  const sendMessage = () => {
    if (chatInput.trim() !== '') {
      socket.emit('chat message', chatInput);
      setChatInput('');
    }
  };

  return (
    <div className="classroom-container">
      <div className="header">
        <button onClick={() => setView('list')}>Class Room</button>
        <button onClick={() => setView('create')}>Create Class Room</button>
      </div>

      {view === 'list' && (
        <div className="classroom-list">
          {classrooms.map(classroom => (
            <div key={classroom.id} className="classroom-card" onClick={() => {
              setSelectedClassroom(classroom);
              setView('details');
            }}>
              <h3>{classroom.heading}</h3>
              <p>{classroom.description}</p>
            </div>
          ))}
        </div>
      )}

      {view === 'create' && (
        <div className="create-classroom">
          <input
            type="text"
            placeholder="Classroom Heading"
            value={newClassroom.heading}
            onChange={(e) => setNewClassroom({ ...newClassroom, heading: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newClassroom.description}
            onChange={(e) => setNewClassroom({ ...newClassroom, description: e.target.value })}
          ></textarea>
          <button onClick={handleCreate}>Save</button>
          <button onClick={() => setView('list')}>Cancel</button>
        </div>
      )}

      {view === 'details' && selectedClassroom && (
        <div className="classroom-details">
          <input
            value={selectedClassroom.heading}
            onChange={(e) => handleEdit('heading', e.target.value)}
          />
          <textarea
            value={selectedClassroom.description}
            onChange={(e) => handleEdit('description', e.target.value)}
          ></textarea>
          <div className="actions">
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => handleDelete(selectedClassroom.id)}>Delete</button>
          </div>

          {isAdmin && (
            <div className="admin-section">
              <h4>Admin Controls</h4>
              <ul>
                <li>👥 Invite Users (Modal Integration Coming)</li>
                <li>📌 Assign Quiz Types (Dropdown to choose quiz category)</li>
                <li>📊 View Student Scores (Table of users with score fields)</li>
                <li>🔒 Manage Chat Permissions (Toggle user permissions)</li>
              </ul>
            </div>
          )}

          <div className="extra-features">
            <h4>Extra Features</h4>
            <ul>
              <li>📅 Calendar for Upcoming Quizzes (FullCalendar integration planned)</li>
              <li>🔔 Notifications for New Quizzes/Messages (Toast system or alert badges)</li>
              <li>🏆 Leaderboard with Top Students (Sorted by score)</li>
              <li>🎖️ Badges & Achievements System (Visual rewards for milestones)</li>
            </ul>
          </div>

          <div className="chat-section">
            <h4>Classroom Chat</h4>
            <div className="chat-box">
              {messages.map((msg, idx) => (
                <div key={idx} className="chat-message">{msg}</div>
              ))}
            </div>
            {isAdmin && (
              <div className="chat-input">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Classroom;
