import React, { useState } from "react";
import { formatMessage } from "../data/translations";

const HospitalList = ({ hospitals, translations }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const hospitalText = translations?.hospitalList || {};
  
  // 선택된 병원이 있으면 해당 병원만, 없으면 모든 병원의 지도 URL 생성
  const getMapUrl = () => {
    if (selectedHospital && selectedHospital.latitude && selectedHospital.longitude) {
      // 선택된 병원만 표시
      return `https://maps.googleapis.com/maps/api/staticmap?size=600x400&zoom=15&markers=color:red|${selectedHospital.latitude},${selectedHospital.longitude}&key=AIzaSyBdl7hNzpfeSC8ifDL7aGv9Iv0040K7teY`;
    } else if (hospitals && hospitals.mapUrl) {
      // 모든 병원 표시 (기본값)
      return hospitals.mapUrl;
    }
    return null;
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      {/* 헤더 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '20px',
          margin: 10
        }}>
          {formatMessage(
            hospitalText.totalFound || "총 {{count}}개의 병원을 찾았습니다.",
            { count: hospitals.hospitals ? hospitals.hospitals.length : hospitals.length }
          )}
        </p>
      </div>

      {/* 메인 컨테이너 - 좌우 분할 */}
      <div style={{
        display: 'flex',
        gap: '30px',
        height: '600px'
      }}>
        {/* 왼쪽: 병원 리스트 */}
        <div style={{
          width: '40%',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <h3 style={{
            color: '#f8f9fa',
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textAlign: 'center'
          }}>
            {hospitalText.listTitle || "병원 목록"}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(hospitals.hospitals || hospitals).map((hospital, index) => (
              <div
                key={index}
                onClick={() => setSelectedHospital(hospital)}
                style={{
                  background: selectedHospital === hospital 
                    ? 'rgba(59, 130, 246, 0.3)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  border: selectedHospital === hospital 
                    ? '2px solid rgba(59, 130, 246, 0.6)' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* 병원명 */}
                <h4 style={{
                  color: '#f8f9fa',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  margin: '0 0 8px 0'
                }}>
                  {hospital.name_korean}
                </h4>

                {/* 주소 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                {hospital.address_korean}
                </div>

                {/* 전화번호 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {(hospitalText.phoneLabel || "Tel")}: {hospital.p_number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 지도 */}
        <div style={{
          width: '60%',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3 style={{
            color: '#f8f9fa',
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textAlign: 'center'
          }}>
            {hospitalText.mapTitle || "지도"}
          </h3>
          
          {/* 실제 지도 표시 */}
          {getMapUrl() ? (
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}>
              <img 
                src={getMapUrl()} 
                alt="병원 위치 지도"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  // 지도 로딩 실패 시 플레이스홀더 표시
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* 지도 로딩 실패 시 표시될 플레이스홀더 */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(255, 255, 255, 0.3)'
              }}>
                <div style={{
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
                  <div style={{ fontSize: '16px' }}>
                    {selectedHospital 
                      ? formatMessage(
                          hospitalText.mapSelectedPlaceholder || "{{name}} 위치",
                          { name: selectedHospital.name_korean }
                        )
                      : hospitalText.mapPlaceholder || '병원을 선택하면 지도가 표시됩니다'
                    }
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              width: '100%',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed rgba(255, 255, 255, 0.3)'
            }}>
              <div style={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
                <div style={{ fontSize: '16px' }}>
                  {selectedHospital 
                    ? formatMessage(
                        hospitalText.mapSelectedPlaceholder || "{{name}} 위치",
                        { name: selectedHospital.name_korean }
                      )
                    : hospitalText.mapPlaceholder || '병원을 선택하면 지도가 표시됩니다'
                  }
                </div>
              </div>
            </div>
          )}

          {/* 선택된 병원 정보 */}
          {selectedHospital && (
            <div style={{
              width: '100%',
              marginTop: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{
                color: '#f8f9fa',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '0 0 12px 0'
              }}>
                {hospitalText.detailTitle || "상세 정보"}
              </h4>
              
              <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                <strong>{hospitalText.supportedLanguages || "지원 언어"}:</strong> {selectedHospital.language}
              </div>
              
              <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px'
              }}>
                <strong>{hospitalText.specialties || "진료과목"}:</strong> {selectedHospital.specialty_korean}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalList;