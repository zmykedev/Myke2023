import { StyledHeader, Nav, NavLink } from "./styled";

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Nav>
        <NavLink href="#about">Home</NavLink>
        <NavLink href="#projects">Sobre mi</NavLink>
        <NavLink href="#contact">Proyectos</NavLink>
        <NavLink href="#contact">Skills</NavLink>
        <NavLink href="#contact">Experiencia</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </Nav>
    </StyledHeader>
  );
};
