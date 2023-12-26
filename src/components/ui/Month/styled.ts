import styled from "styled-components";

export const MonthImage = styled.img``;

export const TimeNumber = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3px 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  font-size: 1.5em;
  font-weight: bold;
`;

export const Separator = styled.span`
  font-size: 2em;
`;

export const TimeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3; // Cambia el color de fondo según tu diseño
  border-radius: 8px; // Ajusta el radio del borde según tu preferencia
  padding: 8px;
  width: 50px; // Ancho fijo que solicitaste
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TimeLabel = styled.div`
  font-size: 1rem; // Ajusta el tamaño de la fuente según necesites
  color: black;
`;
