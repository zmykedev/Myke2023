import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: rgba(231, 245, 241, 0.8); // Opacidad para efecto de vidrio
  backdrop-filter: blur(10px); // Desenfoque para efecto de vidrio
  color: white;
  padding: 1rem;
  display: flex;
  position: fixed;
  width: 100%; // Asegura que ocupe el ancho del contenedor
  max-width: 1000px; // O el ancho máximo que desees
  margin: 0 auto; // Centra el Header si es más pequeño que el ancho de la ventana
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  border-radius: 8000px;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    width: 100vw;
    border-radius: 0px;
    margin-top: 0rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
  }
  @media (min-width: 1800px) {
    display: flex;
    gap: 5rem;
  }
`;

export const NavLink = styled.a`
  color: #000000;
  text-decoration: none;

  padding: 5px; // Agrega algo de espacio alrededor del texto
  border-radius: 10px; // Radio de borde inicial
  transition: all 0.1s ease-in-out; // Transición suave para el efecto hover

  &:hover {
    padding: 8px;
    color: #831616;
    background-color: rgba(
      255,
      255,
      255,
      0.884
    ); // Color de fondo al hacer hover
    border-radius: 20px; // Aumenta el radio de borde al hacer hover
  }
`;
