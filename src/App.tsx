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

import { Month } from "./components/ui/Month";
import Calendar from "./components/ui/Calendar";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <AppWrapper>
      <Header
        sectionRefs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          skills: skillsRef,
          experience: experienceRef,
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
                {/* <IconPng path="/assets/React.png"  />
              <IconPng path="/assets/Tailwind.png" /> */}
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
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/ReactComponents.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Creación de Componentes
            </Text>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/ManageStates.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Manejo de Estados
            </Text>
          </div>
        </MkBox>
        <MkBox position="right" height="300px" className=" flex flex-row gap-4">
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/ManageRoutes.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Enrutamiento
            </Text>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Styles.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Stylization
            </Text>
          </div>
        </MkBox>
           <MkBox position="left" height="300px" >
           <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Integration.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Integración de Servicios
            </Text>
          </div>
        </MkBox>{" "}
        <MkBox position="right" height="300px" background="black">
          new
        </MkBox>
          <MkBox position="right" height="300px" className=" flex flex-row gap-4">
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Arquitecht.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Arquitectura
            </Text>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Security.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Seguridad
            </Text>
          </div>
        </MkBox>
          <MkBox position="left" height="300px" className=" flex flex-row gap-4">
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Optimization.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Optimización
            </Text>
          </div>
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Testing.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Testing
            </Text>
          </div>
        </MkBox>
      <MkBox position="left" height="300px" className=" flex flex-row gap-4">
         
          <div className="rounded-3xl flex flex-col justify-center items-center w-[50%] bg-accent-200 drop-shadow-2xl gap-3">
            <img
              className="bg-accent-200 rounded-3xl"
              width={215}
              alt="country"
              src="/assets/Team.webp"
            />

            <Text className="font-sans  text-text-100" fontSize="1.2rem">
              {" "}
              Team 
            </Text>
          </div>
        </MkBox>
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
