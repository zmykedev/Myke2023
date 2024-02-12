import React from "react";


import { Text } from "@/components/ui/Title/styles";
import { StyledStack } from "@/components/ui/Icons/styled";
import { IconPng } from "@/components/ui/Icons/Icons";
import myke from "../../assets/Myke.jpeg";

import "./styles.css";

type StacksProps = {
  isGlowing?: boolean;
};

export const Stack: React.FunctionComponent<StacksProps> = () => {
  return (
    <>
      <div className="flex flex-col p-3 sm:p-0 ml-3 items-center justify-center ">
        {" "}
        {/* <div className="lentes-con-brillo" > */}
        <img className="rounded-full" src={myke} width={260} alt="" />
        {/* </div> */}
        <Text className="font-sans text-text-100" fontSize="3rem">
          Myke Zapata
        </Text>
        <Text className="font-sans  text-text-100" fontSize="1.2rem">
          {" "}
          Software Developer Based in Santiago, Chile <br />
          Transforming lives with a passion for technology. <br />A true lover
          of innovation, dedicated to making a difference.
        </Text>
        <StyledStack className="flex flex-row mt-6">
          <IconPng path="/assets/NodeJs.png" redirect="https://nodejs.org/en" />
          <IconPng
            path="/assets/TypeScript.jpg"
            redirect="https://www.typescriptlang.org/"
          />
          <IconPng path="/assets/React.png" redirect="https://es.react.dev/" />
          <IconPng
            path="/assets/Tailwind.png"
            redirect="https://tailwindcss.com/"
          />
        </StyledStack>
      </div>

      <div className="flex flex-col sm:mt-11  sm:w-[500px] sm:h-full ">
        {" "}
        <div className="">
          <Text
            className="font-sans drop-shadow-2xl flex justify-center sm:justify-start "
            fontSize="3rem"
          >
            <span className="text-red-500">S</span>
            <span className="text-blue-500">t</span>
            <span className="text-green-500">y</span>
            <span className="text-yellow-500">l</span>
            <span className="text-purple-500">e</span>

            <span className="text-pink-500 ">s</span>
          </Text>

          <StyledStack className="flex justify-center sm:justify-start">
            <IconPng
              path="/assets/Css.png"
              redirect="https://developer.mozilla.org/es/docs/Web/CSS"
            />{" "}
            <IconPng
              path="/assets/Scss.png"
              redirect="https://sass-lang.com/"
            />{" "}
            <IconPng
              path="/assets/framer-motion.webp"
              redirect="https://sass-lang.com/"
            />{" "}
          </StyledStack>
        </div>{" "}
        <div className="">
          <Text
            className="font-sans text-white flex justify-center sm:justify-start  drop-shadow-2xl"
            fontSize="3rem"
          >
            Libraries
          </Text>
          <StyledStack className="flex flex-row justify-center sm:justify-start">
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
            <IconPng path="/assets/Lodash.png" redirect="https://lodash.com/" />
          </StyledStack>{" "}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <Text
              className="font-sans text-white drop-shadow-2xl flex justify-center"
              fontSize="3rem"
            >
              MicroFronts
            </Text>
            <StyledStack className="flex  justify-center sm:justify-start">
              <IconPng path="/assets/Bit.webp" redirect="https://bit.dev/" />
              <IconPng
                path="/assets/Spa.png"
                redirect="https://single-spa.js.org/"
              />
            </StyledStack>
          </div>{" "}
          <div>
            <Text
              className="font-sans text-white drop-shadow-2xl flex justify-center "
              fontSize="3rem"
            >
              Cloud
            </Text>
            <StyledStack className="flex justify-center">
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
    </>
  );
};
