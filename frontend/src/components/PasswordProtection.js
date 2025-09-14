import React, { useState } from 'react';

const PasswordProtection = ({ children, onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple password check - you can change this password
    const correctPassword = 'utahwatergardens2024';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
      if (onAuthenticated) {
        onAuthenticated();
      }
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="password-protection">
      <div className="password-container">
        <div className="password-header">
          <h2>🔒 Protected Access</h2>
          <p>This page requires a password to access.</p>
        </div>

        <form className="password-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoFocus
            />
          </div>

          <button type="submit" className="submit-button">
            Access XMind Integration
          </button>
        </form>

        <div className="password-footer">
          <p>Authorized personnel only.</p>
        </div>
      </div>

      <style jsx>{`
        .password-protection {
          min-height: 100vh;
          background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .password-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .password-header h2 {
          color: #2c5530;
          margin: 0 0 10px 0;
          font-size: 1.8rem;
        }

        .password-header p {
          color: #666;
          margin: 0 0 30px 0;
          font-size: 1rem;
        }

        .password-form {
          margin-bottom: 20px;
        }

        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #2c5530;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e1e5e9;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #2c5530;
        }

        .submit-button {
          width: 100%;
          background: #2c5530;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-button:hover {
          background: #1e3a21;
        }

        .password-footer {
          border-top: 1px solid #e1e5e9;
          padding-top: 20px;
        }

        .password-footer p {
          color: #666;
          font-size: 0.8rem;
          margin: 0;
        }

        @media (max-width: 480px) {
          .password-protection {
            padding: 10px;
          }

          .password-container {
            padding: 30px 20px;
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default PasswordProtection;
