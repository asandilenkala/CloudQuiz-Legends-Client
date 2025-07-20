.button-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.buttons {
  background-color: #4fc3c9; /* slightly softer teal */
  border: none;
  border-radius: 14px;
  font-size: 20px;
  width: 200px;
  height: 200px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(79, 195, 201, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

.buttons:hover {
  background-color: #2a9d9f;
  box-shadow: 0 8px 20px rgba(42, 157, 159, 0.6);
  transform: translateY(-4px);
}

/* Modal background */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* slightly darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeInOverlay 0.3s ease forwards;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Modal content box */
.modal-content {
  background-color: #fff;
  padding: 32px 36px;
  border-radius: 16px;
  max-width: 520px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.3s ease forwards;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Close button */
.close-button {
  margin-top: 24px;
  padding: 10px 20px;
  background-color: #4fc3c9;
  border: none;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79, 195, 201, 0.5);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease;
  display: inline-block;
}

.close-button:hover {
  background-color: #2a9d9f;
  box-shadow: 0 6px 16px rgba(42, 157, 159, 0.7);
  transform: translateY(-2px);
}

.subcat-button {
  background: transparent;
  border: none;
  text-align: left;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;
  font-size: 1.05rem;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.subcat-button:hover {
  color: #2a9d9f;
  text-decoration: underline;
}
.subscription-banner {
  background-color: #fff4cc;
  padding: 15px;
  margin-bottom: 20px;
  border-left: 5px solid #ffc107;
  border-radius: 5px;
  text-align: center;
}

.subscribe-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.subscribe-button:hover {
  background-color: #f57c00;
}
