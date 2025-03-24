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
    <main className="flex justify-center items-center md:h-dvh">
      <section className="bg-White flex flex-col justify-center items-center text-left p-5 m-5 rounded-xl md:rounded-br-[12rem] md:w-xl">
        <Input
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          errorDay={errorDay}
          errorMonth={errorMonth}
          errorYear={errorYear}
        />

        <button
          className={`h-15 w-15 rounded-full flex justify-center items-center bg-Purple mt-10 cursor-pointer md:ml-96 md:h-20 md:w-20`}
          onClick={handleClick}
        >
          <img
            src="/images/icon-arrow.svg"
            alt="icono boton"
            className="w-6 md:w-10"
          />
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
