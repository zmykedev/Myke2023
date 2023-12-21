import React from 'react';
import { Year, Day, CalendarContainer, Month } from './styled';


enum MonthNames {
  Enero = 1,
  Febrero = 2,
  Marzo= 3,
  Abril=4,
  Mayo=5,
  Junio=6,
  Julio=7,
  Agosto=8,
  Septiembre=9,
  Octubre=10,
  Noviembre=11,
  Diciembre=12
}


function getMonthName(monthNumber: number): string {
  return MonthNames[monthNumber];
}


// Componente Calendar
const Calendar: React.FunctionComponent = () => {
  const currentDate = new Date(); // Obtiene la fecha actual

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Enero es 0!
  const year = currentDate.getFullYear();

  return (
      <CalendarContainer>
      <Day>
        {day}
      </Day>
      <Month>
         de {getMonthName(month)}
      </Month>
      <Year>
         {year}
      </Year>
    </CalendarContainer>
  );
};

export default Calendar;
