const countryLocaleMap = {
  Mongolia: "mn",
  America: "en",
  Vietnam: "vi",
  Russia: "ru",
  Japan: "ja",
  China: "zh",
  "Middle East": "ar",
  Korea: "ko",
  Other: "en",
};

const insuranceCardsEn = {
  nhi: {
    title: "National Health Insurance (NHI)",
    sections: [
      { heading: "Eligibility", text: "Foreigners staying in Korea for more than 6 months" },
      { heading: "Enrollment", text: "Students are automatically enrolled (mandatory)" },
      { heading: "Benefits", text: "Same as Koreans: 30% out-of-pocket cost" },
    ],
    details: {
      title: "National Health Insurance (NHI)",
      content: [
        {
          heading: "Eligibility",
          points: [
            "All foreigners residing in Korea for more than 6 consecutive months with a Foreign Registration Card.",
            "Includes international students (D-2/D-4), foreign workers (E visas), and marriage migrants (F-6).",
          ],
        },
        {
          heading: "How to Join",
          points: [
            "International students → automatically enrolled as regional subscribers (mandatory since July 2019).",
            "Employees → enrolled as workplace subscribers; employers pay part of the premium.",
            "Others must apply directly to NHIS after 6 months of residence.",
            "Average premium: about 120,000 KRW per month. Students receive a 50% government subsidy.",
          ],
        },
        {
          heading: "Benefits",
          points: [
            "Same benefits as Korean citizens.",
            "Patients pay only about 30% of medical costs (outpatient, hospitalization, prescriptions).",
          ],
        },
      ],
    },
  },
  private: {
    title: "Private Indemnity Insurance",
    sections: [
      { heading: "Eligibility", text: "Foreigners with valid NHI" },
      { heading: "Enrollment", text: "Enroll individually through an insurer" },
      { heading: "Benefits", text: "Reimburses 70-80% of out-of-pocket cost" },
    ],
    details: {
      title: "Private Indemnity Health Insurance",
      content: [
        {
          heading: "Eligibility",
          points: [
            "Foreigners with valid NHI coverage and legal residence in Korea.",
            "Most products (cancer, accident, general health) are available.",
            "Not available for short-term visa holders (tourist/working holiday).",
          ],
        },
        {
          heading: "How to Join",
          points: [
            "Purchase individually through major Korean insurers.",
            "Premiums depend on age and coverage; paid monthly.",
            "Proof of NHI payment is often required when applying.",
          ],
        },
        {
          heading: "Benefits",
          points: [
            "Reimburses 70–80% of out-of-pocket medical expenses after NHI coverage.",
            "Covers hospitalization, surgeries, outpatient treatment.",
            "Provides financial protection against high-cost treatments.",
          ],
        },
      ],
    },
  },
  student: {
    title: "International Student Insurance",
    sections: [
      { heading: "Eligibility", text: "Foreign students studying abroad in Korea" },
      { heading: "Enrollment", text: "Through university: 6-month or 1-year plan" },
      { heading: "Benefits", text: "Covers 90% of inpatient cost and some outpatient visits" },
    ],
    details: {
      title: "International Student Health Insurance",
      content: [
        {
          heading: "Eligibility",
          points: [
            "Degree-seeking students (D-2) → automatically covered under NHI.",
            "Language students (D-4-1) → must enroll in private student insurance for the first 6 months.",
            "Exchange/short-term students → must join school-designated insurance.",
          ],
        },
        {
          heading: "How to Join",
          points: [
            "Organized through universities (6-month or 1-year contracts).",
            "Premiums: about 60,000–70,000 KRW for 6 months, 110,000–130,000 KRW for 12 months.",
            "Enrollment usually tied to school registration.",
          ],
        },
        {
          heading: "Benefits",
          points: [
            "Covers medical expenses during study in Korea.",
            "Inpatient: 90% of costs reimbursed (limit ~10 million KRW).",
            "Outpatient: reimbursed up to 250,000 KRW per visit.",
          ],
        },
      ],
    },
  },
  travel: {
    title: "Travel Medical Insurance",
    sections: [
      { heading: "Eligibility", text: "Short-term visitors without NHI" },
      { heading: "Enrollment", text: "At airport or online on arrival" },
      { heading: "Benefits", text: "Covers illness/injuries during travel" },
    ],
    details: {
      title: "Travel Medical Insurance",
      content: [
        {
          heading: "Eligibility",
          points: [
            "Tourists and short-term visitors (e.g., C-3 visa holders).",
            "Individuals staying in Korea for less than 6 months.",
            "Those not eligible for NHI.",
          ],
        },
        {
          heading: "How to Join",
          points: [
            "Can be purchased online before or upon arrival in Korea.",
            "Available at insurance counters at Incheon International Airport.",
            "Various plans available from global and Korean insurers.",
          ],
        },
        {
          heading: "Benefits",
          points: [
            "Covers emergency medical expenses during travel.",
            "Includes costs for ER visits, hospitalization, and treatments.",
            "Coverage and limits vary by plan; review policy details.",
          ],
        },
      ],
    },
  },
};

const insuranceCardsKo = {
  nhi: {
    title: "국민건강보험 (NHI)",
    sections: [
      { heading: "가입 대상", text: "한국에 6개월 이상 체류하는 외국인" },
      { heading: "가입 방법", text: "유학생 등은 자동 가입 (의무)" },
      { heading: "혜택", text: "내국인과 동일, 본인부담 약 30%" },
    ],
    details: {
      title: "국민건강보험 (NHI)",
      content: [
        {
          heading: "가입 대상",
          points: [
            "외국인등록증을 보유하고 6개월 이상 연속 체류한 모든 외국인.",
            "D-2/D-4 유학생, E비자 근로자, F-6 결혼이민자 등을 포함.",
          ],
        },
        {
          heading: "가입 방법",
          points: [
            "유학생 → 2019년 7월 이후 지역가입자로 자동 등록.",
            "직장인 → 직장가입자로 편입되며 사업장이 일부 보험료 부담.",
            "프리랜서·무직자 등은 6개월 체류 후 공단에 직접 신청.",
            "평균 보험료 약 12만 원, 학생은 정부가 50% 지원.",
          ],
        },
        {
          heading: "혜택",
          points: [
            "한국인과 동일한 급여 혜택.",
            "외래·입원·처방 등 의료비의 약 30%만 부담.",
          ],
        },
      ],
    },
  },
  private: {
    title: "실손형 민간보험",
    sections: [
      { heading: "가입 대상", text: "유효한 건강보험(NHI) 가입 외국인" },
      { heading: "가입 방법", text: "개별 보험사 상품 가입" },
      { heading: "혜택", text: "본인부담금 70~80% 환급" },
    ],
    details: {
      title: "실손형 민간의료보험",
      content: [
        {
          heading: "가입 대상",
          points: [
            "NHI에 가입했고 합법적으로 체류 중인 외국인.",
            "암·상해·종합 등 대부분 상품 가입 가능.",
            "단기 체류 비자(관광, 워홀 등)는 가입 불가.",
          ],
        },
        {
          heading: "가입 방법",
          points: [
            "삼성화재, DB손해보험 등 주요 보험사에서 개별 가입.",
            "연령·보장 범위에 따라 월 보험료가 달라짐.",
            "2024년 이후 NHI 납부 확인서를 요구하는 경우가 많음.",
          ],
        },
        {
          heading: "혜택",
          points: [
            "건강보험으로 처리된 후 남은 본인부담금의 70~80% 보장.",
            "입원, 수술, 통원 진료 등 폭넓게 보장.",
            "고액 진료비 위험을 줄여 재정적 부담 완화.",
          ],
        },
      ],
    },
  },
  student: {
    title: "유학생 전용 보험",
    sections: [
      { heading: "가입 대상", text: "한국에서 수학 중인 외국인 유학생" },
      { heading: "가입 방법", text: "학교를 통한 6개월·1년 단위 가입" },
      { heading: "혜택", text: "입원비 90% 및 일부 통원비 보장" },
    ],
    details: {
      title: "유학생 건강보험",
      content: [
        {
          heading: "가입 대상",
          points: [
            "학위과정(D-2) 학생 → 건강보험 자동 가입.",
            "어학연수(D-4-1) 학생 → 최초 6개월은 학교 지정 보험 가입 필요.",
            "교환·단기 학생 → 학교 지정 보험 의무 가입.",
          ],
        },
        {
          heading: "가입 방법",
          points: [
            "대학 또는 기관을 통해 6개월/1년 단위로 일괄 가입.",
            "6개월 약 6~7만 원, 1년 약 11~13만 원 수준.",
            "대부분 학사 행정과 연동되어 자동 청구.",
          ],
        },
        {
          heading: "혜택",
          points: [
            "한국 체류 중 발생하는 의료비 보장.",
            "입원비 90% 환급(한도 약 1,000만 원).",
            "통원 진료 1회 최대 25만 원까지 보상.",
          ],
        },
      ],
    },
  },
  travel: {
    title: "여행자 의료보험",
    sections: [
      { heading: "가입 대상", text: "건강보험이 없는 단기 방문객" },
      { heading: "가입 방법", text: "입국 전·공항·온라인에서 가입" },
      { heading: "혜택", text: "여행 중 질병·상해 치료비 보장" },
    ],
    details: {
      title: "여행자 의료보험",
      content: [
        {
          heading: "가입 대상",
          points: [
            "관광(C-3) 등 6개월 미만 단기 체류자.",
            "NHI 적용 대상이 아닌 방문객.",
          ],
        },
        {
          heading: "가입 방법",
          points: [
            "입국 전 온라인 또는 공항 보험 카운터에서 가입.",
            "국내외 보험사가 다양한 플랜 제공.",
          ],
        },
        {
          heading: "혜택",
          points: [
            "여행 중 갑작스런 사고·질병에 대한 응급의료비 보장.",
            "응급실, 입원, 치료 등에 대한 비용 일부/전부 보상.",
            "상품별 보장 한도가 다르므로 약관 확인 필요.",
          ],
        },
      ],
    },
  },
};

