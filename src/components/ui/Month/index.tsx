import React, { useState, useEffect } from "react";
// Asegúrate de importar los componentes estilizados correctamente
import {
  MonthImage,
  TimeCard,
  TimeLabel,
  TimeNumber,
  CountdownContainer,
  Separator,
} from "./styled";
import xmas from "/assets/xmas.webp";
import newyear from "/assets/newyear.png";

type FestiveRange = {
  start: string;
  end: string;
  image: string;
};

const ChileFestives: Record<string, FestiveRange> = {
  xmas: {
    start: "12-01",
    end: "12-24",
    image: xmas,
  },
  newyear: {
    start: "12-25",
    end: "01-01",
    image: newyear,
  },
};

const calcularTiempoRestante = (
  fechaFin: string,
): {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
} | null => {
  const ahora = new Date();
  const añoActual = ahora.getFullYear();
  // Manejar el cambio de año para la festividad de año nuevo
  const añoSiguiente =
    ahora.getMonth() === 11 &&
    ahora.getDate() > parseInt(fechaFin.split("-")[1])
      ? añoActual + 1
      : añoActual;
  const fechaFinal = new Date(`${añoSiguiente}-${fechaFin}T23:59:59`);
  const diferencia = fechaFinal.getTime() - ahora.getTime();

  if (diferencia < 0) {
    return null;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / 1000 / 60) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  return { dias, horas, minutos, segundos };
};

const getImageFestive = (
  fecha: Date,
): [
  string | null,
  { dias: number; horas: number; minutos: number; segundos: number } | null,
] => {
  const actualDate =
    `${fecha.getMonth() + 1}`.padStart(2, "0") +
    "-" +
    `${fecha.getDate()}`.padStart(2, "0");

  for (const festive of Object.values(ChileFestives)) {
    if (actualDate >= festive.start && actualDate <= festive.end) {
      const tiempoRestante = calcularTiempoRestante(festive.end);
      return [festive.image, tiempoRestante];
    }
  }
  return [null, null];
};

export const Month: React.FC = () => {
  const [tiempoRestante, setTiempoRestante] = useState<{
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  } | null>(null);
  const [imageFestive, setImageFestive] = useState<string | null>(null);

  useEffect(() => {
    const actualizarEstado = () => {
      const today = new Date();
      const [image, tiempo] = getImageFestive(today);
      setImageFestive(image);
      setTiempoRestante(tiempo);
    };

    actualizarEstado();
    const timer = setInterval(actualizarEstado, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {imageFestive ? (
        <>
          {" "}
          <div className="w-[100px] ">
            <MonthImage src={imageFestive} alt="Festividad en Chile" />
          </div>
          <CountdownContainer>
            {tiempoRestante && (
              <>
                <TimeCard>
                  <TimeNumber>
                    {tiempoRestante.dias.toString().padStart(2, "0")}
                  </TimeNumber>
                  <TimeLabel>Días</TimeLabel>
                </TimeCard>
                <Separator>:</Separator>
                <TimeCard>
                  <TimeNumber>
                    {tiempoRestante.horas.toString().padStart(2, "0")}
                  </TimeNumber>
                  <TimeLabel>Horas</TimeLabel>
                </TimeCard>
                <Separator>:</Separator>
                <TimeCard>
                  <TimeNumber>
                    {tiempoRestante.minutos.toString().padStart(2, "0")}
                  </TimeNumber>
                  <TimeLabel>Minutos</TimeLabel>
                </TimeCard>
                <Separator>:</Separator>
                <TimeCard>
                  <TimeNumber>
                    {tiempoRestante.segundos.toString().padStart(2, "0")}
                  </TimeNumber>
                  <TimeLabel>Segundos</TimeLabel>
                </TimeCard>
              </>
            )}
          </CountdownContainer>
        </>
      ) : (
        <p>No hay festividades en el rango de fechas actual.</p>
      )}
    </>
  );
};
