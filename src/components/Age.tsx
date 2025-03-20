type AgeProps = {
  Days: number;
  Months: number;
  Years: number;
  showResults: boolean;
};

function Age({ Days, Months, Years, showResults }: AgeProps) {
  return (
    <section className="mt-8">
      {showResults ? (
        <>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{Years}</span> years
          </p>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{Months}</span> month
          </p>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{Days}</span> day
          </p>
        </>
      ) : (
        <>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{"--"}</span> years
          </p>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{"--"}</span> month
          </p>
          <p className="font-bold text-3xl">
            <span className="text-Purple">{"--"}</span> day
          </p>
        </>
      )}
    </section>
  );
}

export default Age;
