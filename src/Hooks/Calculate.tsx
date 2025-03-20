import { useMemo, useState } from "react";

type CalculateProps = {
  setDay: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  day: number;
  month: number;
  year: number;
  Years: number | null;
  Months: number | null;
  Days: number | null;
  errorDay: string | null;
  errorMonth: string | null;
  errorYear: string | null;
  error: void;
};

function useCalculate(): CalculateProps {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [errorDay, setErrorDay] = useState<string | null>(null);
  const [errorMonth, setErrorMonth] = useState<string | null>(null);
  const [errorYear, setErrorYear] = useState<string | null>(null);

  const now = new Date();

  const error = useMemo(() => {
    if (month < 0 || month > 12) {
      setErrorMonth("Must be a validad month");
      return;
    }
    if (day < 0 || day > 31) {
      setErrorDay("Must be valid day");
      return;
    }
    if (year > now.getFullYear()) {
      setErrorYear("Must be in the past");
      return;
    }
    setErrorMonth(null);
    setErrorDay(null);
    setErrorYear(null);
  }, [day, month, year]);

  const Years = useMemo(
    () => (errorYear ? null : now.getFullYear() - year),
    [year, errorYear]
  );
  const Months = useMemo(
    () => (errorMonth ? null : now.getMonth() + 1 - month),
    [month, errorMonth]
  );
  const Days = useMemo(
    () => (errorDay ? null : now.getDate() + day),
    [day, errorDay]
  );

  return {
    setDay,
    setMonth,
    setYear,
    day,
    month,
    year,
    Years,
    Months,
    Days,
    errorDay,
    errorMonth,
    errorYear,
    error,
  };
}

export default useCalculate;
