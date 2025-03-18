import Input from "./components/Input";
import Age from "./components/Age";
import { useState } from "react";

import useCalculate from "./Hooks/Calculate";

function App() {
  const { setDay, setMonth, setYear, Days, Years, Months, error } =
    useCalculate();

  const [showResults, setShowResults] = useState(false);

  function handleClick() {
    if (!error) setShowResults(true);
  }

  return (
    <main>
      <section className="bg-White flex flex-col justify-center items-center text-left p-5 m-5 rounded-xl">
        <Input
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          error={error}
        />

        <button
          className={`h-15 w-15 rounded-full flex justify-center items-center bg-Purple mt-10 cursor-pointer ${
            error ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleClick}
          disabled={!!error}
        >
          <img src="/images/icon-arrow.svg" alt="icono boton" className="w-6" />
        </button>
        {showResults && <Age Days={Days!} Months={Months!} Years={Years!} />}
      </section>
    </main>
  );
}

export default App;
