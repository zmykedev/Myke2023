import React from "react";
import { Box } from "./styled";
import { BoxProps } from "./types";

export const MkBox: React.FunctionComponent<BoxProps> = ({
  children,
  height,
  position,
  width,
  color,
  background,
  animationProps,
  className,
}) => {
  return (
    <Box
      height={height}
      position={position}
      className={className}
      width={width}
      color={color}
      background={background}
      animationProps={animationProps}
    >
      {children}
    </Box>
  );
};
