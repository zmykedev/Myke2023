import React, { ReactNode } from "react";
import { Content } from "./styledContent";

interface ContentProps {
  children: ReactNode;
}

export const AppWrapper: React.FunctionComponent<ContentProps> = ({
  children,
}) => {
  return <>{children} </>;
};

export const Main = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children }, ref) => {
    return <Content ref={ref}>{children}</Content>;
  },
);