const insuranceCardsJa = {
  nhi: {
    title: "国民健康保険 (NHI)",
    sections: [
      { heading: "加入対象", text: "韓国に6か月以上滞在する外国人" },
      { heading: "加入方法", text: "留学生などは自動加入（義務）" },
      { heading: "保障内容", text: "韓国人と同様、自己負担は約30%" },
    ],
    details: {
      title: "国民健康保険 (NHI)",
      content: [
        {
          heading: "加入対象",
          points: [
            "外国人登録証を所持し、6か月以上継続して滞在するすべての外国人。",
            "D-2/D-4 留学生、Eビザ労働者、F-6 結婚移民者などを含む。",
          ],
        },
        {
          heading: "加入方法",
          points: [
            "留学生 → 2019年7月以降、地域加入者として自動登録。",
            "会社員 → 職場加入者となり、事業所が一部保険料を負担。",
            "フリーランス・無職者などは6か月滞在後に公団へ直接申請。",
            "平均保険料は約12万ウォン、学生は政府が50%支援。",
          ],
        },
        {
          heading: "保障内容",
          points: [
            "韓国人と同じ医療給付を受けられる。",
            "外来・入院・処方など医療費の約30％のみ負担。",
          ],
        },
      ],
    },
  },
  private: {
    title: "実損型民間保険",
    sections: [
      { heading: "加入対象", text: "有効な国民健康保険(NHI)加入者" },
      { heading: "加入方法", text: "民間保険会社の商品に個別加入" },
      { heading: "保障内容", text: "自己負担額の70〜80%を補償" },
    ],
    details: {
      title: "実損型民間医療保険",
      content: [
        {
          heading: "加入対象",
          points: [
            "NHIに加入し、合法的に滞在している外国人。",
            "がん・傷害・総合型などほとんどの保険商品への加入が可能。",
            "短期滞在ビザ（観光・ワーホリなど）は加入不可。",
          ],
        },
        {
          heading: "加入方法",
          points: [
            "サムスン火災、DB損害保険など主要保険会社で個別加入。",
            "年齢・補償範囲により月額保険料が異なる。",
            "2024年以降、NHI納付確認書を求められる場合が多い。",
          ],
        },
        {
          heading: "保障内容",
          points: [
            "健康保険適用後に残る自己負担額の70〜80％を補償。",
            "入院・手術・通院など幅広く補償可能。",
            "高額医療費のリスクを軽減し、財政的負担を緩和。",
          ],
        },
      ],
    },
  },
  student: {
    title: "留学生専用保険",
    sections: [
      { heading: "加入対象", text: "韓国で学ぶ外国人留学生" },
      { heading: "加入方法", text: "学校を通じて6か月・1年単位で加入" },
      { heading: "保障内容", text: "入院費の90%および一部通院費を補償" },
    ],
    details: {
      title: "留学生健康保険",
      content: [
        {
          heading: "加入対象",
          points: [
            "学位課程（D-2）学生 → 健康保険に自動加入。",
            "語学研修（D-4-1）学生 → 最初の6か月は学校指定保険加入が必要。",
            "交換・短期学生 → 学校指定保険の加入が義務。",
          ],
        },
        {
          heading: "加入方法",
          points: [
            "大学または機関を通じて6か月/1年単位で一括加入。",
            "6か月約6〜7万ウォン、1年約11〜13万ウォン。",
            "多くは学事システムと連動して自動請求。",
          ],
        },
        {
          heading: "保障内容",
          points: [
            "韓国滞在中に発生した医療費を補償。",
            "入院費 90%補償（上限 約1,000万ウォン）。",
            "通院は1回最大25万ウォンまで補償。",
          ],
        },
      ],
    },
  },
  travel: {
    title: "旅行者医療保険",
    sections: [
      { heading: "加入対象", text: "健康保険に加入していない短期訪問者" },
      { heading: "加入方法", text: "入国前・空港・オンラインで加入" },
      { heading: "保障内容", text: "旅行中の病気・ケガの治療費を補償" },
    ],
    details: {
      title: "旅行者医療保険",
      content: [
        {
          heading: "加入対象",
          points: [
            "観光（C-3）など6か月未満の短期滞在者。",
            "NHIの適用対象外の訪問者。",
          ],
        },
        {
          heading: "加入方法",
          points: [
            "入国前にオンライン、または空港の保険カウンターで加入可能。",
            "国内外の保険会社が多様なプランを提供。",
          ],
        },
        {
          heading: "保障内容",
          points: [
            "旅行中の突然の事故・病気に対する応急医療を補償。",
            "救急室、入院、治療などの費用を一部または全額補償。",
            "プランごとに補償限度が異なるため、約款の確認が必要。",
          ],
        },
      ],
    },
  },
};

