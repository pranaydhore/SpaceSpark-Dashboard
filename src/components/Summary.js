import React, { useState, useEffect } from "react";

const Summary = () => {
  const [user, setUser] = useState(null);

  // Get user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const getUserName = () => {
    if (user && user.name) {
      return user.name.split(' ')[0]; // Get first name
    } else if (user && user.email) {
      return user.email.split('@')[0]; // Get username from email
    }
    return 'User';
  };

  return (
    <>
      {/* Custom CSS */}
      <style jsx>{`
        .summary-container {
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .welcome-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-bottom: 25px;
        }

        .welcome-header {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border-radius: 20px 20px 0 0;
          padding: 25px;
          text-align: center;
        }

        .welcome-header h4 {
          margin: 0;
          font-weight: 700;
          font-size: 1.5rem;
        }

        .welcome-header p {
          margin: 5px 0 0 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-bottom: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .summary-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .card-header-custom {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px 25px;
          border-bottom: none;
        }

        .card-header-custom h5 {
          margin: 0;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .card-body-custom {
          padding: 25px;
        }

        .main-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .main-label {
          color: #666;
          font-size: 1rem;
          margin-top: 5px;
          font-weight: 500;
        }

        .profit-value {
          color: #28a745;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
        }

        .profit-percentage {
          background: #28a745;
          color: white;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-left: 10px;
          display: inline-block;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .detail-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .detail-label {
          color: #666;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .detail-value {
          font-weight: 600;
          font-size: 1rem;
          color: #333;
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          border: none;
          margin: 15px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        @media (max-width: 768px) {
          .summary-container {
            padding: 15px;
          }
          
          .main-value, .profit-value {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
          }
        }
      `}</style>

      <div className="summary-container">
        <div className="container-fluid">
          {/* Welcome Card */}
          <div className="card welcome-card">
            <div className="welcome-header">
              <h4>👋 Welcome back, {getUserName()}!</h4>
              <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {/* Equity Card */}
            <div className="card summary-card">
              <div className="card-header-custom">
                <h5>
                  <div className="icon-circle">💰</div>
                  Equity Overview
                </h5>
              </div>
              <div className="card-body-custom">
                <div className="text-center mb-4">
                  <h2 className="main-value">₹3.74k</h2>
                  <p className="main-label">Margin Available</p>
                </div>
                
                <hr className="section-divider" />
                
                <div className="detail-row">
                  <span className="detail-label">Margins Used</span>
                  <span className="detail-value">₹0</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Opening Balance</span>
                  <span className="detail-value">₹3.74k</span>
                </div>
              </div>
            </div>

            {/* Holdings Card */}
            <div className="card summary-card pulse-animation">
              <div className="card-header-custom">
                <h5>
                  <div className="icon-circle">📈</div>
                  Holdings
                  <span className="badge bg-light text-dark ms-2">13</span>
                </h5>
              </div>
              <div className="card-body-custom">
                <div className="text-center mb-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <h2 className="profit-value">₹1.55k</h2>
                    <span className="profit-percentage">+5.20%</span>
                  </div>
                  <p className="main-label">Profit & Loss</p>
                </div>
                
                <hr className="section-divider" />
                
                <div className="detail-row">
                  <span className="detail-label">Current Value</span>
                  <span className="detail-value text-success">₹31.43k</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Total Investment</span>
                  <span className="detail-value">₹29.88k</span>
                </div>
              </div>
            </div>

            {/* Additional Performance Card */}
            <div className="card summary-card">
              <div className="card-header-custom">
                <h5>
                  <div className="icon-circle">⚡</div>
                  Performance
                </h5>
              </div>
              <div className="card-body-custom">
                <div className="text-center mb-4">
                  <h2 className="main-value">5.20%</h2>
                  <p className="main-label">Overall Returns</p>
                </div>
                
                <hr className="section-divider" />
                
                <div className="detail-row">
                  <span className="detail-label">Day's P&L</span>
                  <span className="detail-value text-success">+₹245</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Total Returns</span>
                  <span className="detail-value text-success">+₹1,550</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="card summary-card">
              <div className="card-header-custom">
                <h5>
                  <div className="icon-circle">📊</div>
                  Quick Stats
                </h5>
              </div>
              <div className="card-body-custom">
                <div className="row text-center">
                  <div className="col-6 mb-3">
                    <h4 className="text-primary mb-1">13</h4>
                    <small className="text-muted">Holdings</small>
                  </div>
                  <div className="col-6 mb-3">
                    <h4 className="text-success mb-1">8</h4>
                    <small className="text-muted">In Profit</small>
                  </div>
                  <div className="col-6">
                    <h4 className="text-warning mb-1">3</h4>
                    <small className="text-muted">At Loss</small>
                  </div>
                  <div className="col-6">
                    <h4 className="text-info mb-1">2</h4>
                    <small className="text-muted">Break Even</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;