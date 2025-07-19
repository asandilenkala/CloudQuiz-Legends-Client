import React, { useState, useEffect } from 'react';
import '../pages css/Classroom.css'; // Make sure folder name matches exactly!
import { io } from 'socket.io-client';

const Classroom = () => {
  const [view, setView] = useState('list');
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [newClassroom, setNewClassroom] = useState({ heading: '', description: '' });
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [studentEmail, setStudentEmail] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleCreate = () => {
    if (!newClassroom.heading.trim()) return;

    const newRoom = {
      ...newClassroom,
      id: Date.now(),
      users: [],
      quizzes: [],
      chat: [],
      admin: true,
    };

    setClassrooms((prev) => [...prev, newRoom]);
    setNewClassroom({ heading: '', description: '' });
    setView('list');
  };

  const handleDelete = (id) => {
    setClassrooms((prev) => prev.filter((c) => c.id !== id));
    setSelectedClassroom(null);
    setView('list');
  };

  const handleEdit = (field, value) => {
    if (!selectedClassroom) return;
    setSelectedClassroom({ ...selectedClassroom, [field]: value });
  };

  const handleSaveEdit = () => {
    setClassrooms((prev) =>
      prev.map((c) => (c.id === selectedClassroom.id ? selectedClassroom : c))
    );
    setSelectedClassroom(null);
    setView('list');
  };

  const sendMessage = () => {
    if (chatInput.trim() === '' || !socket) return;
    socket.emit('chat message', chatInput);
    setChatInput('');
  };

  // Function to call backend API and send email notification
  const sendEmailToStudent = async (email, classroomName) => {
    try {
      const response = await fetch('http://localhost:5000/api/sendEmailToStudent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, classroomName }),
      });
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      alert('Error sending email notification: ' + error.message);
    }
  };

  const handleAddUser = async () => {
    if (!studentEmail.trim() || !selectedClassroom) return;

    if (selectedClassroom.users.includes(studentEmail.trim())) {
      alert('User already added!');
      return;
    }

    const updated = {
      ...selectedClassroom,
      users: [...(selectedClassroom.users || []), studentEmail.trim()],
    };

    setSelectedClassroom(updated);
    setStudentEmail('');

    // Also update classrooms list to keep state consistent
    setClassrooms((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );

    // Send email notification
    await sendEmailToStudent(studentEmail.trim(), updated.heading);
  };

  return (
    <div className="classroom-container">
      <div className="header">
        <button onClick={() => setView('list')}>📚 View Classrooms</button>
        <button onClick={() => setView('create')}>➕ Create Classroom</button>
      </div>

      <div className="content">
        {view === 'list' && (
          <div className="classroom-list">
            {classrooms.length === 0 && <p>No classrooms yet.</p>}
            {classrooms.map((classroom) => (
              <div
                key={classroom.id}
                className="classroom-card"
                onClick={() => {
                  setSelectedClassroom(classroom);
                  setView('details');
                  setMessages([]); // Clear messages when switching classroom
                }}
              >
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
              onChange={(e) =>
                setNewClassroom({ ...newClassroom, heading: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={newClassroom.description}
              onChange={(e) =>
                setNewClassroom({ ...newClassroom, description: e.target.value })
              }
            />
            <div className="actions">
              <button onClick={handleCreate}>Save</button>
              <button onClick={() => setView('list')}>Cancel</button>
            </div>
          </div>
        )}

        {view === 'details' && selectedClassroom && (
          <div
            className="classroom-details"
            style={{ display: 'flex', flexDirection: 'column', minHeight: '600px' }}
          >
            <input
              value={selectedClassroom.heading}
              onChange={(e) => handleEdit('heading', e.target.value)}
              placeholder="Classroom Heading"
            />
            <textarea
              value={selectedClassroom.description}
              onChange={(e) => handleEdit('description', e.target.value)}
              placeholder="Description"
            />

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

            <div className="add-user-section">
              <h4>➕ Add Student by Email</h4>
              <input
                type="email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="Enter student email"
              />
              <button onClick={handleAddUser}>Add</button>
            </div>

            <div>
              <h5>👥 Users in Class</h5>
              <ul>
                {(selectedClassroom.users || []).map((user, index) => (
                  <li key={index}>{user}</li>
                ))}
              </ul>
            </div>

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
              <div
                className="chat-box"
                style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '8px' }}
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className="chat-message">
                    {msg}
                  </div>
                ))}
              </div>
              {isAdmin && (
                <div className="chat-input" style={{ marginTop: '8px' }}>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') sendMessage();
                    }}
                    style={{ width: '80%', marginRight: '8px' }}
                  />
                  <button onClick={sendMessage}>Send</button>
                </div>
              )}
            </div>

            {/* Save/Delete buttons moved to the bottom */}
            <div
              className="actions"
              style={{
                marginTop: 'auto',
                paddingTop: '20px',
                borderTop: '1px solid #ccc',
                display: 'flex',
                gap: '10px',
              }}
            >
              <button onClick={handleSaveEdit}>💾 Save</button>
              <button onClick={() => handleDelete(selectedClassroom.id)}>🗑️ Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classroom;
