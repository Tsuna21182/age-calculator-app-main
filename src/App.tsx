import Input from "./components/Input";
import Age from "./components/Age";
import { useState } from "react";

import useCalculate from "./Hooks/Calculate";

function App() {
  const {
    setDay,
    setMonth,
    setYear,
    Days,
    Years,
    Months,
    errorDay,
    errorMonth,
    errorYear,
  } = useCalculate();

  const [showResults, setShowResults] = useState(false);

  function handleClick() {
    if (!errorDay && !errorMonth && !errorYear) setShowResults(true);
  }

  return (
    <main>
      <section className="bg-White flex flex-col justify-center items-center text-left p-5 m-5 rounded-xl">
        <Input
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          errorDay={errorDay}
          errorMonth={errorMonth}
          errorYear={errorYear}
        />

        <button
          className={`h-15 w-15 rounded-full flex justify-center items-center bg-Purple mt-10 cursor-pointer `}
          onClick={handleClick}
        >
          <img src="/images/icon-arrow.svg" alt="icono boton" className="w-6" />
        </button>

        <Age
          Days={Days!}
          Months={Months!}
          Years={Years!}
          showResults={showResults}
        />
      </section>
    </main>
  );
}

export default App;
