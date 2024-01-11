import { useRef } from "react";

import { Header } from "./components/ui/Header/Header";
import { AppWrapper, Main } from "./components/ui/Content/content";
import { MkBox } from "./components/ui/Timeline/Box/Box";
import { Text } from "./components/ui/Title/styles";
import { WeatherComponent } from "./components/ui/Wheater";

import "./index.css";
import { EventLine } from "./components/ui/Timeline/styled";
import myke from "/assets/Myke.jpeg";
import "./components/ui/Timeline/index.scss";
// import { slideEliptic } from "./animations/library";
import { IconPng } from "./components/ui/Icons/Icons";
import { StyledStack } from "./components/ui/Icons/styled";
import { Flip } from "./components/Flip";

import { Month } from "./components/ui/Month";
import Calendar from "./components/ui/Calendar";
// import { useParallax } from 'react-scroll-parallax';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const creationComponents = (
    <>
      <img
        className="bg-accent-200 rounded-3xl"
        width={215}
        alt="country"
        src="/assets/ReactComponents.webp"
      />
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Creación de Componentes
      </Text>
    </>
  );

  const listComponents = (
    <>
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Creación de Componentes
      </Text>
      <ul className="list-inside text-start text-white">
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          100% Escalables
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          TypeScript Sólido
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Enfoque en Accesibilidad
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Optimización de Rendimiento
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Props Dinamicos y Personalizables
        </Text>
      </ul>
    </>
  );

  const manageStates = (
    <>
      {" "}
      <img
        className="bg-accent-200 rounded-3xl"
        width={215}
        alt="country"
        src="/assets/ManageStates.webp"
      />
      <Text className="font-sans text-text-100 " fontSize="1.2rem">
        {" "}
        Gestión de Estados
      </Text>
    </>
  );

  const listStates = (
    <>
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Gestión de Estados
      </Text>
      <ul className="list-inside text-start text-white">
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Uso de Reducer
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Evitar uso de useState
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Pruebas Rigurosas
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Uso de useMemo y useCallback
        </Text>
      </ul>
    </>
  );

  const services = (
    <>
      {" "}
      <img
        className="bg-accent-200 rounded-3xl"
        width={215}
        alt="country"
        src="/assets/Integration.webp"
      />
      <Text className="font-sans  text-text-100 " fontSize="1.2rem">
        {" "}
        Integración de Servicios
      </Text>
    </>
  );

  const listRouter = (
    <>
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Integración de Servicios
      </Text>
      <ul className="list-inside text-start text-white">
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Uso de TanStack Query
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          useQuery y useMutation
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Gestión de Cache
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Refetching y Polling
        </Text>
      </ul>
    </>
  );

  const stylization = (
    <>
      {" "}
      <img
        className="bg-accent-200 rounded-3xl"
        width={215}
        alt="country"
        src="/assets/Styles.webp"
      />
      <Text className="font-sans  text-text-100 " fontSize="1.2rem">
        {" "}
        Estilización Avanzada
      </Text>
    </>
  );

  const stylesList = (
    <>
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Estilización Avanzada
      </Text>
      <ul className="list-inside text-start text-white">
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Integracion de Tailwind-CSS
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Diseño Responsivo
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Animaciones y Transiciones
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Styled-Components o Emotion
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Preprocesador SASS
        </Text>
      </ul>
    </>
  );

  const team = (
    <>
      {" "}
      <img
        className="bg-accent-200 rounded-3xl"
        width={215}
        alt="country"
        src="/assets/Team.webp"
      />
      <Text className="font-sans  text-text-100 " fontSize="1.2rem">
        {" "}
        Team Building
      </Text>
    </>
  );

  const teamList = (
    <>
      <Text className="font-sans text-text-100" fontSize="1.2rem">
        Team Building
      </Text>
      <ul className="list-inside text-start text-white">
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Daily Collaboration
        </Text>

        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Pair Programming
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Sesiones de Brainstorming
        </Text>
        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Feedback Constructivo
        </Text>

        <Text className="font-sans text-text-100" fontSize="1.050rem">
          Promover un Ambiente Inclusivo
        </Text>
      </ul>
    </>
  );

  // const { ref } = useParallax({ speed: 10 });

  const handleGo = () => {
    window.open("https://sucursalvirtual.ccc.cl/");
  };

  return (
    <AppWrapper>
      <Header
        sectionRefs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          skills: skillsRef,
          testimonials: testimonialRef,
          contact: contactRef,
        }}
      />
      <Main>
        <EventLine />
        <MkBox
          ref={homeRef}
          position="right"
          height="300px"
          className=" flex flex-row gap-4"
        >
          <div className="rounded-3xl w-[50%] bg-accent-200 ">
            <Calendar />{" "}
          </div>

          <div className="rounded-3xl w-[50%] bg-accent-200 flex justify-center items-center flex-col ">
            <Month />
          </div>
        </MkBox>
        <MkBox position="left" height="300px" className=" flex flex-row gap-4">
          <div className="rounded-3xl flex justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl">
            <img
              className="bg-accent-200 "
              width={200}
              alt="country"
              src="/assets/Chilean.png"
            />
          </div>
          <div className="rounded-3xl w-[50%] bg-accent-200 ">
            <WeatherComponent />
          </div>
        </MkBox>
        <MkBox
          ref={aboutRef}
          position="left"
          className="bg-primary-100"
          height="600px"
        >
          <div className="flex flex-col items-center justify-center ">
            <img className="rounded-full" src={myke} width={300} alt="" />
            <Text className="font-sans text-text-100" fontSize="3rem">
              Myke Zapata
            </Text>

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Software Developer Based in Santiago, Chile
            </Text>
            <StyledStack className="mt-3">
              <IconPng
                path="/assets/NodeJs.png"
                redirect="https://nodejs.org/en"
              />
              <IconPng
                path="/assets/TypeScript.jpg"
                redirect="https://www.typescriptlang.org/"
              />
              <IconPng
                path="/assets/React.png"
                redirect="https://es.react.dev/"
              />
              <IconPng
                path="/assets/Tailwind.png"
                redirect="https://tailwindcss.com/"
              />
            </StyledStack>
          </div>
        </MkBox>
        <MkBox
          position="right"
          height="600px"
          className="bg-primary-100  lg:block"
        >
          <div className="flex flex-col start gap-12 pl-5">
            <div className="">
              <Text className="font-sans drop-shadow-2xl" fontSize="3rem">
                <span className="text-red-500">S</span>
                <span className="text-blue-500">t</span>
                <span className="text-green-500">y</span>
                <span className="text-yellow-500">l</span>
                <span className="text-purple-500">e</span>

                <span className="text-pink-500 ">s</span>
              </Text>

              <StyledStack>
                <IconPng
                  path="/assets/Css.png"
                  redirect="https://developer.mozilla.org/es/docs/Web/CSS"
                />
                <IconPng
                  path="/assets/Scss.png"
                  redirect="https://sass-lang.com/"
                />
              </StyledStack>
            </div>{" "}
            <div className="">
              <Text
                className="font-sans text-white drop-shadow-2xl"
                fontSize="3rem"
              >
                Libraries
              </Text>
              <StyledStack>
                <IconPng
                  path="/assets/TanStack.jpg"
                  redirect="https://tanstack.com/"
                />
                <IconPng
                  path="/assets/Styled.png"
                  redirect="https://styled-components.com/"
                />
                <IconPng
                  path="/assets/Prettier.png"
                  redirect="https://prettier.io/"
                />
                <IconPng
                  path="/assets/Lodash.png"
                  redirect="https://lodash.com/"
                />
              </StyledStack>{" "}
            </div>
            <div className="flex flex-row gap-12">
              <div>
                <Text
                  className="font-sans text-white drop-shadow-2xl"
                  fontSize="3rem"
                >
                  MicroFronts
                </Text>
                <StyledStack className="self-end">
                  <IconPng
                    path="/assets/Bit.webp"
                    redirect="https://bit.dev/"
                  />
                  <IconPng
                    path="/assets/Spa.png"
                    redirect="https://single-spa.js.org/"
                  />
                </StyledStack>
              </div>{" "}
              <div>
                <Text
                  className="font-sans text-white drop-shadow-2xl"
                  fontSize="3rem"
                >
                  Cloud
                </Text>
                <StyledStack>
                  <IconPng
                    path="/assets/Amazon.png"
                    redirect="https://aws.amazon.com/es/"
                  />
                  <IconPng
                    path="/assets/Azure.png"
                    redirect="https://azure.microsoft.com/es-mx/"
                  />
                </StyledStack>{" "}
              </div>{" "}
            </div>
          </div>
        </MkBox>
        <MkBox
          ref={skillsRef}
          position="left"
          height="300px"
          className=" flex flex-row gap-4"
        >
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <Flip front={creationComponents} back={listComponents} />
          </div>
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <Flip front={manageStates} back={listStates} />
          </div>
        </MkBox>
        <MkBox
          position="right"
          height="300px"
          className=" flex flex-row gap-4 "
        >
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <Flip front={services} back={listRouter} />
          </div>
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <Flip front={stylization} back={stylesList} />
          </div>
        </MkBox>
        <MkBox position="right" height="300px" className=" flex flex-row gap-4">
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Arquitecht.webp"
            />

            <Text className="font-sans  text-text-100 " fontSize="1.2rem">
              {" "}
              Arquitectura
            </Text>
          </div>
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Security.webp"
            />

            <Text className="font-sans  text-text-100 " fontSize="1.2rem">
              {" "}
              Seguridad
            </Text>
          </div>
        </MkBox>
        <MkBox position="left" height="300px" className=" flex flex-row gap-4">
          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <Flip front={team} back={teamList} />
          </div>

          <div className=" rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Testing.webp"
            />

            <Text className="font-sans  text-text-100 " fontSize="1.2rem">
              {" "}
              Testing
            </Text>
          </div>
        </MkBox>
        <MkBox ref={projectsRef} position="left" height="300px">
          <div
            onClick={handleGo}
            className="cursor-pointer rounded-3xl flex flex-col justify-center items-center bg-emerald-800 drop-shadow-2xl gap-3"
          >
            <img
              className="p-5 rounded-3xl"
              width={300}
              alt="stickers"
              src="/assets/stickers.png"
            />
          </div>
        </MkBox>
        <MkBox position="right" height="300px" background="black">
          <div
            onClick={handleGo}
            className="cursor-pointer rounded-3xl flex flex-col justify-center items-center bg-emerald-800 drop-shadow-2xl gap-3"
          >
            <img
              className="p-2 m-16 rounded-3xl"
              width={300}
              alt="integra"
              src="/assets/ccc.png"
            />
          </div>
        </MkBox>{" "}
        <MkBox
          ref={testimonialRef}
          position="right"
          height="500px"
          background="black"
        >
          <div className="cursor-pointer rounded-3xl flex flex-row justify-start items-center p-10 bg-primary-100 drop-shadow-2xl gap-3">
            <img
              className="rounded-3xl"
              width={80}
              alt="integra"
              src="/assets/ccc.png"
            />
            <Text className="font-sans  text-text-100 " fontSize="1.2rem">
              Maikol es un desarrollador frontend excepcional, especializado en
              React y TypeScript. Su habilidad para crear interfaces web
              interactivas y de alta calidad es notable. Destaca por su enfoque
              en la usabilidad y accesibilidad, asegurando que cada aplicación
              sea inclusiva y eficiente. Es un colaborador ejemplar, siempre
              dispuesto a compartir su conocimiento y contribuir al equipo. Su
              pasión y dedicación lo convierten en un activo invaluable en
              cualquier proyecto de desarrollo web.
            </Text>
          </div>
        </MkBox>
        <MkBox position="left" height="300px" background="black">
          <div className="cursor-pointer rounded-3xl flex flex-col justify-center items-center bg-primary-100 drop-shadow-2xl gap-3">
            <img></img>
            <div></div>
          </div>
        </MkBox>
        <MkBox position="right" height="300px" background="black">
          new
        </MkBox>{" "}
        <MkBox position="right" height="300px" background="black">
          new
        </MkBox>{" "}
        <MkBox position="right" height="300px" background="black">
          new
        </MkBox>{" "}
        <MkBox position="right" height="300px" background="black">
          new
        </MkBox>
      </Main>
    </AppWrapper>
  );
}

export default App;
