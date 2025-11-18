export const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "#e53e3e";
    case "medium":
      return "#ed8936";
    case "low":
      return "#48bb78";
    default:
      return "#667eea";
  }
};

// 증상 분석 함수 (필요시 확장 가능)
export const analyzeSymptoms = (symptoms) => {
  const lowerSymptoms = symptoms.toLowerCase();

  if (lowerSymptoms.includes("배") || lowerSymptoms.includes("복통")) {
    return {
      department: "소화기내과",
      recommendation: "소화기내과 진료를 권장합니다.",
      factCheck: "민간요법 주의: 배 아플 때 찬물은 도움이 되지 않습니다.",
    };
  } else if (lowerSymptoms.includes("머리") || lowerSymptoms.includes("두통")) {
    return {
      department: "신경과",
      recommendation: "신경과 진료를 받아보세요.",
      factCheck: null,
    };
  } else {
    return {
      department: "내과",
      recommendation: "내과 진료를 권장합니다.",
      factCheck: null,
    };
  }
};
