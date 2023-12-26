import React, { useState, useEffect } from "react";
// Asegúrate de importar los componentes estilizados correctamente
import {
  MonthImage,
  TimeLabel,
  TimeNumber,
  TimeCard,
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
  const [timeLeft, setTiempoRestante] = React.useState<{
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  } | null>(null);
  const [imageFestive, setImageFestive] = useState<string | null>(null);

  useEffect(() => {
    const actualizarEstado = () => {
      const today = new Date();
      const [image, time] = getImageFestive(today);
      setImageFestive(image);
      setTiempoRestante(time);
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
          <div className="w-[200px] ">
            <MonthImage src={imageFestive} alt="Festividad en Chile" />
          </div>
          <div className="w-[90%] h-[30%] mb-5   flex flex-row gap-1 justify-center">
            <TimeCard>
              <TimeNumber>{String(timeLeft?.dias).padStart(2, "0")}</TimeNumber>
              <TimeLabel>Días</TimeLabel>
            </TimeCard>
            <Separator>:</Separator>
            <TimeCard>
              <TimeNumber>
                {String(timeLeft?.horas).padStart(2, "0")}
              </TimeNumber>
              <TimeLabel>Horas</TimeLabel>
            </TimeCard>
            <Separator>:</Separator>
            <TimeCard>
              <TimeNumber>
                {String(timeLeft?.minutos).padStart(2, "0")}
              </TimeNumber>
              <TimeLabel>Mins</TimeLabel>
            </TimeCard>
            <Separator>:</Separator>
            <TimeCard>
              <TimeNumber>
                {String(timeLeft?.segundos).padStart(2, "0")}
              </TimeNumber>
              <TimeLabel>Segs</TimeLabel>
            </TimeCard>
          </div>
        </>
      ) : (
        <p>No hay festividades en el rango de fechas actual.</p>
      )}
    </>
  );
};
