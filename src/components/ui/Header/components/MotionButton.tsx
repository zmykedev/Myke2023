import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const MotionButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  // Estilos personalizados que no se pueden aplicar directamente con Tailwind
  const customStyles = {
    border: "0 solid",
    boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
    outline: "1px solid rgba(255, 255, 255, 0.5)",
    outlineOffset: "0px",
  };

  // Variants para controlar las animaciones con Framer Motion
  const variants = {
    initial: {
      boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
      outlineColor: "rgba(255, 255, 255, 0.5)",
    },
    hover: {
      border: "1px solid",
      boxShadow:
        "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)",
      outlineColor: "rgba(255, 255, 255, 0)",
      outlineOffset: "15px",
    },
  };

  return (
    <motion.button
      className="btn btn-5 relative overflow-hidden text-white uppercase cursor-pointer font-normal text-base leading-normal my-0 mx-auto block w-auto min-w-0 px-4 py-2 hover:text-decoration-none transition-all duration-1250 ease-out rounded-lg"
      whileHover="hover"
      initial="initial"
      variants={variants}
      style={customStyles}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default MotionButton;
