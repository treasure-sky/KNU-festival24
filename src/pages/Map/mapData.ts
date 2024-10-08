export const PLACE = ["60주년기념관", "함인섭광장", "대운동장", "미래광장"] as const;
export type Place = (typeof PLACE)[number];

export const PLACE_INFO = {
  "60주년기념관": [
    "60주년기념관에는 주점과 푸드트럭이 위치해 있습니다.",
    "테이블 위치는 1, 2, 3 구역입니다.",
    "",
    "주점 운영: 9.23(월) ~ 9.26(목) 18:00 ~ 1:00",
    "주류 판매 시간: 18:00 ~ 23:30",
  ],
  함인섭광장: [
    "함인섭광장에는 푸드트럭과 부스가 위치해 있습니다.",
    "",
    "부스 운영: 9.23(월) ~ 9.25(수) 11:00 ~ 17:00",
  ],
  대운동장: [
    "운동장에는 푸드트럭과 부스, MAIN STAGE가 위치해 있습니다.",
    "",
    "MAIN STAGE는 강원대생 중,",
    "팔찌 소지자부터 입장가능합니다.",
  ],
  미래광장: [
    "미래광장에는 주점과 푸드트럭이 위치해 있습니다.",
    "",
    "부스 운영: 9.23(월) ~ 9.25(수) 11:00 ~ 17:00",
    "주점 운영: 9.23(월) ~ 9.26(목) 18:00 ~ 00:00",
    "주류 판매 시간: 18:00 ~ 23:30",
  ],
};
