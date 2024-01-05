import styled from "styled-components";

interface BoxStyles {
  height?: string;
  background?: string;
  color?: string;
  width?: string;
  position?: "left" | "right";
  animationProps?: {
    timeline?: string;
    range?: string;
    duration?: string;
    timingFunction?: string;
    fillMode?: string;
    animationName?: string;
    animationStyles?: string;
  };
}

export const Box = styled.div<BoxStyles>`
  height: ${({ height }) => height ?? "auto"};
  color: ${({ color }) => color ?? "inherit"};
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  box-sizing: border-box;
  transition: width 1s ease;

  ${({ position }) =>
    position === "left"
      ? `
    float: left;
    
    clear: left;
   
  `
      : `
    float: right;
    clear: right;
   
  `}

  @media (min-width: 1350px) {
    width: 48%;
  }

  ${({ animationProps }) =>
    animationProps
      ? `
       animation: ${animationProps.animationName} ${animationProps.duration} ${animationProps.timingFunction} ${animationProps.fillMode};
        animation-timeline: ${animationProps.timeline};
        animation-range: ${animationProps.range};
      `
      : `
       
      `}
`;
