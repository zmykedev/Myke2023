export interface BoxProps {
  className?: string;
  height?: string;
  children?: React.ReactNode;
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
  ref?: React.RefObject<HTMLDivElement>;
}

export interface AnimationProps {
  timeline?: string;
  range?: string;
  animationName?: string;
}