const insuranceCardsRu = {
  nhi: {
    title: "Национальное медицинское страхование (NHI)",
    sections: [
      { heading: "Кто может оформить", text: "Иностранцы, проживающие в Корее более 6 месяцев" },
      { heading: "Как оформить", text: "Студенты автоматически подключаются (обязательно)" },
      { heading: "Преимущества", text: "Такие же как у граждан, около 30% собственных расходов" },
    ],
    details: {
      title: "Национальное медицинское страхование (NHI)",
      content: [
        {
          heading: "Кто может оформить",
          points: [
            "Иностранцы с регистрационной картой, проживающие непрерывно более 6 месяцев.",
            "Включая студентов D-2/D-4, работников по визам E, супругов F-6."
          ]
        },
        {
          heading: "Как оформить",
          points: [
            "Студенты → автоматически регистрируются как региональные страхователи.",
            "Сотрудники → подключаются через работодателя, компания оплачивает часть взносов.",
            "Фрилансеры/безработные → подают заявление после 6 месяцев проживания.",
            "Средний взнос около 120 000 вон, студентам предоставляется 50% поддержка."
          ]
        },
        {
          heading: "Преимущества",
          points: [
            "Такие же страховые выплаты, как у граждан Кореи.",
            "Пациент оплачивает только около 30% стоимости лечения."
          ]
        }
      ]
    }
  },
  private: {
    title: "Частная страховка реальных расходов",
    sections: [
      { heading: "Кто может оформить", text: "Иностранцы, имеющие действующее NHI" },
      { heading: "Как оформить", text: "Оформление напрямую в страховых компаниях" },
      { heading: "Преимущества", text: "Возмещение 70–80% собственных расходов" },
    ],
    details: {
      title: "Частная медицинская страховка",
      content: [
        {
          heading: "Кто может оформить",
          points: [
            "Иностранцы, легально проживающие и подключенные к NHI.",
            "Доступны большинство продуктов: от рака до несчастных случаев.",
            "Краткосрочные визы (туризм, ворк-холидей) — недоступно."
          ]
        },
        {
          heading: "Как оформить",
          points: [
            "Оформление в крупных страховых компаниях, таких как Samsung Fire, DB Insurance.",
            "Размер взноса зависит от возраста и уровня покрытия.",
            "После 2024 года часто требуется подтверждение уплаты NHI."
          ]
        },
        {
          heading: "Преимущества",
          points: [
            "Покрытие 70–80% собственных расходов после применения NHI.",
            "Широкое покрытие: госпитализация, операции, амбулаторные визиты.",
            "Снижение финансовой нагрузки в случае дорогостоящего лечения."
          ]
        }
      ]
    }
  },
  student: {
    title: "Страхование для иностранных студентов",
    sections: [
      { heading: "Кто может оформить", text: "Иностранные студенты, обучающиеся в Корее" },
      { heading: "Как оформить", text: "Оформление через учебное заведение на 6 или 12 месяцев" },
      { heading: "Преимущества", text: "Покрытие до 90% расходов на госпитализацию и частично амбулаторных" },
    ],
    details: {
      title: "Страхование здоровья для студентов",
      content: [
        {
          heading: "Кто может оформить",
          points: [
            "Студенты программ (D-2) → автоматическая регистрация в NHI.",
            "Языковые студенты (D-4-1) → первые 6 месяцев требуется страхование от школы.",
            "Обменные и краткосрочные студенты → обязательное школьное страхование."
          ]
        },
        {
          heading: "Как оформить",
          points: [
            "Оформление через университет на 6 или 12 месяцев.",
            "Стоимость: 6 месяцев — 60–70 тыс. вон, 12 месяцев — 110–130 тыс. вон.",
            "Обычно оплата взимается автоматически через систему университета."
          ]
        },
        {
          heading: "Преимущества",
          points: [
            "Покрытие медицинских расходов во время пребывания в Корее.",
            "До 90% расходов на госпитализацию (лимит: около 1 млн вон).",
            "Амбулаторная помощь до 250 000 вон за визит."
          ]
        }
      ]
    }
  },
  travel: {
    title: "Страхование для путешественников",
    sections: [
      { heading: "Кто может оформить", text: "Краткосрочные посетители без NHI" },
      { heading: "Как оформить", text: "Перед поездкой, в аэропорту или онлайн" },
      { heading: "Преимущества", text: "Покрытие расходов при болезнях и несчастных случаях в поездке" },
    ],
    details: {
      title: "Страхование для путешественников",
      content: [
        {
          heading: "Кто может оформить",
          points: [
            "Краткосрочные визы (C-3), пребывание менее 6 месяцев.",
            "Посетители, не подпадающие под NHI."
          ]
        },
        {
          heading: "Как оформить",
          points: [
            "Онлайн до приезда или в страховых стойках в аэропорту.",
            "Корейские и международные страховщики предлагают различные планы."
          ]
        },
        {
          heading: "Преимущества",
          points: [
            "Экстренная медицинская помощь при несчастных случаях и болезнях.",
            "Покрытие расходов в отделении неотложной помощи, при госпитализации и лечении.",
            "Лимиты покрытия различаются в зависимости от плана — важно проверять условия."
          ]
        }
      ]
    }
  }
};

const insuranceCardsVi = {
  nhi: {
    title: "Bảo hiểm Y tế Quốc dân (NHI)",
    sections: [
      { heading: "Đối tượng", text: "Người nước ngoài cư trú tại Hàn Quốc trên 6 tháng" },
      { heading: "Cách đăng ký", text: "Du học sinh được đăng ký tự động (bắt buộc)" },
      { heading: "Quyền lợi", text: "Tương tự người Hàn, tự chi trả khoảng 30%" },
    ],
    details: {
      title: "Bảo hiểm Y tế Quốc dân (NHI)",
      content: [
        {
          heading: "Đối tượng",
          points: [
            "Người nước ngoài có thẻ đăng ký cư trú và ở liên tục trên 6 tháng.",
            "Bao gồm du học sinh D-2/D-4, lao động visa E, người kết hôn F-6."
          ]
        },
        {
          heading: "Cách đăng ký",
          points: [
            "Du học sinh → tự động đăng ký theo diện khu vực.",
            "Người đi làm → công ty đóng một phần phí bảo hiểm.",
            "Freelancer/thất nghiệp → đăng ký trực tiếp sau 6 tháng cư trú.",
            "Phí trung bình khoảng 120.000 won, sinh viên được hỗ trợ 50%."
          ]
        },
        {
          heading: "Quyền lợi",
          points: [
            "Hưởng quyền lợi y tế như người Hàn Quốc.",
            "Chỉ phải trả khoảng 30% chi phí khám chữa bệnh."
          ]
        }
      ]
    }
  },
  private: {
    title: "Bảo hiểm tư nhân (chi trả thực tế)",
    sections: [
      { heading: "Đối tượng", text: "Người nước ngoài đã tham gia NHI" },
      { heading: "Cách đăng ký", text: "Đăng ký trực tiếp tại các công ty bảo hiểm" },
      { heading: "Quyền lợi", text: "Hoàn trả 70–80% phần tự chi trả" },
    ],
    details: {
      title: "Bảo hiểm Y tế Tư nhân",
      content: [
        {
          heading: "Đối tượng",
          points: [
            "Người nước ngoài đang cư trú hợp pháp và đã tham gia NHI.",
            "Có thể tham gia hầu hết các gói: ung thư, tai nạn, tổng hợp.",
            "Không áp dụng cho visa ngắn hạn (du lịch, working holiday)."
          ]
        },
        {
          heading: "Cách đăng ký",
          points: [
            "Đăng ký tại Samsung Fire, DB Insurance và các công ty lớn.",
            "Phí thay đổi tùy độ tuổi và phạm vi bảo hiểm.",
            "Sau 2024, thường yêu cầu giấy xác nhận đóng NHI."
          ]
        },
        {
          heading: "Quyền lợi",
          points: [
            "Bảo hiểm chi trả 70–80% phần còn lại sau khi đã áp dụng NHI.",
            "Hỗ trợ rộng: nhập viện, phẫu thuật, khám ngoại trú.",
            "Giảm gánh nặng tài chính đối với các chi phí y tế cao."
          ]
        }
      ]
    }
  },
  student: {
    title: "Bảo hiểm dành cho du học sinh",
    sections: [
      { heading: "Đối tượng", text: "Du học sinh đang học tại Hàn Quốc" },
      { heading: "Cách đăng ký", text: "Đăng ký qua trường theo kỳ 6 tháng hoặc 1 năm" },
      { heading: "Quyền lợi", text: "Chi trả 90% phí nhập viện và một phần phí ngoại trú" },
    ],
    details: {
      title: "Bảo hiểm Y tế cho Du học sinh",
      content: [
        {
          heading: "Đối tượng",
          points: [
            "Sinh viên chương trình D-2 → tự động tham gia NHI.",
            "Sinh viên tiếng Hàn D-4-1 → 6 tháng đầu phải tham gia bảo hiểm của trường.",
            "Sinh viên trao đổi/ngắn hạn → bắt buộc tham gia bảo hiểm của trường."
          ]
        },
        {
          heading: "Cách đăng ký",
          points: [
            "Đăng ký theo kỳ 6 tháng hoặc 1 năm qua trường.",
            "Chi phí: 6 tháng 60–70 nghìn won, 1 năm 110–130 nghìn won.",
            "Hầu hết được thu tự động qua hệ thống của trường."
          ]
        },
        {
          heading: "Quyền lợi",
          points: [
            "Chi trả chi phí y tế phát sinh trong thời gian ở Hàn Quốc.",
            "Hoàn 90% phí nhập viện (giới hạn khoảng 1 triệu won).",
            "Khám ngoại trú tối đa 250.000 won mỗi lần."
          ]
        }
      ]
    }
  },
  travel: {
    title: "Bảo hiểm du lịch",
    sections: [
      { heading: "Đối tượng", text: "Khách ngắn hạn không có NHI" },
      { heading: "Cách đăng ký", text: "Trước khi nhập cảnh, tại sân bay hoặc trực tuyến" },
      { heading: "Quyền lợi", text: "Chi trả chi phí điều trị bệnh và tai nạn trong chuyến đi" },
    ],
    details: {
      title: "Bảo hiểm Du lịch",
      content: [
        {
          heading: "Đối tượng",
          points: [
            "Khách du lịch visa C-3, lưu trú dưới 6 tháng.",
            "Khách không thuộc diện NHI."
          ]
        },
        {
          heading: "Cách đăng ký",
          points: [
            "Đăng ký trực tuyến trước khi đến hoặc tại quầy bảo hiểm ở sân bay.",
            "Nhiều công ty trong và ngoài nước cung cấp các gói đa dạng."
          ]
        },
        {
          heading: "Quyền lợi",
          points: [
            "Chi trả cho các trường hợp cấp cứu do tai nạn hoặc bệnh bất ngờ.",
            "Hỗ trợ chi phí khoa cấp cứu, điều trị và nhập viện.",
            "Mức chi trả khác nhau tùy theo gói — cần xem kỹ điều khoản."
          ]
        }
      ]
    }
  }
};

