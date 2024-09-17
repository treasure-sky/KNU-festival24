import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

// 둥둥 떠다니는 애니메이션 정의
const floatAnimation = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0)" },
});

// 기본 스타일 정의
export const mainPageStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  padding: "1rem",
  fontFamily: vars.font.pyeongChangBold,
});

export const mainPageLogoStyle = style({
  width: "80vw",
  marginTop: "2rem",
});

export const mainPageMainTitleStyle = style({
  wordBreak: "keep-all",
  marginTop: "5vh",
  fontSize: "3.5rem",
  marginBottom: "1rem",
  lineHeight: 1.2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const mainPageSubTitleStyle = style({
  fontSize: "1rem",
  // marginBottom: "1rem",
  fontFamily: vars.font.pyeongChangLight,
  fontWeight: "300",
});

export const mainPageLineUpgalleryViewStyle = style({
  maxWidth: "472px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
  marginTop: "1rem",
  width: "80vw",
  paddingBottom: "2rem",
});

// 공통 섬 스타일 정의
const createIslandStyle = (animationDelay: string) =>
  style({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "1rem",
    marginBottom: "1rem",
    transition: "transform 0.3s ease",
    animation: `${floatAnimation} 4s ease-in-out infinite`,
    animationDelay,
    selectors: {
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  });

export const mainPageMainTitleRowStyle = style({
  display: "flex",
  justifyContent: "space-between", // 글자 간 간격 유지
  width: "100%", // 부모 컨테이너의 전체 너비를 사용하여 간격을 정확히 맞춤
});

export const mainPageIslandTitleStyle = style({
  writingMode: "vertical-rl",
  textOrientation: "upright",
  fontFamily: vars.font.pyeongChangLight,
  fontWeight: "300",
  fontSize: "1rem",
  display: "inline-block",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  color: "black",
  selectors: {
    "&.right": {
      marginLeft: "1rem",
      borderRadius: "1rem 0 0 1rem",
    },
    "&.left": {
      marginRight: "1rem",
      borderRadius: "0 1rem 1rem 0",
    },
  },
});

export const mainPageMapLogoStyle = style({
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  animationDelay: "0.5s",
});

export const mainPageMapStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const mainPageArtistImageStyle= style({
  aspectRatio: "4/3",
  maxWidth: "100%",
  maxHeight: "100%",
});

// 각 섬에 특화된 스타일을 공통 함수로 정의
export const mainPageIslandStyle1 = createIslandStyle("0.5s");
export const mainPageIslandStyle2 = createIslandStyle("0.1s");
export const mainPageIslandStyle3 = createIslandStyle("1.5s");
export const mainPageIslandStyle4 = createIslandStyle("2.0s");
