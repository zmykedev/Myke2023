import styled from "styled-components";

export const Wrap = styled.header``;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem; // Reducir el espacio entre elementos para móviles

  @media (min-width: 768px) {
    gap: 4rem; // Aumentar el espacio para pantallas más grandes
  }

  @media (min-width: 1800px) {
    gap: 5rem; // Ajustar aún más el espacio para pantallas muy grandes
  }
`;