const insuranceCardsZh = {
  nhi: {
    title: "国民健康保险 (NHI)",
    sections: [
      { heading: "适用对象", text: "在韩国停留6个月以上的外国人" },
      { heading: "加入方式", text: "留学生等自动加入（义务）" },
      { heading: "保障内容", text: "与韩国公民相同，自付约30%" },
    ],
    details: {
      title: "国民健康保险 (NHI)",
      content: [
        {
          heading: "适用对象",
          points: [
            "持有外国人登录证并连续停留6个月以上的外国人。",
            "包括 D-2/D-4 留学生、E 签证劳动者、F-6 婚姻移民等。"
          ]
        },
        {
          heading: "加入方式",
          points: [
            "留学生 → 自 2019 年 7 月起自动登记为地区参保者。",
            "职场人士 → 作为职场参保者，公司承担部分费用。",
            "自由职业者/无职业者 → 停留6个月后可向公团申请。",
            "平均保费约12万韩元，学生享受政府50%补助。"
          ]
        },
        {
          heading: "保障内容",
          points: [
            "与韩国公民享有同等医疗福利。",
            "门诊、住院、处方等医疗费用仅需自付30%左右。"
          ]
        }
      ]
    }
  },
  private: {
    title: "商业医疗保险（实报实销）",
    sections: [
      { heading: "适用对象", text: "已加入 NHI 的外国人" },
      { heading: "加入方式", text: "通过保险公司单独投保" },
      { heading: "保障内容", text: "报销自付金额的 70–80%" },
    ],
    details: {
      title: "商业医疗保险",
      content: [
        {
          heading: "适用对象",
          points: [
            "合法居留并已加入 NHI 的外国人。",
            "可购买癌症、意外、综合等多种产品。",
            "短期签证（旅游、打工度假）不可购买。"
          ]
        },
        {
          heading: "加入方式",
          points: [
            "可在三星火灾、DB 损保等大型保险公司投保。",
            "保费根据年龄与保障范围不同而变化。",
            "2024 年后，常需提交 NHI 缴费证明。"
          ]
        },
        {
          heading: "保障内容",
          points: [
            "在 NHI 报销后剩余的自付金额可再报销 70–80%。",
            "涵盖住院、手术、门诊等多种治疗。",
            "减轻高额医疗费用带来的经济压力。"
          ]
        }
      ]
    }
  },
  student: {
    title: "留学生专用保险",
    sections: [
      { heading: "适用对象", text: "在韩国学习的外国留学生" },
      { heading: "加入方式", text: "通过学校按 6 个月或 1 年缴费" },
      { heading: "保障内容", text: "报销90%的住院费用及部分门诊费用" },
    ],
    details: {
      title: "留学生健康保险",
      content: [
        {
          heading: "适用对象",
          points: [
            "学位课程（D-2）学生 → 自动加入 NHI。",
            "语言研修（D-4-1）学生 → 前6个月须购买学校指定保险。",
            "交换·短期学生 → 必须加入学校指定保险。"
          ]
        },
        {
          heading: "加入方式",
          points: [
            "通过大学或机构按6个月/1年一次性加入。",
            "费用：6个月约6–7万韩元，1年约11–13万韩元。",
            "多与学校行政系统联动自动缴费。"
          ]
        },
        {
          heading: "保障内容",
          points: [
            "保障在韩期间发生的医疗费用。",
            "住院费用可报销90%（限额约100万韩元）。",
            "门诊每次最高可报销25万韩元。"
          ]
        }
      ]
    }
  },
  travel: {
    title: "旅行者医疗保险",
    sections: [
      { heading: "适用对象", text: "未加入 NHI 的短期访客" },
      { heading: "加入方式", text: "入境前、机场或线上均可加入" },
      { heading: "保障内容", text: "保障旅行途中疾病·意外治疗费用" },
    ],
    details: {
      title: "旅行者医疗保险",
      content: [
        {
          heading: "适用对象",
          points: [
            "旅游（C-3）等停留不足6个月的旅客。",
            "不属于 NHI 适用对象的访客。"
          ]
        },
        {
          heading: "加入方式",
          points: [
            "可在入境前线上投保，或在机场保险柜台购买。",
            "国内外保险公司提供多种方案。"
          ]
        },
        {
          heading: "保障内容",
          points: [
            "保障旅行中突发事故或疾病的紧急医疗费用。",
            "涵盖急诊、住院、治疗等费用的部分或全部。",
            "不同商品的保障上限不同，请务必确认条款。"
          ]
        }
      ]
    }
  }
};

const insuranceCardsMn = {
  nhi: {
    title: "Үндэсний эрүүл мэндийн даатгал (NHI)",
    sections: [
      { heading: "Хамрагдах хүмүүс", text: "Өмнөд Солонгост 6 сараас дээш хугацаагаар оршин суугч гадаад иргэд" },
      { heading: "Хамрагдах арга", text: "Оюутнууд гэх мэт нь автоматаар бүртгэгдэнэ (заавал)" },
      { heading: "Давуу тал", text: "Солонгос иргэдтэй адил, өөрийн хариулах хувь ~30%" },
    ],
    details: {
      title: "Үндэсний эрүүл мэндийн даатгал (NHI)",
      content: [
        {
          heading: "Хамрагдах хүмүүс",
          points: [
            "Гадаадын иргэний үнэмлэхтэй, 6 сараас дээш хугацаагаар дараалан оршин суугч бүх гадаадын иргэн.",
            "D-2/D-4 оюутан, E визтэй ажилтан, F-6 гэр бүлээр шилжин ирэгч зэрэг.",
          ],
        },
        {
          heading: "Хамрагдах арга",
          points: [
            "Оюутан → 2019 оны 7 сараас хойш автоматаар орон нутгийн даатгуулагчаар бүртгэгдэнэ.",
            "Ажилтан → Ажлын байраараа дамжуулан ажиллагсадын даатгалд хамрагдана.",
            "Фрилансер болон ажилгүй хүмүүс → 6 сар оршин суусны дараа байгууллагад шууд өргөдөл гаргана.",
            "Дундаж даатгалын төлбөр ~120,000 вон, оюутанд 50% татаас олгоно.",
          ],
        },
        {
          heading: "Давуу тал",
          points: [
            "Солонгос иргэдтэй ижил үйлчилгээний хангамж.",
            "Амбулаторийн, хэвтэн эмчлүүлэх, жорын эмийн 30%-ийг өөрөө төлнө.",
          ],
        },
      ],
    },
  },
  private: {
    title: "Хувийн эрүүл мэндийн даатгал",
    sections: [
      { heading: "Хамрагдах хүмүүс", text: "NHI-д хамрагдсан хүчинтэй статус бүхий гадаад иргэн" },
      { heading: "Хамрагдах арга", text: "Даатгалын компаниудаар дамжуулан хамрагдана" },
      { heading: "Давуу тал", text: "Өөрийн төлөх зардлын 70–80%-ийг нөхөн төлнө" },
    ],
    details: {
      title: "Хувийн эрүүл мэндийн даатгал",
      content: [
        {
          heading: "Хамрагдах хүмүүс",
          points: [
            "NHI-д хамрагдсан, хууль ёсоор оршин суугч гадаад иргэн.",
            "Хавдар, гэмтэл, иж бүрэн гэх мэт олон төрлийн бүтээгдэхүүнд хамрагдах боломжтой.",
            "Богино хугацааны виз (жуулчин, working holiday гэх мэт) → хамрагдах боломжгүй.",
          ],
        },
        {
          heading: "Хамрагдах арга",
          points: [
            "Samsung Fire, DB Insurance зэрэг компаниудад биечлэн хамрагдана.",
            "Нас болон хамрах хүрээнээс хамаарч сарын төлбөр өөр.",
            "2024 оноос хойш NHI төлөлтийн тодорхойлолт шаардах тохиолдол их.",
          ],
        },
        {
          heading: "Давуу тал",
          points: [
            "NHI-аар тооцоолсны дараа үлдсэн өөрийн төлбөрийн 70–80%-ийг даана.",
            "Хэвтэн эмчлүүлэх, хагалгаа, амбулаторийн өргөн хүрээний хамгаалалт.",
            "Өндөр зардлын эрсдэлийг бууруулж санхүүгийн дарамтыг хөнгөлнө.",
          ],
        },
      ],
    },
  },
  student: {
    title: "Оюутны даатгал",
    sections: [
      { heading: "Хамрагдах хүмүүс", text: "Өмнөд Солонгост суралцаж буй гадаад оюутан" },
      { heading: "Хамрагдах арга", text: "Сургуулиар дамжуулан 6 сар / 1 жилээр бүртгэнэ" },
      { heading: "Давуу тал", text: "Хэвтэх зардлын 90% болон зарим амбулаторийн зардлыг нөхөн төлнө" },
    ],
    details: {
      title: "Оюутны эрүүл мэндийн даатгал",
      content: [
        {
          heading: "Хамрагдах хүмүүс",
          points: [
            "D-2 (их сургуулийн) оюутан → NHI-д автоматаар бүртгэгдэнэ.",
            "D-4-1 (хэлний бэлтгэл) → Эхний 6 сар сургуулийн заавал даатгалд хамрагдана.",
            "Солилцоо болон богино хугацааны оюутан → Сургуулийн даатгал заавал.",
          ],
        },
        {
          heading: "Хамрагдах арга",
          points: [
            "Сургууль/байгууллагаар дамжуулан 6 сар / 1 жилээр нэг дор бүртгэнэ.",
            "6 сар ~60–70 мянган вон, 1 жил ~110–130 мянган вон.",
            "Ихэнх тохиолдолд сургалтын удирдлагатай холбогдон автоматаар тооцогдоно.",
          ],
        },
        {
          heading: "Давуу тал",
          points: [
            "Солонгост байх хугацаанд гарсан эмчилгээний зардлыг хамгаална.",
            "Хэвтэн эмчлүүлэх зардлын 90% (дээд хэмжээ ~1,000,000 вон).",
            "Амбулаторийн 1 удаагийн зардал дээд тал нь 250,000 вон.",
          ],
        },
      ],
    },
  },
  travel: {
    title: "Аялал жуулчлалын эрүүл мэндийн даатгал",
    sections: [
      { heading: "Хамрагдах хүмүүс", text: "NHI-д хамрагдаагүй богино хугацааны зочин" },
      { heading: "Хамрагдах арга", text: "Ирэхээс өмнө, нисэх онгоцны буудал, эсвэл онлайнаар хамрагдана" },
      { heading: "Давуу тал", text: "Аяллын үеийн өвчин, ослын эмчилгээний зардлыг хамгаална" },
    ],
    details: {
      title: "Аялал жуулчлалын эрүүл мэндийн даатгал",
      content: [
        {
          heading: "Хамрагдах хүмүүс",
          points: [
            "C-3 зэрэг 6 сараас бага хугацааны зочин.",
            "NHI-д хамрагдах боломжгүй богино хугацааны иргэд.",
          ],
        },
        {
          heading: "Хамрагдах арга",
          points: [
            "Ирэхээс өмнө онлайнаар эсвэл нисэх буудлын даатгалын цэг дээр хамрагдана.",
            "Дотоодын болон олон улсын компаниуд төрөл бүрийн багц санал болгодог.",
          ],
        },
        {
          heading: "Давуу тал",
          points: [
            "Аяллын үеийн гэнэтийн осол, өвчний яаралтай тусламж.",
            "Яаралтай тусламж, хэвтэн эмчлүүлэх, эмчилгээний зардлын хэсэг/бүгдийг нөхөн төлнө.",
            "Бүтээгдэхүүн бүрийн нөхөлтөөс хамааран хамгаалалтын хэмжээ өөр тул нөхцөлийг заавал шалгана.",
          ],
        },
      ],
    },
  },
};

