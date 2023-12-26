import React from "react";
import { Box } from "./styled";
import { BoxProps } from "./types";

export const MkBox = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const {
      children,
      height,
      position,
      width,
      color,
      background,
      animationProps,
      className,
    } = props;

    return (
      <Box
        ref={ref}
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
  },
);

MkBox.displayName = "MkBox";
