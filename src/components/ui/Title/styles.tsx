import styled from "styled-components";
import "../../../animations/keyframes.scss";

interface CustomTextProps {
  fontSize?: string;
  animationName?: string;
  duration?: string;
  timingFunction?: string;
  fillMode?: string;
  typeWritter?: boolean;
  typingSteps?: number;
  typingDuration?: string;
}

export const Text = styled.p<CustomTextProps>`
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
`;