const insuranceCardsAr = {
  nhi: {
    title: "التأمين الصحي الوطني (NHI)",
    sections: [
      { heading: "الفئة المستهدفة", text: "الأجانب المقيمون في كوريا لأكثر من 6 أشهر" },
      { heading: "طريقة التسجيل", text: "يتم تسجيل الطلاب تلقائيًا (إلزامي)" },
      { heading: "المزايا", text: "مزايا مماثلة للمواطنين، مع دفع ذاتي يقارب 30%" },
    ],
    details: {
      title: "التأمين الصحي الوطني (NHI)",
      content: [
        {
          heading: "الفئة المستهدفة",
          points: [
            "جميع الأجانب الذين يمتلكون بطاقة تسجيل أجنبي ويقيمون لمدة 6 أشهر متواصلة.",
            "طلاب D-2/D-4، العاملون بتأشيرة E، المقيمون بتأشيرة F-6 وغيرهم.",
          ],
        },
        {
          heading: "طريقة التسجيل",
          points: [
            "الطلاب → منذ يوليو 2019 يُسجلون تلقائيًا كأعضاء محليين.",
            "العاملون → ينضمون عبر جهة العمل التي تتحمل جزءًا من الرسوم.",
            "الفريلانس أو غير العاملين → يجب التقديم مباشرة بعد الإقامة 6 أشهر.",
            "متوسط الرسوم حوالي 120,000 وون، والطلاب يحصلون على دعم 50%.",
          ],
        },
        {
          heading: "المزايا",
          points: [
            "مزايا علاجية مماثلة للمواطنين الكوريين.",
            "يدفع الشخص حوالي 30% من تكاليف الزيارة والعلاج والأدوية.",
          ],
        },
      ],
    },
  },
  private: {
    title: "التأمين الصحي الخاص",
    sections: [
      { heading: "الفئة المستهدفة", text: "الأجانب المسجلون في NHI" },
      { heading: "طريقة التسجيل", text: "يتم الاشتراك عبر شركات التأمين الخاصة" },
      { heading: "المزايا", text: "تعويض 70–80% من المبلغ المتبقي بعد NHI" },
    ],
    details: {
      title: "التأمين الطبي الخاص",
      content: [
        {
          heading: "الفئة المستهدفة",
          points: [
            "الأجانب المسجلون في NHI والمقيمون قانونيًا.",
            "يمكن الاشتراك في معظم التأمينات: السرطان، الحوادث، التأمين الشامل.",
            "لا يمكن لمن يحملون تأشيرات قصيرة (سياحة، عطلة عمل) الاشتراك.",
          ],
        },
        {
          heading: "طريقة التسجيل",
          points: [
            "الاشتراك من خلال شركات مثل Samsung Fire وDB Insurance.",
            "تختلف الرسوم حسب العمر ونطاق التغطية.",
            "منذ 2024 تطلب الكثير من الشركات شهادة دفع NHI.",
          ],
        },
        {
          heading: "المزايا",
          points: [
            "تغطية 70–80% من التكاليف المتبقية بعد NHI.",
            "تغطية شاملة للعلاج، الجراحة، التنويم، وغيرها.",
            "تقليل العبء المالي الناتج عن التكاليف الطبية العالية.",
          ],
        },
      ],
    },
  },
  student: {
    title: "تأمين الطلاب الأجانب",
    sections: [
      { heading: "الفئة المستهدفة", text: "الطلاب الأجانب الذين يدرسون في كوريا" },
      { heading: "طريقة التسجيل", text: "يتم التسجيل عبر الجامعة لمدة 6 أشهر أو سنة" },
      { heading: "المزايا", text: "تعويض 90% من نفقات التنويم وبعض نفقات الزيارات" },
    ],
    details: {
      title: "تأمين صحة الطلاب",
      content: [
        {
          heading: "الفئة المستهدفة",
          points: [
            "طلاب الدرجة (D-2) → يسجلون تلقائيًا في NHI.",
            "طلاب اللغة (D-4-1) → يجب الاشتراك في تأمين الجامعة خلال أول 6 أشهر.",
            "طلاب التبادل والطلاب قصيرو المدى → تأمين الجامعة إلزامي.",
          ],
        },
        {
          heading: "طريقة التسجيل",
          points: [
            "التسجيل عبر الجامعة لمدة 6 أشهر أو سنة.",
            "6 أشهر: 60–70 ألف وون / سنة: 110–130 ألف وون.",
            "يتم ربط الدفع غالبًا بالإدارة الأكاديمية تلقائيًا.",
          ],
        },
        {
          heading: "المزايا",
          points: [
            "تغطية التكاليف الطبية خلال الإقامة في كوريا.",
            "تعويض 90% من نفقات التنويم (حد أقصى ~1,000,000 وون).",
            "تعويض حتى 250,000 وون لكل زيارة خارجية.",
          ],
        },
      ],
    },
  },
  travel: {
    title: "تأمين الزوار والسياح",
    sections: [
      { heading: "الفئة المستهدفة", text: "الزوار قصيرو المدى غير المسجلين في NHI" },
      { heading: "طريقة التسجيل", text: "قبل الوصول، أو في المطار، أو عبر الإنترنت" },
      { heading: "المزايا", text: "تغطية تكاليف العلاج خلال الرحلة" },
    ],
    details: {
      title: "تأمين الزوار والسياح",
      content: [
        {
          heading: "الفئة المستهدفة",
          points: [
            "حاملو تأشيرة C-3 وغيرها ممن يقيمون أقل من 6 أشهر.",
            "الأشخاص غير المؤهلين لـNHI.",
          ],
        },
        {
          heading: "طريقة التسجيل",
          points: [
            "التسجيل عبر الإنترنت أو في مكاتب التأمين بالمطار.",
            "شركات محلية وعالمية تقدم خططًا متنوعة.",
          ],
        },
        {
          heading: "المزايا",
          points: [
            "تغطية الطوارئ الناتجة عن الحوادث أو الأمراض المفاجئة أثناء السفر.",
            "تعويض كامل/جزئي عن تكاليف الطوارئ والعلاج والتنويم.",
            "يجب مراجعة الشروط لأن حدود التغطية تختلف حسب الخطة.",
          ],
        },
      ],
    },
  },
};

