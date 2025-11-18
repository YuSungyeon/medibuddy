import React, { useState, useEffect } from "react";

const Header = ({ onToggleSidebar, sidebarOpen, selectedCountry, setSelectedCountry }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // 토큰 상태 확인
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('access_token');
      const email = localStorage.getItem('user_email');
      const name = localStorage.getItem('user_name');
      
      if (token) {
        setIsLoggedIn(true);
        setUserInfo({ email, name });
      } else {
        setIsLoggedIn(false);
        setUserInfo(null);
      }
    };

    checkAuthStatus();
    
    // localStorage 변경 감지
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // 컴포넌트 마운트 시에도 확인
    const interval = setInterval(checkAuthStatus, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_calendars');
    setIsLoggedIn(false);
    setUserInfo(null);
    console.log('Logged out successfully');
  };
  return (
    <header className="header">
      {/* 왼쪽 로고 */}
      <div className="logo-section">
        <button 
          onClick={onToggleSidebar}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginRight: "15px",
            padding: "5px"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div style={{ lineHeight: "1.2", textAlign: "center", }}>
          <h1 className="title" style={{ margin: 0, lineHeight: "1", fontSize: "28px", color: "#ffffff" }}>MediBuddy</h1>
          <p style={{ margin: 0, fontSize: "16px", color: "white", fontWeight: "400", lineHeight: "1" }}>Dr.Kim is Here</p>
        </div>
      </div>
      
      {/* 오른쪽 네비게이션 */}
      <div className="nav-section" style={{ paddingRight: "30px" }}>
        {/* Select Country 드랍박스 */}
        <select 
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{
            fontSize: "16px",
            marginRight: "25px",
            color: "white",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "8px",
            padding: "8px 35px 8px 12px",
            cursor: "pointer",
            outline: "none",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
            backgroundSize: "16px"
          }}
        >
          <option value="" style={{ color: "#333", background: "white" }}>Select Country</option>
          <option value="Mongolia" style={{ color: "#333", background: "white" }}>Mongolia</option>
          <option value="America" style={{ color: "#333", background: "white" }}>America</option>
          <option value="Vietnam" style={{ color: "#333", background: "white" }}>Vietnam</option>
          <option value="Russia" style={{ color: "#333", background: "white" }}>Russia</option>
          <option value="Japan" style={{ color: "#333", background: "white" }}>Japan</option>
          <option value="China" style={{ color: "#333", background: "white" }}>China</option>
          <option value="Middle East" style={{ color: "#333", background: "white" }}>Middle East</option>
          <option value="Korea" style={{ color: "#333", background: "white" }}>Korea</option>
          <option value="Other" style={{ color: "#333", background: "white" }}>Other</option>
        </select>
        
        {isLoggedIn ? (
          // 로그인된 상태: 로그아웃 버튼과 사용자 정보
          <>
            <div style={{ 
              fontSize: "14px", 
              marginRight: "20px", 
              color: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end"
            }}>
              <div style={{ fontWeight: "500" }}>{userInfo?.name || 'User'}</div>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}>
                {userInfo?.email || ''}
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="nav-link" 
              style={{ 
                fontSize: "17px", 
                marginRight: "25px", 
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              LOGOUT
            </button>
            <a href="#" className="nav-link" style={{ fontSize: "17px", color: "white" }}>MY PAGE</a>
          </>
        ) : (
          // 로그인되지 않은 상태: 로그인 버튼
          <button 
            onClick={() => setShowLoginModal(true)}
            className="nav-link" 
            style={{ 
              fontSize: "17px", 
              marginRight: "35px", 
              color: "white",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            LOGIN
          </button>
        )}
        <button className="search-btn">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Google Login Modal */}
      {showLoginModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(0.5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowLoginModal(false)}
        >
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              padding: '40px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLoginModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            
            <h2 style={{
              color: '#ffffff',
              fontSize: '1.5em',
              fontWeight: '700',
              marginBottom: '30px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Login to MediBuddy
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1em',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Sign in with your Google account to access personalized medical information
            </p>
            
            <button
              onClick={() => {
                // Google Login API 호출
                window.location.href = 'https://chibbohae-fastapi.store/login/oauth2/code/login/google';
              }}
              style={{
                background: '#4285f4',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '15px 30px',
                fontSize: '1.1em',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#3367d6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#4285f4';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
