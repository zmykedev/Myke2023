import { Wrap, Nav } from "./styled";
import { MotionButton } from "./components/MotionButton";
import { User, Folder, MessageCircle, MailIcon, StarIcon } from "lucide-react";

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
    if (ref?.current) {
      const yOffset = -100;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Wrap className="fixed bg-blue-500 bg-opacity-90 backdrop-blur-lg p-4 z-10 inset-x-0 top-0 flex justify-around items-center w-full">
      {/* <MotionButton onClick={() => scrollToSection(sectionRefs.home)}>
    Home
      </MotionButton> */}
      {/* <NavLink onClick={() => scrollToSection(sectionRefs.home)}>
          Home
        </NavLink> */}
      <MotionButton onClick={() => scrollToSection(sectionRefs.home)}>
        <div className="flex justify-between gap-2">
          <User className="icon" />
          <span className="hidden sm:flex">Stack</span>
        </div>
      </MotionButton>
      <MotionButton onClick={() => scrollToSection(sectionRefs.skills)}>
        <div className="flex justify-between gap-2">
          <StarIcon className="icon" />
          <span className="hidden sm:flex">Skills</span>
        </div>
      </MotionButton>
      <MotionButton onClick={() => scrollToSection(sectionRefs.projects)}>
        <div className="flex justify-between gap-2">
          <Folder className="icon" />
          <span className="hidden sm:flex">Proyects</span>
        </div>
      </MotionButton>
      <MotionButton onClick={() => scrollToSection(sectionRefs.testimonials)}>
        <div className="flex justify-between gap-2">
          <MessageCircle className="icon" />
          <span className="hidden sm:flex">Testimony</span>
        </div>
      </MotionButton>
      <MotionButton onClick={() => scrollToSection(sectionRefs.contact)}>
        <div className="flex justify-between gap-2">
          <MailIcon className="icon" />
          <span className="hidden sm:flex">Contact</span>
        </div>
      </MotionButton>
    </Wrap>
  );
};