const baseCountries = {
  "": "Select Country",
  Mongolia: "Mongolia",
  America: "America",
  Vietnam: "Vietnam",
  Russia: "Russia",
  Japan: "Japan",
  China: "China",
  "Middle East": "Middle East",
  Korea: "Korea",
  Other: "Other",
};

const en = {
  locale: "en",
  countries: baseCountries,
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "LOGIN",
    logout: "LOGOUT",
    myPage: "MY PAGE",
    search: "Search",
  },
  header: {
    selectCountry: "Select Country",
    loginTitle: "Login to MediBuddy",
    loginDescription: "Sign in with your Google account to access personalized medical information",
    loginCta: "Continue with Google",
  },
  sidebar: {
    chat: "Chat",
    insurance: "Insurance",
    calendar: "Calendar",
  },
  alerts: {
    loginRequired: "Login is required. Please sign in first.",
  },
  chat: {
    heroSubtitle: [
      "From hospital selection to insurance guidance,",
      "your accurate all-in-one health partner with no language barriers.",
    ],
    chartTitle: "Foreign Visitor Trends",
    aboutLabel: "About",
    aboutHeadline: [
      "International arrivals keep rising,",
      "and healthcare needs a language-free experience.",
    ],
    aboutBody: [
      "Foreign visitor numbers grow every year,",
      "yet access to medical information stays limited.",
      "We build a barrier-free healthcare guide",
      "to support healthier lives for everyone.",
    ],
    statsCards: [
      { title: "Foreign visitors", value: "16.36M+" },
      { title: "Hospitals with language support", value: "5,876+" },
      { title: "Foreign workers lacking info", value: "49.5%" },
    ],
    formPlaceholder: "Please enter your symptoms...",
  },
  hospitalList: {
    totalFound: "We found {{count}} hospitals.",
    listTitle: "Hospital list",
    mapTitle: "Map",
    mapPlaceholder: "Select a hospital to see it on the map",
    mapSelectedPlaceholder: "{{name}} location",
    detailTitle: "Details",
    supportedLanguages: "Supported languages",
    specialties: "Departments",
    phoneLabel: "Tel",
  },
  insurance: {
    title: "Medical Insurance Guide",
    subtitle: "Choose the right insurance plan for your stay in Korea",
    noDetails: "No details available.",
    cards: insuranceCardsEn,
  },
  calendar: {
    monthTitle: "{{year}} {{month}}",
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}",
    tooltipValue: "Visitors: {{value}} million",
    valueUnit: "million",
  },
};

const ko = {
  locale: "ko",
  countries: {
    "": "국가 선택",
    Mongolia: "몽골",
    America: "미국",
    Vietnam: "베트남",
    Russia: "러시아",
    Japan: "일본",
    China: "중국",
    "Middle East": "중동",
    Korea: "한국",
    Other: "기타",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "로그인",
    logout: "로그아웃",
    myPage: "마이페이지",
    search: "검색",
  },
  header: {
    selectCountry: "국가를 선택하세요",
    loginTitle: "MediBuddy 로그인",
    loginDescription: "맞춤형 의료 정보를 이용하려면 Google 계정으로 로그인하세요.",
    loginCta: "Google로 계속하기",
  },
  sidebar: {
    chat: "챗봇",
    insurance: "보험 안내",
    calendar: "캘린더",
  },
  alerts: {
    loginRequired: "로그인이 필요합니다. 먼저 로그인해주세요.",
  },
  chat: {
    heroSubtitle: [
      "병원 선택부터 보험 안내까지,",
      "언어 장벽 없이 정확한 올인원 건강 가이드.",
    ],
    chartTitle: "외국인 방문객 수 추이",
    aboutLabel: "소개",
    aboutHeadline: [
      "꾸준히 늘어나는 외국인 방문객,",
      "언어 장벽 없는 의료 혁신이 필요합니다.",
    ],
    aboutBody: [
      "외국인 방문객 수는 매년 증가하지만,",
      "의료 정보 접근성은 여전히 제한적입니다.",
      "우리는 언어 장벽이 없는 의료 정보 시스템으로",
      "모든 외국인의 건강한 삶을 돕습니다.",
    ],
    statsCards: [
      { title: "외국인 방문객수", value: "1636만 명 +" },
      { title: "외국어 지원 병원 수", value: "5,876개 +" },
      { title: "의료정보 부족 비율", value: "49.5%" },
    ],
    formPlaceholder: "증상을 입력해주세요...",
  },
  hospitalList: {
    totalFound: "총 {{count}}개의 병원을 찾았습니다.",
    listTitle: "병원 목록",
    mapTitle: "지도",
    mapPlaceholder: "병원을 선택하면 지도에 표시됩니다",
    mapSelectedPlaceholder: "{{name}} 위치",
    detailTitle: "상세 정보",
    supportedLanguages: "지원 언어",
    specialties: "진료과",
    phoneLabel: "전화",
  },
  insurance: {
    title: "의료 보험 가이드",
    subtitle: "한국 체류 목적에 맞는 보험을 선택하세요",
    noDetails: "상세 정보가 없습니다.",
    cards: insuranceCardsKo,
  },
  calendar: {
    monthTitle: "{{year}}년 {{month}}",
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}년",
    tooltipValue: "방문객: {{value}}만 명",
    valueUnit: "만 명",
  },
};

const ja = {
  locale: "ja",
  countries: {
    "": "国を選択",
    Mongolia: "モンゴル",
    America: "アメリカ",
    Vietnam: "ベトナム",
    Russia: "ロシア",
    Japan: "日本",
    China: "中国",
    "Middle East": "中東",
    Korea: "韓国",
    Other: "その他",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "ログイン",
    logout: "ログアウト",
    myPage: "マイページ",
    search: "検索",
  },
  header: {
    selectCountry: "国を選択してください",
    loginTitle: "MediBuddy ログイン",
    loginDescription: "パーソナライズされた医療情報を利用するには、Googleアカウントでログインしてください。",
    loginCta: "Googleで続行",
  },
  sidebar: {
    chat: "チャットボット",
    insurance: "保険案内",
    calendar: "カレンダー",
  },
  alerts: {
    loginRequired: "ログインが必要です。先にログインしてください。",
  },
  chat: {
    heroSubtitle: [
      "病院選びから保険案内まで、",
      "言語の壁なしで利用できるオールインワン健康ガイド。",
    ],
    chartTitle: "外国人訪問者数の推移",
    aboutLabel: "紹介",
    aboutHeadline: [
      "増え続ける外国人訪問者、",
      "言語の壁のない医療革新が必要です。",
    ],
    aboutBody: [
      "外国人訪問者数は毎年増加していますが、",
      "医療情報へのアクセスは依然として限られています。",
      "私たちは言語の壁のない医療情報システムで、",
      "すべての外国人の健康的な生活を支援します。",
    ],
    statsCards: [
      { title: "外国人訪問者数", value: "1,636万人 +" },
      { title: "外国語対応病院数", value: "5,876ヶ所 +" },
      { title: "医療情報不足の割合", value: "49.5%" },
    ],
    formPlaceholder: "症状を入力してください...",
  },
  hospitalList: {
    totalFound: "合計 {{count}} 件の病院が見つかりました。",
    listTitle: "病院リスト",
    mapTitle: "地図",
    mapPlaceholder: "病院を選択すると地図に表示されます",
    mapSelectedPlaceholder: "{{name}} の位置",
    detailTitle: "詳細情報",
    supportedLanguages: "対応言語",
    specialties: "診療科",
    phoneLabel: "電話",
  },
  insurance: {
    title: "医療保険ガイド",
    subtitle: "韓国での滞在目的に合った保険を選択してください",
    noDetails: "詳細情報がありません。",
    cards: insuranceCardsJa,
  },
  calendar: {
    monthTitle: "{{year}}年 {{month}}",
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    dayNames: ["日", "月", "火", "水", "木", "金", "土"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}年",
    tooltipValue: "訪問者: {{value}}万人",
    valueUnit: "万人",
  },
};

