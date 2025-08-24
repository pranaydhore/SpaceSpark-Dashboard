import React from 'react';

const Funds = () => {
  const styles = {
    pageWrapper: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '20px 0',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    mainContainer: {
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    fundsHeader: {
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      color: 'white',
      padding: '40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '10px',
      position: 'relative',
      zIndex: 2
    },
    headerSubtitle: {
      fontSize: '1.1rem',
      opacity: 0.9,
      marginBottom: '30px',
      position: 'relative',
      zIndex: 2
    },
    btnCustom: {
      padding: '12px 30px',
      borderRadius: '50px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      border: 'none',
      margin: '0 10px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      position: 'relative',
      zIndex: 2,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    btnGreen: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white'
    },
    btnBlue: {
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      color: 'white'
    },
    contentSection: {
      padding: '40px'
    },
    equityCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      height: '100%'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#2563eb',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    highlightSection: {
      background: '#ecfdf5',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      borderLeft: '4px solid #10b981'
    },
    balanceSummary: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '15px',
      marginBottom: '0'
    },
    balanceItem: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      border: '1px solid #e2e8f0',
      transition: 'transform 0.3s ease'
    },
    balanceAmount: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '5px'
    },
    balanceLabel: {
      color: '#64748b',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    dataRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #f1f5f9'
    },
    dataLabel: {
      color: '#64748b',
      fontWeight: '500',
      fontSize: '0.95rem'
    },
    dataValue: {
      fontWeight: '700',
      fontSize: '1rem',
      color: '#1e293b'
    },
    sectionDivider: {
      margin: '25px 0',
      border: 'none',
      borderTop: '2px solid #e2e8f0'
    },
    commodityCard: {
      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      borderRadius: '15px',
      padding: '40px',
      textAlign: 'center',
      color: 'white',
      boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    commodityIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      opacity: 0.8
    },
    commodityTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '20px'
    },
    // Mobile styles
    '@media (max-width: 768px)': {
      fundsHeader: {
        padding: '30px 20px'
      },
      headerTitle: {
        fontSize: '2rem'
      },
      contentSection: {
        padding: '20px'
      },
      btnCustom: {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '0.9rem'
      },
      balanceSummary: {
        gridTemplateColumns: '1fr',
        gap: '10px'
      },
      balanceAmount: {
        fontSize: '1.3rem'
      },
      equityCard: {
        padding: '20px'
      },
      commodityCard: {
        padding: '30px 20px'
      }
    }
  };

  const handleHover = (e, isHover) => {
    if (isHover) {
      e.target.style.transform = 'translateY(-2px)';
      if (e.target.classList.contains('btn-green-hover')) {
        e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
      } else if (e.target.classList.contains('btn-blue-hover')) {
        e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
      }
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
  };

  const balanceItemHover = (e, isHover) => {
    if (isHover) {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  // Mobile detection
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile-specific styles
  const getMobileStyles = () => {
    if (!isMobile) return {};
    
    return {
      fundsHeader: {
        ...styles.fundsHeader,
        padding: '30px 20px'
      },
      headerTitle: {
        ...styles.headerTitle,
        fontSize: '2rem'
      },
      contentSection: {
        ...styles.contentSection,
        padding: '20px'
      },
      btnCustom: {
        ...styles.btnCustom,
        margin: '5px',
        padding: '10px 20px',
        fontSize: '0.9rem',
        display: 'block',
        width: '100%',
        maxWidth: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px'
      },
      balanceSummary: {
        ...styles.balanceSummary,
        gridTemplateColumns: '1fr',
        gap: '10px'
      },
      balanceAmount: {
        ...styles.balanceAmount,
        fontSize: '1.3rem'
      },
      equityCard: {
        ...styles.equityCard,
        padding: '20px'
      },
      commodityCard: {
        ...styles.commodityCard,
        padding: '30px 20px',
        marginTop: '20px'
      },
      dataRow: {
        ...styles.dataRow,
        padding: '15px 0',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px'
      },
      dataLabel: {
        ...styles.dataLabel,
        fontSize: '0.9rem'
      },
      dataValue: {
        ...styles.dataValue,
        fontSize: '1.1rem',
        fontWeight: '800'
      }
    };
  };

  const mobileStyles = getMobileStyles();

  return (
    <div style={styles.pageWrapper}>
      <div className="container-fluid">
        <div style={styles.mainContainer}>
          {/* Header Section */}
          <div style={mobileStyles.fundsHeader || styles.fundsHeader}>
            <h1 style={mobileStyles.headerTitle || styles.headerTitle}>
              <i className="fas fa-wallet"></i> Funds Dashboard
            </h1>
            <p style={styles.headerSubtitle}>
              Instant, zero-cost fund transfers with UPI
            </p>
            <div className={`action-buttons ${isMobile ? 'd-flex flex-column align-items-center' : ''}`}>
              <button 
                className="btn-green-hover"
                style={{...(mobileStyles.btnCustom || styles.btnCustom), ...styles.btnGreen}}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <i className="fas fa-plus"></i> Add Funds
              </button>
              <button 
                className="btn-blue-hover"
                style={{...(mobileStyles.btnCustom || styles.btnCustom), ...styles.btnBlue}}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <i className="fas fa-arrow-down"></i> Withdraw
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div style={mobileStyles.contentSection || styles.contentSection}>
            <div className="row">
              {/* Equity Section */}
              <div className="col-lg-8 col-md-12 mb-4">
                <div style={mobileStyles.equityCard || styles.equityCard}>
                  <h2 style={styles.cardTitle}>
                    <i className="fas fa-chart-line"></i>
                    Equity Account
                  </h2>
                  
                  {/* Highlight Section */}
                  <div style={styles.highlightSection}>
                    <div style={mobileStyles.balanceSummary || styles.balanceSummary}>
                      <div 
                        style={styles.balanceItem}
                        onMouseEnter={(e) => balanceItemHover(e, true)}
                        onMouseLeave={(e) => balanceItemHover(e, false)}
                      >
                        <div style={{...(mobileStyles.balanceAmount || styles.balanceAmount), color: '#10b981'}}>₹4,043.10</div>
                        <div style={styles.balanceLabel}>Available Margin</div>
                      </div>
                      <div 
                        style={styles.balanceItem}
                        onMouseEnter={(e) => balanceItemHover(e, true)}
                        onMouseLeave={(e) => balanceItemHover(e, false)}
                      >
                        <div style={{...(mobileStyles.balanceAmount || styles.balanceAmount), color: '#dc2626'}}>₹3,757.30</div>
                        <div style={styles.balanceLabel}>Used Margin</div>
                      </div>
                      <div 
                        style={styles.balanceItem}
                        onMouseEnter={(e) => balanceItemHover(e, true)}
                        onMouseLeave={(e) => balanceItemHover(e, false)}
                      >
                        <div style={{...(mobileStyles.balanceAmount || styles.balanceAmount), color: '#2563eb'}}>₹4,043.10</div>
                        <div style={styles.balanceLabel}>Available Cash</div>
                      </div>
                    </div>
                  </div>

                  <hr style={styles.sectionDivider} />

                  {/* Account Details */}
                  <div className="account-details">
                    {[
                      { label: 'Opening Balance', value: '4,043.10' },
                      { label: 'Opening Balance', value: '3736.40' },
                      { label: 'Payin', value: '4064.00' },
                      { label: 'SPAN', value: '0.00' },
                      { label: 'Delivery margin', value: '0.00' },
                      { label: 'Exposure', value: '0.00' },
                      { label: 'Options premium', value: '0.00' }
                    ].map((item, index) => (
                      <div key={index} style={mobileStyles.dataRow || styles.dataRow}>
                        <span style={mobileStyles.dataLabel || styles.dataLabel}>{item.label}</span>
                        <span style={mobileStyles.dataValue || styles.dataValue}>₹{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <hr style={styles.sectionDivider} />

                  {/* Collateral Section */}
                  <div className="collateral-section">
                    {[
                      { label: 'Collateral (Liquid funds)', value: '0.00' },
                      { label: 'Collateral (Equity)', value: '0.00' },
                      { label: 'Total Collateral', value: '0.00' }
                    ].map((item, index) => (
                      <div key={index} style={mobileStyles.dataRow || styles.dataRow}>
                        <span style={mobileStyles.dataLabel || styles.dataLabel}>{item.label}</span>
                        <span style={mobileStyles.dataValue || styles.dataValue}>₹{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commodity Section */}
              <div className="col-lg-4 col-md-12 mb-4">
                <div style={mobileStyles.commodityCard || styles.commodityCard}>
                  <i className="fas fa-seedling" style={styles.commodityIcon}></i>
                  <h3 style={styles.commodityTitle}>Commodity Trading</h3>
                  <p style={{opacity: 0.9, marginBottom: '25px'}}>
                    You don't have a commodity account yet. Start trading in commodities today!
                  </p>
                  {/* <button 
                    className="btn-blue-hover"
                    style={{...(mobileStyles.btnCustom || styles.btnCustom), ...styles.btnBlue}}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                  >
                    <i className="fas fa-rocket"></i> Open Account
                  </button> */}
                  
                  <button
                    className="p-2 btn btn-primary fs-5 mb-3"
                    style={{ 
                      margin: "10px auto 0 auto", 
                      width: isMobile ? "100%" : "80%", 
                      display: "block",
                      backgroundColor: "white",
                      color: "#f59e0b",
                      border: "2px solid white",
                      fontWeight: "600",
                      borderRadius: "50px"
                    }}
                    onClick={() =>
                      (window.location.href =
                        "https://space-spark-frontend.vercel.app/signup")
                    }
                  >
                    Signup Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;