import styled from "styled-components";
import "./index.scss";

export const EventLine = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25px;
  background: #a061b6;
  width: 1em;
  height: 0%;
  animation: progress-grow auto linear;
  animation-timeline: scroll(root block);
  animation-range: 0%;

  @media (max-width: 1350px) {
    left: 97%;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;
