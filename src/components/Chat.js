import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VisitorChart from "./VisitorChart";
import HospitalList from "./HospitalList";
import { searchHospitals } from "../api/hospitalApi";
import { addCalendarEvent } from "../api/calendarApi";

gsap.registerPlugin(ScrollTrigger);

const Chat = ({ selectedCountry }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [hospitalResults, setHospitalResults] = useState([]);
  const [showHospitalList, setShowHospitalList] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // GSAP 애니메이션을 위한 refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRef = useRef(null);
  const containerRef = useRef(null);
  const chartTitleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutHeadlineRef = useRef(null);
  const aboutTextRef = useRef(null);
  const hospitalListRef = useRef(null);

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

  // 현재 날짜와 시간을 ISO 형식으로 반환하는 함수
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // 시작 시간 (현재 시간)
    const startTime = `${year}-${month}-${day}T${hours}:${minutes}:00+09:00`;
    
    // 종료 시간 (1시간 30분 후)
    const endTime = new Date(now.getTime() + 90 * 60 * 1000); // 90분 추가
    const endHours = String(endTime.getHours()).padStart(2, '0');
    const endMinutes = String(endTime.getMinutes()).padStart(2, '0');
    const endTimeStr = `${year}-${month}-${day}T${endHours}:${endMinutes}:00+09:00`;
    
    return { startTime, endTime: endTimeStr };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading && !isSliding) {
      setIsLoading(true);
      setIsSliding(true);
      
      try {
        // 로그인된 상태라면 캘린더 이벤트 추가
        if (isLoggedIn) {
          const accessToken = localStorage.getItem('access_token');
          const { startTime, endTime } = getCurrentDateTime();
          
          // 토큰 로그 출력
          console.log('=== 토큰 정보 ===');
          console.log('access_token:', accessToken);
          console.log('토큰 길이:', accessToken ? accessToken.length : 'null');
          console.log('토큰 타입:', typeof accessToken);
          console.log('start_time:', startTime);
          console.log('end_time:', endTime);
          console.log('summary:', message);
          console.log('================');
          
          try {
            await addCalendarEvent(accessToken, message, startTime, endTime);
            console.log('캘린더 이벤트 추가 완료:', message);
          } catch (calendarError) {
            console.error('캘린더 이벤트 추가 오류:', calendarError);
            // 캘린더 오류는 무시하고 병원 검색은 계속 진행
          }
        }

        // API 호출
        const results = await searchHospitals(message, selectedCountry);
        setHospitalResults(results);
        console.log("병원 검색 결과:", results);
        
        // 병원 목록 표시
        if (results && (results.hospitals ? results.hospitals.length > 0 : results.length > 0)) {
          setShowHospitalList(true);
          
          // 병원 목록 섹션으로 스크롤
          setTimeout(() => {
            if (hospitalListRef.current) {
              hospitalListRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 500); // 병원 목록이 렌더링된 후 스크롤
        }
        
        // 슬라이드 애니메이션 후 초기화
        setTimeout(() => {
          setIsLoading(false);
          setIsSliding(false);
          setMessage("");
        }, 1000);
      } catch (error) {
        console.error('병원 검색 오류:', error);
        alert('병원 검색 중 오류가 발생했습니다.');
        setIsLoading(false);
        setIsSliding(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // GSAP 애니메이션 초기화
  useEffect(() => {
    const tl = gsap.timeline();
    
    // 초기 상태 설정
    gsap.set([subtitleRef.current], {
      opacity: 0,
      y: 50
    });

    // MediBuddy 한글자씩 애니메이션
    const titleText = "MediBuddy";
    const titleElement = titleRef.current;
    
    // 각 글자를 span으로 감싸기
    titleElement.innerHTML = titleText.split('').map((char, index) => 
      `<span style="display: inline-block; opacity: 0; transform: translateY(50px);">${char}</span>`
    ).join('');

    const spans = titleElement.querySelectorAll('span');
    
    // 각 글자 애니메이션
    spans.forEach((span, index) => {
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: index * 0.1
      });
    });

    // 서브타이틀 애니메이션 (제목 완료 후 0.5초 지연)
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "+=0.5");

    // 차트 제목 한글자씩 애니메이션
    if (chartTitleRef.current) {
      const chartTitleText = "외국인 방문객 수 추이";
      const chartTitleElement = chartTitleRef.current;
      
      // 각 글자를 span으로 감싸기 (공백 포함)
      chartTitleElement.innerHTML = chartTitleText.split('').map((char, index) => 
        char === ' ' 
          ? `<span style="display: inline-block; opacity: 0; width: 0.3em;">&nbsp;</span>`
          : `<span style="display: inline-block; opacity: 0;">${char}</span>`
      ).join('');

      const chartSpans = chartTitleElement.querySelectorAll('span');
      
      // 각 글자 애니메이션
      chartSpans.forEach((span, index) => {
        gsap.to(span, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: chartTitleElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }

    // 카드 애니메이션 - setTimeout으로 DOM 렌더링 후 실행
    setTimeout(() => {
      if (card1Ref.current && card2Ref.current && card3Ref.current) {
        // 초기 상태 설정
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
          opacity: 0,
          y: 100,
          scale: 0.8
        });

        // 카드들을 순차적으로 애니메이션
        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            markers: false // 디버깅용 마커 (필요시 true로 변경)
          }
        });

        cardTimeline
          .to(card1Ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          })
          .to(card2Ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.4")
          .to(card3Ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.4");
      }
    }, 100);

    // About 섹션 애니메이션
    setTimeout(() => {
      if (aboutTitleRef.current && aboutHeadlineRef.current && aboutTextRef.current) {
        // 초기 상태 설정
        gsap.set([aboutTitleRef.current, aboutHeadlineRef.current, aboutTextRef.current], {
          opacity: 0,
          y: 50
        });

        // About 요소들을 순차적으로 애니메이션
        const aboutTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: aboutTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        aboutTimeline
          .to(aboutTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          })
          .to(aboutHeadlineRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          }, "-=0.3")
          .to(aboutTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.5");
      }
    }, 200);

  }, []);

  return (
    <div style={{ 
      background: "transparent", 
      height: "100%", 
      display: "flex", 
      flexDirection: "column",
      position: "relative",
    }}>
      <div ref={containerRef} style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        padding: "40px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        {/* 메인 타이틀 */}
        <h1 ref={titleRef} style={{
          fontSize: "80px",
          fontWeight: "1000",
          fontFamily: "Roboto, sans-serif",
          color: "#f8f9fa",
          marginBottom: "20px",
          lineHeight: "1.2"
        }}>
          MediBuddy
        </h1>
        
        {/* 서브타이틀 */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <p ref={subtitleRef} style={{
            fontSize: "28px",
            color: "#f8f9fa",
            marginBottom: "90px",
            lineHeight: "1.4",
            maxWidth: "600px"
          }}>
            병원 선택부터 보험 안내까지,<br/>
            언어 장벽 없이 안전하고 정확한 올인원 건강 가이드
          </p>
          
          {/* 십자가 이미지 */}
          <div style={{
            position: "absolute",
            bottom: "-280px",
            right: "-380px",
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src="/cross.svg" 
              alt="Cross" 
              style={{
                width: "80%",
                height: "80%",
                objectFit: "contain",
                filter: "brightness(0) invert(1) opacity(0.3)"
              }}
            />
          </div>
          
           {/* 십자가 중앙을 기준으로 화면 전체 가로선 */}
           <div style={{
             position: "absolute",
             bottom: "-85px",
             left: "-458px",
             width: "72vw",
             height: "3px",
             backgroundColor: "rgba(255, 255, 255, 0.3)",
             zIndex: 5
           }} />
           <div style={{
             position: "absolute",
             bottom: "-85px",
             left: "900px",
             width: "10vw",
             height: "3px",
             backgroundColor: "rgba(255, 255, 255, 0.3)",
             zIndex: 5
           }} />
        </div>
        
        {/* 스크롤 화살표 */}
        <div style={{
          marginBottom: "190px",
          animation: "bounce 2s infinite"
        }}>
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.7)" 
            strokeWidth="2"
          >
            <path d="M7 13l3 3 3-3M7 6l3 3 3-3"/>
          </svg>
        </div>
        
      </div>
      
      {/* 방문객 수 선그래프 - 전체 너비 섹션 */}
      <div style={{ 
        width: '100%',
        backgroundColor: 'black',
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <div style={{ 
          width: '800px', 
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '16px'
        }}>
          <h3 ref={chartTitleRef} style={{ textAlign: 'center', color: 'white', marginBottom: '50px', fontSize: '24px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif' }}>
            외국인 방문객 수 추이
          </h3>
          <VisitorChart />
        </div>
      </div>
      
      {/* About 섹션 */}
      <div style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '80px 0',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center',
          padding: '0 40px'
        }}>
          {/* About 제목 */}
          <div ref={aboutTitleRef} style={{
            color: '#888',
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: '30px',
            letterSpacing: '2px'
          }}>
            About
          </div>
          
          {/* 헤드라인 */}
          <h2 ref={aboutHeadlineRef} style={{
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '1.4',
            marginBottom: '30px',
            fontFamily: 'Pretendard, sans-serif'
          }}>
            꾸준히 늘어나는 외국인 방문객,<br/>
            언어 장벽을 넘어선 의료정보 혁신이 필요합니다.
          </h2>
          
          {/* 설명 텍스트 */}
          <p ref={aboutTextRef} style={{
            color: '#ccc',
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            외국인 방문객 수는 매년 증가하고 있습니다.<br/>
            하지만 의료 정보 접근은 여전히 제한적입니다.<br/>
            우리는 언어 장벽 없는 편리한 의료정보 시스템을 통해<br/>
            외국인의 건강한 삶을 지원합니다.
          </p>
        </div>
      </div>
      
      {/* 통계 카드 섹션 */}
      <div style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '60px 0 200px 0',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          padding: '0 40px'
        }}>
          {/* 외국인 방문객수 카드 */}
          <div ref={card1Ref} style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            border: '1px solid #333'
          }}>
            <h4 style={{
              color: '#888',
              fontSize: '16px',
              fontWeight: '500',
              marginBottom: '20px',
              lineHeight: '1.4'
            }}>
              외국인 방문객수
            </h4>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              1636만 명 +
            </div>
          </div>
          
          {/* 외국어 지원 가능 병원 수 카드 */}
          <div ref={card2Ref} style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            border: '1px solid #333'
          }}>
            <h4 style={{
              color: '#888',
              fontSize: '16px',
              fontWeight: '500',
              marginBottom: '20px',
              lineHeight: '1.4'
            }}>
              외국어 지원 가능 병원 수
            </h4>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              5,876개 +
            </div>
          </div>
          
          {/* 외국인 의료정보부족 비율 카드 */}
          <div ref={card3Ref} style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            border: '1px solid #333'
          }}>
            <h4 style={{
              color: '#888',
              fontSize: '16px',
              fontWeight: '500',
              marginBottom: '20px',
              lineHeight: '1.4'
            }}>
              외국인 의료정보부족 비율
            </h4>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              외국인 노동자 대상 49.5%
            </div>
          </div>
        </div>
      </div>
      
      <div style={{
        width: '100vw',
        backgroundColor: 'transparent',
        padding: '40px 0',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        zIndex: 1000
      }}>
        <div style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 40px"
        }}>
        <form onSubmit={handleSubmit}>
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            padding: "8px",
            minHeight: "80px",
            // transform: isSliding ? "translateY(100px)" : "translateY(0)",
            // opacity: isSliding ? 0 : 1,
            // transition: "all 0.5s ease-in-out"
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Please enter your symptoms..."
                style={{
                  width: "100%",
                  minHeight: "40px",
                  maxHeight: "128px",
                  resize: "none",
                  border: "0",
                  background: "transparent",
                  padding: "8px 8px",
                  fontSize: "16px",
                  outline: "none",
                  fontFamily: "inherit"
                }}
                rows={1}
              />
            </div>

            {/* 전송 버튼 */}
            <button
              type="submit"
              disabled={!message.trim() || isLoading || isSliding}
              style={{
                flexShrink: 0,
                height: "40px",
                width: "40px",
                borderRadius: "12px",
                background: isLoading ? "#6b7280" : "black",
                border: "none",
                cursor: message.trim() && !isLoading && !isSliding ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                if (message.trim() && !isLoading && !isSliding) {
                  e.target.style.background = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (message.trim() && !isLoading && !isSliding) {
                  e.target.style.background = "black";
                }
              }}
            >
              {isLoading ? (
                <div style={{
                  height: "20px",
                  width: "20px",
                  border: "2px solid white",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite"
                }} />
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              )}
            </button>
          </div>
        </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
      
      {/* 병원 목록 섹션 */}
      {showHospitalList && (
        <div ref={hospitalListRef} style={{
          width: '100%',
          backgroundColor: 'black',
          padding: '60px 0'
        }}>
          <HospitalList hospitals={hospitalResults} />
        </div>
      )}
    </div>
  );
};

export default Chat;