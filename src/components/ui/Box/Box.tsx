import React from "react";
import { Box } from "./styled";
import { BoxProps } from "./types";

export const MkBox = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const {
      children,
      height,
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
