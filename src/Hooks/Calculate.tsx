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
  error: string | null;
};

function useCalculate(): CalculateProps {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const now = new Date();

  useMemo(() => {
    if (month < 1 || month > 12) {
      setError("Must be a validad month");
      return;
    }
    if (day < 1 || day > 31) {
      setError("Must be valid day");
      return;
    }
    if (year > now.getFullYear()) {
      setError("Must be in the past");
      return;
    }
    setError(null);
  }, [day, month, year]);

  const Years = useMemo(
    () => (error ? null : now.getFullYear() - year),
    [year, error]
  );
  const Months = useMemo(
    () => (error ? null : now.getMonth() + 1 - month),
    [month, error]
  );
  const Days = useMemo(
    () => (error ? null : now.getDate() + day),
    [day, error]
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
    error,
  };
}

export default useCalculate;