const ru = {
  locale: "ru",
  countries: {
    "": "Выберите страну",
    Mongolia: "Монголия",
    America: "Америка",
    Vietnam: "Вьетнам",
    Russia: "Россия",
    Japan: "Япония",
    China: "Китай",
    "Middle East": "Ближний Восток",
    Korea: "Корея",
    Other: "Другое",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "ВХОД",
    logout: "ВЫХОД",
    myPage: "МОЯ СТРАНИЦА",
    search: "Поиск",
  },
  header: {
    selectCountry: "Выберите страну",
    loginTitle: "Вход в MediBuddy",
    loginDescription: "Войдите в свой аккаунт Google, чтобы получить доступ к персонализированной медицинской информации",
    loginCta: "Продолжить с Google",
  },
  sidebar: {
    chat: "Чат-бот",
    insurance: "Страхование",
    calendar: "Календарь",
  },
  alerts: {
    loginRequired: "Требуется вход. Пожалуйста, сначала войдите в систему.",
  },
  chat: {
    heroSubtitle: [
      "От выбора больницы до консультаций по страхованию,",
      "ваш точный комплексный медицинский помощник без языковых барьеров.",
    ],
    chartTitle: "Динамика иностранных посетителей",
    aboutLabel: "О нас",
    aboutHeadline: [
      "Количество иностранных посетителей продолжает расти,",
      "и здравоохранению нужен опыт без языковых барьеров.",
    ],
    aboutBody: [
      "Количество иностранных посетителей растет каждый год,",
      "но доступ к медицинской информации остается ограниченным.",
      "Мы создаем медицинский гид без барьеров",
      "для поддержки здоровой жизни всех.",
    ],
    statsCards: [
      { title: "Иностранные посетители", value: "16,36 млн +" },
      { title: "Больницы с языковой поддержкой", value: "5,876 +" },
      { title: "Иностранные работники без информации", value: "49,5%" },
    ],
    formPlaceholder: "Пожалуйста, введите ваши симптомы...",
  },
  hospitalList: {
    totalFound: "Найдено {{count}} больниц.",
    listTitle: "Список больниц",
    mapTitle: "Карта",
    mapPlaceholder: "Выберите больницу, чтобы увидеть её на карте",
    mapSelectedPlaceholder: "Расположение {{name}}",
    detailTitle: "Детали",
    supportedLanguages: "Поддерживаемые языки",
    specialties: "Отделения",
    phoneLabel: "Тел",
  },
  insurance: {
    title: "Руководство по медицинскому страхованию",
    subtitle: "Выберите подходящий план страхования для вашего пребывания в Корее",
    noDetails: "Детали недоступны.",
    cards: insuranceCardsRu,
  },
  calendar: {
    monthTitle: "{{year}} {{month}}",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}",
    tooltipValue: "Посетители: {{value}} млн",
    valueUnit: "млн",
  },
};

const vi = {
  locale: "vi",
  countries: {
    "": "Chọn quốc gia",
    Mongolia: "Mông Cổ",
    America: "Mỹ",
    Vietnam: "Việt Nam",
    Russia: "Nga",
    Japan: "Nhật Bản",
    China: "Trung Quốc",
    "Middle East": "Trung Đông",
    Korea: "Hàn Quốc",
    Other: "Khác",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "ĐĂNG NHẬP",
    logout: "ĐĂNG XUẤT",
    myPage: "TRANG CỦA TÔI",
    search: "Tìm kiếm",
  },
  header: {
    selectCountry: "Chọn quốc gia",
    loginTitle: "Đăng nhập MediBuddy",
    loginDescription: "Đăng nhập bằng tài khoản Google của bạn để truy cập thông tin y tế được cá nhân hóa",
    loginCta: "Tiếp tục với Google",
  },
  sidebar: {
    chat: "Chatbot",
    insurance: "Bảo hiểm",
    calendar: "Lịch",
  },
  alerts: {
    loginRequired: "Yêu cầu đăng nhập. Vui lòng đăng nhập trước.",
  },
  chat: {
    heroSubtitle: [
      "Từ việc chọn bệnh viện đến hướng dẫn bảo hiểm,",
      "đối tác y tế toàn diện chính xác của bạn không có rào cản ngôn ngữ.",
    ],
    chartTitle: "Xu hướng khách nước ngoài",
    aboutLabel: "Về chúng tôi",
    aboutHeadline: [
      "Số lượng khách quốc tế tiếp tục tăng,",
      "và chăm sóc sức khỏe cần trải nghiệm không có rào cản ngôn ngữ.",
    ],
    aboutBody: [
      "Số lượng khách nước ngoài tăng mỗi năm,",
      "nhưng việc tiếp cận thông tin y tế vẫn còn hạn chế.",
      "Chúng tôi xây dựng hướng dẫn chăm sóc sức khỏe không có rào cản",
      "để hỗ trợ cuộc sống khỏe mạnh cho mọi người.",
    ],
    statsCards: [
      { title: "Khách nước ngoài", value: "16,36 triệu +" },
      { title: "Bệnh viện hỗ trợ ngôn ngữ", value: "5,876 +" },
      { title: "Lao động nước ngoài thiếu thông tin", value: "49,5%" },
    ],
    formPlaceholder: "Vui lòng nhập các triệu chứng của bạn...",
  },
  hospitalList: {
    totalFound: "Đã tìm thấy {{count}} bệnh viện.",
    listTitle: "Danh sách bệnh viện",
    mapTitle: "Bản đồ",
    mapPlaceholder: "Chọn bệnh viện để xem trên bản đồ",
    mapSelectedPlaceholder: "Vị trí {{name}}",
    detailTitle: "Chi tiết",
    supportedLanguages: "Ngôn ngữ được hỗ trợ",
    specialties: "Khoa",
    phoneLabel: "Điện thoại",
  },
  insurance: {
    title: "Hướng dẫn Bảo hiểm Y tế",
    subtitle: "Chọn gói bảo hiểm phù hợp cho thời gian lưu trú tại Hàn Quốc",
    noDetails: "Không có chi tiết.",
    cards: insuranceCardsVi,
  },
  calendar: {
    monthTitle: "{{year}} {{month}}",
    monthNames: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    dayNames: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}",
    tooltipValue: "Khách: {{value}} triệu",
    valueUnit: "triệu",
  },
};

const zh = {
  locale: "zh",
  countries: {
    "": "选择国家",
    Mongolia: "蒙古",
    America: "美国",
    Vietnam: "越南",
    Russia: "俄罗斯",
    Japan: "日本",
    China: "中国",
    "Middle East": "中东",
    Korea: "韩国",
    Other: "其他",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "登录",
    logout: "登出",
    myPage: "我的页面",
    search: "搜索",
  },
  header: {
    selectCountry: "选择国家",
    loginTitle: "登录 MediBuddy",
    loginDescription: "使用您的 Google 账号登录以访问个性化医疗信息",
    loginCta: "使用 Google 继续",
  },
  sidebar: {
    chat: "聊天机器人",
    insurance: "保险",
    calendar: "日历",
  },
  alerts: {
    loginRequired: "需要登录。请先登录。",
  },
  chat: {
    heroSubtitle: [
      "从医院选择到保险指导，",
      "您准确的一站式健康伙伴，无语言障碍。",
    ],
    chartTitle: "外国访客趋势",
    aboutLabel: "关于",
    aboutHeadline: [
      "国际访客持续增长，",
      "医疗保健需要无语言障碍的体验。",
    ],
    aboutBody: [
      "外国访客数量每年都在增长，",
      "但医疗信息的获取仍然有限。",
      "我们构建无障碍医疗指南",
      "以支持每个人的健康生活。",
    ],
    statsCards: [
      { title: "外国访客", value: "1636万 +" },
      { title: "支持多语言的医院", value: "5,876 +" },
      { title: "缺乏信息的外国工人", value: "49.5%" },
    ],
    formPlaceholder: "请输入您的症状...",
  },
  hospitalList: {
    totalFound: "找到 {{count}} 家医院。",
    listTitle: "医院列表",
    mapTitle: "地图",
    mapPlaceholder: "选择医院以在地图上查看",
    mapSelectedPlaceholder: "{{name}} 位置",
    detailTitle: "详细信息",
    supportedLanguages: "支持的语言",
    specialties: "科室",
    phoneLabel: "电话",
  },
  insurance: {
    title: "医疗保险指南",
    subtitle: "为您的韩国停留选择正确的保险计划",
    noDetails: "无详细信息。",
    cards: insuranceCardsZh,
  },
  calendar: {
    monthTitle: "{{year}}年 {{month}}",
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    dayNames: ["日", "一", "二", "三", "四", "五", "六"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}年",
    tooltipValue: "访客: {{value}}万",
    valueUnit: "万",
  },
};

