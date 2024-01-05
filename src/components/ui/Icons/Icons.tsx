import React from "react";
import { StyledIcon } from "./styled";

interface IconProps {
  path: string;
  className?: string;
  borderRadius?: string;
  redirect?: string;
  width?: string;
  height?: string;
}

export const IconPng: React.FunctionComponent<IconProps> = ({
  path,
  className,
  borderRadius,
  redirect,
  width,
  height,
}) => {
  const handleClick = () => {
    if (redirect) {
      window.open(redirect, "_blank");
    }
  };

  return (
    <StyledIcon
      src={path}
      borderRadius={borderRadius}
      className={className}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};
