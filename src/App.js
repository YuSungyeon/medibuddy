import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Insurance from "./components/Insurance";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  // 현재 활성 탭 상태 (Chat이 기본)
  const [activeTab, setActiveTab] = useState("Chat");
  // 사이드바 열림/닫힘 상태
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // 선택된 국가 상태
  const [selectedCountry, setSelectedCountry] = useState("");
  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // URL 파라미터에서 토큰 및 캘린더 정보 추출 및 저장
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    const email = urlParams.get('email');
    const name = urlParams.get('name');
    const calendars = urlParams.get('calendars');

    // 토큰이 있으면 localStorage에 저장
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      console.log('Access token saved to localStorage');
    }

    // 이메일이 있으면 localStorage에 저장
    if (email) {
      localStorage.setItem('user_email', decodeURIComponent(email));
      console.log('User email saved to localStorage');
    }

    // 이름이 있으면 localStorage에 저장
    if (name) {
      localStorage.setItem('user_name', decodeURIComponent(name));
      console.log('User name saved to localStorage');
    }

    // 캘린더 정보가 있으면 localStorage에 저장
    if (calendars) {
      try {
        const decodedCalendars = decodeURIComponent(calendars);
        localStorage.setItem('user_calendars', decodedCalendars);
        console.log('User calendars saved to localStorage:', decodedCalendars);
      } catch (error) {
        console.error('Error decoding calendars data:', error);
      }
    }

    // 토큰 관련 파라미터가 있으면 URL에서 제거
    if (accessToken || email || name || calendars) {
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      console.log('URL parameters removed from address bar');
    }
  }, []);

  // 로그인 상태 확인
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('access_token');
      setIsLoggedIn(!!token);
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

  return (
    <div className="app">
      <Header 
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        sidebarOpen={sidebarOpen}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <div className="main-layout">
        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === "Chat" ? "active" : ""}`}
              onClick={() => setActiveTab("Chat")}
            >
              Chat
            </button>
            <button 
              className={`sidebar-link ${activeTab === "Insurance" ? "active" : ""}`}
              onClick={() => setActiveTab("Insurance")}
            >
              Insurance
            </button>
            <button 
              className={`sidebar-link ${activeTab === "Calendar" ? "active" : ""} ${!isLoggedIn ? "disabled" : ""}`}
              onClick={() => {
                if (isLoggedIn) {
                  setActiveTab("Calendar");
                } else {
                  alert("로그인이 필요합니다. 먼저 로그인해주세요.");
                }
              }}
              disabled={!isLoggedIn}
              style={{
                opacity: !isLoggedIn ? 0.5 : 1,
                cursor: !isLoggedIn ? "not-allowed" : "pointer"
              }}
            >
              Calendar {!isLoggedIn }
            </button>
          </nav>
        </div>
        <div className={`main-content-area ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {activeTab === "Chat" && <Chat selectedCountry={selectedCountry} />}
          {activeTab === "Insurance" && <Insurance />}
          {activeTab === "Calendar" && <Calendar />}
        </div>
      </div>
    </div>
  );
}

export default App;
