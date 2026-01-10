import { 
  SCalendar,
  STitle,
  SBlock,
  SNav,
  SMonth,
  SNavActions,
  SNavAction,
  SContent,
  SWeekdays,
  SWeekday,
  SCells,
  SCell,
  SPeriod,
  SPeriodText
} from "./MyCalemdat.styled";
import { useState } from "react";

export function MyCalendar({ value, onChange }) {
  const initialDate =
    value instanceof Date
      ? value
      : value
      ? new Date(value)
      : new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("ru-RU", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    setCurrentDate(d);
  };

  const nextMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    setCurrentDate(d);
  };

  const firstDay = new Date(year, month, 1);
  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < startDay; i++) {
    cells.push({ day: "", other: true });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, other: false });
  }

  const selectedDate =
    value instanceof Date
      ? value
      : value
      ? new Date(value)
      : null;

  return (
    <SCalendar>
      <STitle>Даты</STitle>

      <SBlock>
        <SNav>
          <SMonth>{monthName}</SMonth>

          <SNavActions>
            <SNavAction onClick={prevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11">
                <path d="M5.7 1.95c.36-.33.36-.87 0-1.2-.36-.33-.95-.33-1.32 0L.53 4.33c-.7.65-.7 1.7 0 2.34l3.85 3.58c.37.33.96.33 1.32 0 .36-.33.36-.87 0-1.2L1.88 5.5 5.7 1.95z" />
              </svg>
            </SNavAction>

            <SNavAction onClick={nextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11">
                <path d="M.27 9.05c-.36.33-.36.87 0 1.2.36.33.95.33 1.32 0l3.88-3.58c.7-.65.7-1.7 0-2.34L1.59.75c-.36-.33-.95-.33-1.32 0-.36.33-.36.87 0 1.2L4.12 5.5.27 9.05z" />
              </svg>
            </SNavAction>
          </SNavActions>
        </SNav>

        <SContent>
          <SWeekdays>
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((d) => (
              <SWeekday key={d}>{d}</SWeekday>
            ))}
          </SWeekdays>

          <SCells>
            {cells.map((cell, i) => {
              const dateObj = new Date(year, month, cell.day);

              const isToday =
                !cell.other &&
                dateObj.toDateString() === new Date().toDateString();

              const isActive =
                selectedDate &&
                !cell.other &&
                selectedDate.toDateString() === dateObj.toDateString();

              return (
                <SCell
                  key={i}
                  $other={cell.other}
                  $current={isToday}
                  $active={isActive}
                  onClick={() => !cell.other && onChange(dateObj)}
                >
                  {cell.day}
                </SCell>
              );
            })}
          </SCells>
        </SContent>

        <SPeriod>
          <SPeriodText>
            Срок исполнения:{" "}
            <span>
              {(selectedDate || currentDate).toLocaleDateString("ru-RU")}
            </span>
          </SPeriodText>
        </SPeriod>
      </SBlock>
    </SCalendar>
  );
}