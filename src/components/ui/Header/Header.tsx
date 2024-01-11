import { StyledHeader, Nav, NavLink } from "./styled";
interface HeaderProps {
  sectionRefs: {
    home: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    skills: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    testimonials: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  sectionRefs,
}) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -100;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <StyledHeader>
      <Nav>
        <NavLink onClick={() => scrollToSection(sectionRefs.home)}>
          Home
        </NavLink>
        <NavLink onClick={() => scrollToSection(sectionRefs.about)}>
          My Stack
        </NavLink>
        <NavLink onClick={() => scrollToSection(sectionRefs.skills)}>
          Skills
        </NavLink>
        <NavLink onClick={() => scrollToSection(sectionRefs.projects)}>
          Proyectos
        </NavLink>
        <NavLink onClick={() => scrollToSection(sectionRefs.testimonials)}>
          Testimonios
        </NavLink>
        <NavLink onClick={() => scrollToSection(sectionRefs.contact)}>
          Contacto
        </NavLink>
      </Nav>
    </StyledHeader>
  );
};
