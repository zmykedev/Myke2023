import { useState, useEffect } from "react";
import { DollarContainer, DollarValue, ImageContainer } from "./styled";

const CurrentDollarValue = () => {
  const [dollarValue, setDollarValue] = useState<number | null>(null);

  useEffect(() => {
    const fetchDollarValue = async () => {
      try {
        const response = await fetch("https://www.mindicador.cl/api/dolar");
        const data = await response.json();
        const latestValue = data.serie[0]?.valor;
        setDollarValue(latestValue);
      } catch (error) {
        console.error("Error fetching dollar value:", error);
      }
    };

    fetchDollarValue();
  }, []);

  return (
    <DollarContainer>
      <ImageContainer>
        <img
          className="bg-accent-200 "
          src="/assets/Dollar.png"
          alt="Dollar"
          width={100}
          height={200}
        />
      </ImageContainer>
      {dollarValue !== null ? (
        <DollarValue>${dollarValue.toLocaleString("es-CL")}</DollarValue>
      ) : (
        <p>Cargando...</p>
      )}
    </DollarContainer>
  );
};

export default CurrentDollarValue;
