import React, { useState, useEffect } from "react";
import { getCalendarEvents } from "../api/calendarApi";
import { formatMessage } from "../data/translations";

const Calendar = ({ translations }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(2025);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const calendarText = translations?.calendar || {};
  const monthNames = calendarText.monthNames || [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = calendarText.dayNames || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // 이벤트 로드 함수
  const loadEvents = async () => {
    const accessToken = localStorage.getItem('access_token');
    const calendarsData = localStorage.getItem('user_calendars');
    
    if (!accessToken || !calendarsData) {
      console.log('토큰 또는 캘린더 정보가 없습니다.');
      console.log('accessToken:', accessToken ? '있음' : '없음');
      console.log('calendarsData:', calendarsData ? '있음' : '없음');
      return;
    }

    try {
      setIsLoading(true);
      const calendars = JSON.parse(calendarsData);
      
      // 현재 월의 시작일과 종료일 계산 (한국 시간대)
      const startOfMonth = new Date(currentYear, currentMonth, 1, 0, 0, 0);
      const endOfMonth = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59);
      
      // 한국 시간대(+09:00)로 변환
      const timeMin = startOfMonth.toLocaleString('sv-SE').replace(' ', 'T') + '+09:00';
      const timeMax = endOfMonth.toLocaleString('sv-SE').replace(' ', 'T') + '+09:00';
      
      console.log('이벤트 로드 중...', { timeMin, timeMax });
      console.log('캘린더 목록:', calendars);
      
      // 각 캘린더에서 이벤트 가져오기
      const allEvents = [];
      for (const calendar of calendars.items || []) {
        console.log(`캘린더 ${calendar.id} 이벤트 요청 중...`);
        try {
          const response = await getCalendarEvents(
            accessToken, 
            calendar.id, 
            timeMin, 
            timeMax
          );
          
          console.log(`캘린더 ${calendar.id} 응답:`, response);
          
          if (response.events) {
            console.log(`캘린더 ${calendar.id} 이벤트 개수:`, response.events.length);
            allEvents.push(...response.events);
          } else {
            console.log(`캘린더 ${calendar.id}에 events 필드가 없음`);
          }
        } catch (error) {
          console.error(`캘린더 ${calendar.id} 이벤트 로드 오류:`, error);
        }
      }
      
      setEvents(allEvents);
      console.log('로드된 이벤트:', allEvents);
    } catch (error) {
      console.error('이벤트 로드 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 월이 변경될 때마다 이벤트 다시 로드
  useEffect(() => {
    loadEvents();
  }, [currentMonth, currentYear]);

  // 특정 날짜의 이벤트 가져오기
  const getEventsForDate = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return [];
    
    const targetDate = new Date(currentYear, currentMonth, day);
    const targetDateStr = targetDate.toISOString().split('T')[0];
    
    return events.filter(event => {
      const eventDate = new Date(event.start?.dateTime || event.start?.date);
      const eventDateStr = eventDate.toISOString().split('T')[0];
      return eventDateStr === targetDateStr;
    });
  };

  // 해당 월의 첫째 날과 마지막 날 계산
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // 캘린더 날짜 배열 생성
  const calendarDays = [];
  
  // 이전 달의 마지막 날들 (빈 칸 채우기)
  const prevMonth = new Date(currentYear, currentMonth, 0);
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonth.getDate() - i,
      isCurrentMonth: false,
      isToday: false
    });
  }

  // 현재 달의 날들
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = 
      day === today.getDate() && 
      currentMonth === today.getMonth() && 
      currentYear === today.getFullYear();
    
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isToday
    });
  }

  // 다음 달의 첫째 날들 (빈 칸 채우기)
  const remainingDays = 42 - calendarDays.length; // 6주 * 7일 = 42
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isToday: false
    });
  }

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '40px auto 40px auto',
      padding: '20px 15px 15px 15px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      color: 'white'
    }}>
      {/* 헤더 */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
        padding: '0 5px'
      }}>
        <button
          onClick={goToPreviousMonth}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '6px',
            color: 'white',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            backdropFilter: 'blur(5px)'
          }}
        >
          ←
        </button>
        
        <h2 style={{
          fontSize: '20px',
          fontWeight: '300',
          fontFamily: '"Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
          letterSpacing: '1px',
          margin: 0,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {formatMessage(calendarText.monthTitle || "{{year}} {{month}}", {
            year: currentYear,
            month: monthNames[currentMonth] || ""
          })}
          {isLoading && (
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderTop: '2px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          )}
        </h2>
        
        <button
          onClick={goToNextMonth}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '6px',
            color: 'white',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '14px',
            backdropFilter: 'blur(5px)'
          }}
        >
          →
        </button>
      </div>

      {/* 요일 헤더 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px',
        marginBottom: '8px'
      }}>
        {dayNames.map((day, index) => (
          <div
            key={day}
            style={{
              padding: '8px 4px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '12px',
              color: index === 0 ? 'rgba(255, 255, 255, 0.9)' : index === 6 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px)'
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 캘린더 그리드 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '1px'
      }}>
        {calendarDays.map((date, index) => {
          const dayEvents = getEventsForDate(date.day, date.isCurrentMonth);
          
          return (
            <div
              key={index}
              style={{
                aspectRatio: '2.0',
                padding: '6px 4px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: date.isCurrentMonth 
                  ? date.isToday 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: date.isCurrentMonth 
                  ? date.isToday 
                    ? '#00FFFF' 
                    : '#00FFFF'
                  : 'rgba(0, 255, 255, 0.4)',
                border: date.isToday ? '2px solid #00FFFF' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
                maxHeight: '120px'
              }}
              onMouseEnter={(e) => {
                if (date.isCurrentMonth) {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (date.isCurrentMonth) {
                  e.target.style.backgroundColor = date.isToday 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                {date.day}
              </div>
              
              {/* 이벤트 표시 */}
              {dayEvents.length > 0 && (
                <div style={{ 
                  width: '100%', 
                  flex: 1,
                  overflowY: 'auto',
                  maxHeight: '80px',
                  paddingRight: '2px'
                }}>
                  {dayEvents.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      style={{
                        fontSize: '9px',
                        backgroundColor: 'rgba(0, 255, 255, 0.3)',
                        color: 'white',
                        padding: '1px 3px',
                        borderRadius: '3px',
                        marginBottom: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        border: '1px solid rgba(0, 255, 255, 0.5)',
                        minHeight: '12px'
                      }}
                      title={event.summary}
                    >
                      {event.summary}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Calendar;