const mn = {
  locale: "mn",
  countries: {
    "": "Улс сонгох",
    Mongolia: "Монгол",
    America: "Америк",
    Vietnam: "Вьетнам",
    Russia: "Орос",
    Japan: "Япон",
    China: "Хятад",
    "Middle East": "Ойрхи Дорнод",
    Korea: "Солонгос",
    Other: "Бусад",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "НЭВТРЭХ",
    logout: "ГАРАХ",
    myPage: "МИНИЙ ХУУДАС",
    search: "Хайх",
  },
  header: {
    selectCountry: "Улс сонгох",
    loginTitle: "MediBuddy-д нэвтрэх",
    loginDescription: "Хувийн эрүүл мэндийн мэдээлэл авахын тулд Google дансаараа нэвтэрнэ үү",
    loginCta: "Google-аар үргэлжлүүлэх",
  },
  sidebar: {
    chat: "Чатбот",
    insurance: "Даатгал",
    calendar: "Календарь",
  },
  alerts: {
    loginRequired: "Нэвтрэх шаардлагатай. Эхлээд нэвтэрнэ үү.",
  },
  chat: {
    heroSubtitle: [
      "Эмнэлэг сонгохоос даатгалын зөвлөгөө хүртэл,",
      "хэлний саадгүй нарийвчилсан бүх нэг эрүүл мэндийн түнш.",
    ],
    chartTitle: "Гадаадын зочид буудлын чиг хандлага",
    aboutLabel: "Бидний тухай",
    aboutHeadline: [
      "Олон улсын зочид буудал үргэлж нэмэгдэж байна,",
      "эрүүл мэндийн тусламж үйлчилгээнд хэлний саадгүй туршлага хэрэгтэй.",
    ],
    aboutBody: [
      "Гадаадын зочид буудлын тоо жил бүр нэмэгдэж байна,",
      "гэхдээ эрүүл мэндийн мэдээлэлд хандах нь хязгаарлагдмал хэвээр байна.",
      "Бид саадгүй эрүүл мэндийн хөтөчийг бүтээж байна",
      "хүн бүрийн эрүүл амьдралыг дэмжихийн тулд.",
    ],
    statsCards: [
      { title: "Гадаадын зочид буудал", value: "16.36 сая +" },
      { title: "Хэлний дэмжлэгтэй эмнэлгүүд", value: "5,876 +" },
      { title: "Мэдээлэл дутагдаж буй гадаадын ажилчид", value: "49.5%" },
    ],
    formPlaceholder: "Таны шинж тэмдгүүдийг оруулна уу...",
  },
  hospitalList: {
    totalFound: "{{count}} эмнэлэг олдлоо.",
    listTitle: "Эмнэлгүүдийн жагсаалт",
    mapTitle: "Газрын зураг",
    mapPlaceholder: "Газрын зураг дээр харахын тулд эмнэлэг сонгоно уу",
    mapSelectedPlaceholder: "{{name}} байршил",
    detailTitle: "Дэлгэрэнгүй",
    supportedLanguages: "Дэмжигдсэн хэлүүд",
    specialties: "Тэнхимүүд",
    phoneLabel: "Утас",
  },
  insurance: {
    title: "Эрүүл мэндийн даатгалын хөтөч",
    subtitle: "Солонгост байх хугацаанд зориулсан зөв даатгалын төлөвлөгөөг сонгоно уу",
    noDetails: "Дэлгэрэнгүй мэдээлэл байхгүй.",
    cards: insuranceCardsMn,
  },
  calendar: {
    monthTitle: "{{year}} {{month}}",
    monthNames: [
      "1-р сар",
      "2-р сар",
      "3-р сар",
      "4-р сар",
      "5-р сар",
      "6-р сар",
      "7-р сар",
      "8-р сар",
      "9-р сар",
      "10-р сар",
      "11-р сар",
      "12-р сар",
    ],
    dayNames: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}",
    tooltipValue: "Зочид буудал: {{value}} сая",
    valueUnit: "сая",
  },
};

const ar = {
  locale: "ar",
  countries: {
    "": "اختر البلد",
    Mongolia: "منغوليا",
    America: "أمريكا",
    Vietnam: "فيتنام",
    Russia: "روسيا",
    Japan: "اليابان",
    China: "الصين",
    "Middle East": "الشرق الأوسط",
    Korea: "كوريا",
    Other: "أخرى",
  },
  common: {
    appName: "MediBuddy",
    tagline: "Dr.Kim is Here",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    myPage: "صفحتي",
    search: "بحث",
  },
  header: {
    selectCountry: "اختر البلد",
    loginTitle: "تسجيل الدخول إلى MediBuddy",
    loginDescription: "قم بتسجيل الدخول باستخدام حساب Google الخاص بك للوصول إلى معلومات طبية مخصصة",
    loginCta: "المتابعة مع Google",
  },
  sidebar: {
    chat: "روبوت الدردشة",
    insurance: "التأمين",
    calendar: "التقويم",
  },
  alerts: {
    loginRequired: "يجب تسجيل الدخول. يرجى تسجيل الدخول أولاً.",
  },
  chat: {
    heroSubtitle: [
      "من اختيار المستشفى إلى إرشادات التأمين،",
      "شريكك الصحي الشامل الدقيق بدون حواجز لغوية.",
    ],
    chartTitle: "اتجاهات الزوار الأجانب",
    aboutLabel: "حول",
    aboutHeadline: [
      "الوصولات الدولية تستمر في الارتفاع،",
      "والرعاية الصحية تحتاج إلى تجربة خالية من الحواجز اللغوية.",
    ],
    aboutBody: [
      "أعداد الزوار الأجانب تنمو كل عام،",
      "لكن الوصول إلى المعلومات الطبية يبقى محدودًا.",
      "نبني دليل رعاية صحية خالٍ من الحواجز",
      "لدعم حياة أكثر صحة للجميع.",
    ],
    statsCards: [
      { title: "الزوار الأجانب", value: "16.36 مليون +" },
      { title: "المستشفيات مع دعم اللغة", value: "5,876 +" },
      { title: "العمال الأجانب الذين يفتقرون للمعلومات", value: "49.5%" },
    ],
    formPlaceholder: "يرجى إدخال أعراضك...",
  },
  hospitalList: {
    totalFound: "تم العثور على {{count}} مستشفى.",
    listTitle: "قائمة المستشفيات",
    mapTitle: "الخريطة",
    mapPlaceholder: "اختر مستشفى لرؤيته على الخريطة",
    mapSelectedPlaceholder: "موقع {{name}}",
    detailTitle: "التفاصيل",
    supportedLanguages: "اللغات المدعومة",
    specialties: "الأقسام",
    phoneLabel: "الهاتف",
  },
  insurance: {
    title: "دليل التأمين الطبي",
    subtitle: "اختر خطة التأمين المناسبة لإقامتك في كوريا",
    noDetails: "لا توجد تفاصيل متاحة.",
    cards: insuranceCardsAr,
  },
  calendar: {
    monthTitle: "{{year}} {{month}}",
    monthNames: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    dayNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  },
  visitorChart: {
    tooltipTitle: "{{year}}",
    tooltipValue: "الزوار: {{value}} مليون",
    valueUnit: "مليون",
  },
};

const PENDING_SUFFIX = " (번역필요)";

const addPendingSuffix = (value) => {
  if (typeof value === "string") {
    return value.endsWith(PENDING_SUFFIX) ? value : `${value}${PENDING_SUFFIX}`;
  }
  if (Array.isArray(value)) {
    return value.map((item) => addPendingSuffix(item));
  }
  if (value && typeof value === "object") {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = addPendingSuffix(value[key]);
      return acc;
    }, Array.isArray(value) ? [] : {});
  }
  return value;
};

const createPendingTranslation = () => addPendingSuffix(JSON.parse(JSON.stringify(ko)));

const translations = {
  en,
  ko,
  ja,
  ru,
  vi,
  zh,
  mn,
  ar,
};

export const getLocaleForCountry = (country) => countryLocaleMap[country] || "en";

export const getTranslations = (locale) => translations[locale] || translations.en;

export const formatMessage = (template, replacements = {}) => {
  if (!template) return "";
  return Object.keys(replacements).reduce((acc, key) => {
    const value = replacements[key] ?? "";
    return acc.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value);
  }, template);
};

export const getCountryLabel = (translationsObj, value) => {
  if (!translationsObj || !translationsObj.countries) {
    return value;
  }
  return translationsObj.countries[value] ?? value;
};

export { countryLocaleMap, translations };

