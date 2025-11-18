// 캘린더 이벤트 추가 API
export const addCalendarEvent = async (accessToken, summary, startTime, endTime) => {
  try {
    const response = await fetch('https://chibbohae-fastapi.store/calendar/add_event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken,
        summary: summary,
        start_time: startTime,
        end_time: endTime
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('캘린더 이벤트 추가 오류:', error);
    throw error;
  }
};

// 캘린더 이벤트 조회 API
export const getCalendarEvents = async (accessToken, calendarId, timeMin, timeMax, maxResults = 50) => {
  try {
    console.log('API 요청 데이터:', {
      access_token: accessToken ? '있음' : '없음',
      calendar_id: calendarId,
      time_min: timeMin,
      time_max: timeMax,
      max_results: maxResults
    });
    
    const response = await fetch('https://chibbohae-fastapi.store/calendar/list_events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken,
        calendar_id: calendarId,
        time_min: timeMin,
        time_max: timeMax,
        max_results: maxResults,
        single_events: true,
        order_by: "startTime"
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('캘린더 이벤트 조회 오류:', error);
    throw error;
  }
};