import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// SVG Icon Components
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const ShieldIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const UmbrellaIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12a10.3 10.3 0 0 0-20 0Z"></path>
    <path d="M12 12v8a2 2 0 0 0 4 0"></path>
    <path d="M12 2v1"></path>
  </svg>
);
const AirplaneIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 -1 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
  </svg>
);

// Detail Overlay Component
const DetailOverlay = ({ data, onClose, translations }) => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef([]);
  const insuranceText = translations?.insurance || {};

  // 모달이 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // GSAP 애니메이션
  useEffect(() => {
    if (data && overlayRef.current) {
      const tl = gsap.timeline();
      
      // 초기 상태 설정
      gsap.set([titleRef.current, ...sectionsRef.current], {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      // 오버레이 배경 애니메이션
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      // 제목 애니메이션
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.1")
      // 섹션들 순차 애니메이션
      .to(sectionsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.3");
    }
  }, [data]);

  if (!data) return null;

  return (
    <div ref={overlayRef} className="detail-overlay" onClick={onClose}>
      <div className="detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close-btn" onClick={onClose}>
          &times;
        </button>
        {data.details ? (
          <>
            <h2 ref={titleRef} className="detail-title">{data.details.title}</h2>
            {data.details.content.map((section, index) => (
              <div 
                key={index} 
                ref={el => sectionsRef.current[index] = el}
                className="detail-section"
              >
                <h3>{section.heading}</h3>
                <ul>
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <div ref={titleRef} className="detail-section">
            <h2 className="detail-title">{data.title}</h2>
            <p>{insuranceText.noDetails || "상세 정보가 없습니다."}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Insurance Component
const cardIconMap = {
  nhi: <PlusIcon className="icon" />,
  private: <ShieldIcon className="icon" />,
  student: <UmbrellaIcon className="icon" />,
  travel: <AirplaneIcon className="icon" />
};

const Insurance = ({ translations }) => {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  
  // GSAP 애니메이션을 위한 refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const insuranceText = translations?.insurance || {};
  const cards = Object.keys(cardIconMap)
    .map((key) => ({
      theme: key,
      icon: cardIconMap[key],
      ...(insuranceText.cards?.[key] || {}),
    }))
    .filter((card) => !!card.title);

  // GSAP 애니메이션 초기화
  useEffect(() => {
    const tl = gsap.timeline();
    
    // 초기 상태 설정
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50
    });

    // 제목 애니메이션
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // 카드 애니메이션
    setTimeout(() => {
      if (card1Ref.current && card2Ref.current && card3Ref.current && card4Ref.current) {
        // 초기 상태 설정
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
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
            toggleActions: "play none none reverse"
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
          }, "-=0.4")
          .to(card4Ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.4");
      }
    }, 100);

  }, []);

  return (
    <>
      <style>{`
        .insurance-container {
          padding: 60px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: transparent;
          min-height: 100vh;
        }

        .main-title {
          text-align: center; 
          color: #ffffff; 
          margin-bottom: 20px;
          font-size: 3.5em; 
          font-weight: 800;
          font-family: 'Pretendard', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .main-subtitle {
          text-align: center;
          color: #ffffff;
          margin-bottom: 80px;
          font-size: 1.2em;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .cards-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px; 
          max-width: 1200px; 
          margin: 0 auto;
          padding: 0 20px;
        }

        .card {
          border-radius: 24px; 
          padding: 0;
          cursor: pointer; 
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          position: relative;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .card:hover::before {
          opacity: 1;
        }
        
        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .card-header {
          padding: 40px 30px 20px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .icon { 
          margin-bottom: 20px;
          background: transparent !important;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
        
        .card-title { 
          font-size: 1.4em; 
          margin: 0; 
          font-weight: 700; 
          line-height: 1.3;
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .card-content {
          padding: 0 30px 40px;
          position: relative;
          z-index: 2;
        }

        .info-section { 
          margin-bottom: 20px; 
          text-align: left;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .info-section:hover {
          background: transparent;
          transform: translateX(5px);
        }
        
        .info-section:last-child { margin-bottom: 0; }
        
        .info-section h3 { 
          font-size: 1em; 
          margin: 0 0 12px 0; 
          font-weight: 600; 
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.9em;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        
        .info-section p { 
          font-size: 0.95em; 
          line-height: 1.6; 
          margin: 0; 
          color: #ffffff;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        /* 테마별 그라데이션 스타일 */
        .card-nhi .icon, .card-nhi .card-title { 
          color:rgb(255, 255, 255);
        }
        .card-nhi .info-section h3 {
          color: #00FFFF;
        }

        .card-private .icon, .card-private .card-title { 
          color:rgb(255, 255, 255);
        }
        .card-private .info-section h3 {
          color: #00FFFF;
        }

        .card-student .icon, .card-student .card-title { 
          color:rgb(255, 255, 255);
        }
        .card-student .info-section h3 {
          color: #00FFFF;
        }

        .card-travel .icon, .card-travel .card-title { 
          color:rgb(255, 255, 255);
        }
        .card-travel .info-section h3 {
          color: #00FFFF;
        }


        /* --- 상세정보 오버레이 스타일 --- */
        .detail-overlay {
          position: fixed; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(15px);
          display: flex; 
          justify-content: center; 
          align-items: center;
          z-index: 1000; 
          opacity: 0;
          overflow-y: auto;
          padding: 40px 20px;
        }

        .detail-content {
          width: 100%;
          max-width: 900px;
          text-align: left;
          position: relative;
          margin-top: 400px;
        }

        .detail-close-btn {
          position: fixed; 
          top: 30px; 
          right: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 2rem;
          color: #ffffff; 
          cursor: pointer; 
          line-height: 1; 
          padding: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }
        .detail-close-btn:hover { 
          background: t(255, 255, 255, 0.2);
          color: #ffffff;
          transform: scale(1.1);
        }
        
        .detail-title { 
          font-size: 3em; 
          margin-bottom: 50px; 
          color: #ffffff;
          font-weight: 800;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          text-align: center;
          font-family: 'Pretendard', sans-serif;
        }
        
        .detail-section { 
          margin-bottom: 40px;
          padding: 30px;
          background: transparent;
        }
        
        .detail-section h3 { 
          font-size: 1.5em; 
          margin-bottom: 20px; 
          color: #ffffff;
          font-weight: 700;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .detail-section ul { 
          list-style: none; 
          padding-left: 0; 
        }
        
        .detail-section li { 
          margin-bottom: 15px; 
          line-height: 1.7; 
          color: #ffffff;
          padding-left: 30px; 
          position: relative; 
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          font-size: 1.1em;
        }
        
        .detail-section li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #00FF88;
          font-weight: bold;
          font-size: 1.5em;
          text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
      <div className="insurance-container">
        <h1 ref={titleRef} className="main-title">
          {insuranceText.title || "Medical Insurance Guide"}
        </h1>
        <p ref={subtitleRef} className="main-subtitle">
          {insuranceText.subtitle || "Choose the right insurance plan for your stay in Korea"}
        </p>
        <div className="cards-grid">
          {cards.map((item, index) => {
            const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
            return (
              <div
                key={index}
                ref={cardRefs[index]}
                className={`card card-${item.theme}`}
                onClick={() => setSelectedInsurance(item)}
              >
                <div className="card-header">
                  {item.icon}
                  <h2 className="card-title">{item.title}</h2>
                </div>
                <div className="card-content">
                  {item.sections?.map((section, secIndex) => (
                    <div key={secIndex} className="info-section">
                      <h3>{section.heading}</h3>
                      <p>{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedInsurance && (
        <DetailOverlay
          data={selectedInsurance}
          onClose={() => setSelectedInsurance(null)}
          translations={translations}
        />
      )}
    </>
  );
};

export default Insurance;
