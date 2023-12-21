import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Temperature = styled.div`
  font-family: sans-serif;
  color: white;
  font-size: 4rem;
  text-shadow:
    3px 3px 0px rgba(0, 0, 0, 0.8),
    4px 4px 0px rgba(0, 0, 0, 0.7),
    5px 5px 0px rgba(0, 0, 0, 0.6),
    6px 6px 0px rgba(0, 0, 0, 0.5),
    7px 7px 0px rgba(0, 0, 0, 0.4),
    8px 8px 0px rgba(0, 0, 0, 0.3),
    9px 9px 25px rgba(0, 0, 0, 0.25);
`;

export const TitleContainer = styled.div`
  height: 20%;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-shadow:
    3px 3px 0px rgba(0, 0, 0, 0.8),
    4px 4px 0px rgba(0, 0, 0, 0.7),
    5px 5px 0px rgba(0, 0, 0, 0.6),
    6px 6px 0px rgba(0, 0, 0, 0.5),
    7px 7px 0px rgba(0, 0, 0, 0.4),
    8px 8px 0px rgba(0, 0, 0, 0.3),
    9px 9px 25px rgba(0, 0, 0, 0.25);
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Alinea los elementos internos en el eje vertical
`;

export const WeatherImage = styled.img`
  /* position: absolute;
  bottom: 40px;
  right: 40px; */
  width: 70px;
  height: auto;
`;
