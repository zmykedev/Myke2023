import { ReactNode } from "react";
import { Content } from "./styledContent";

interface ContentProps {
  children: ReactNode;
}

export const AppWrapper: React.FunctionComponent<ContentProps> = ({
  children,
}) => {
  return <>{children} </>;
};

export const Main: React.FunctionComponent<ContentProps> = ({ children }) => {
  return <Content>{children} </Content>;
};
