import axios from 'axios';

export const searchHospitals = async (prompt, country) => {
  const requestData = {
    prompt,
    country
  };
  
  console.log('API 요청 데이터:', requestData);
  
  try {
    const response = await axios.post('/hospital/search', requestData);
    console.log('API 응답 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('병원 검색 API 오류:', error);
    
    if (error.response) {
      console.error('응답 상태:', error.response.status);
      console.error('응답 데이터:', error.response.data);
      console.error('응답 헤더:', error.response.headers);
    } else if (error.request) {
      console.error('요청 오류:', error.request);
    } else {
      console.error('오류 메시지:', error.message);
    }
    
    throw error;
  }
};