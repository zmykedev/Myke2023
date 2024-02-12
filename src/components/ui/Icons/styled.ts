import styled from "styled-components";

interface StyledProps {
  borderRadius?: string;
  height?: string;
  width?: string;
}

export const StyledIcon = styled.img<StyledProps>`
  border-radius: 10px;
  padding: 0.3rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  animation: hoverAnimation 0.5s ease-in-out infinite alternate;
  height: ${(props) => props.height ?? "70px"};
  width: ${(props) => props.width ?? "70px"};

  &:hover {
    cursor: pointer;
    animation-name: moveSideways;
  }

  @keyframes moveSideways {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }
`;

export const StyledStack = styled.div`
  padding: 8px;
  gap: 1rem;
  transition: gap 1s ease;
`;
