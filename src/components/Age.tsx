type AgeProps = {
  Days: number;
  Months: number;
  Years: number;
  showResults: boolean;
};

function Age({ Days, Months, Years, showResults }: AgeProps) {
  return (
    <section className="mt-8">
      <>
        <p className="font-bold text-3xl">
          <span className="text-Purple">{showResults ? Years : "--"}</span>{" "}
          years
        </p>
        <p className="font-bold text-3xl">
          <span className="text-Purple">{showResults ? Months : "--"}</span>{" "}
          month
        </p>
        <p className="font-bold text-3xl">
          <span className="text-Purple">{showResults ? Days : "--"}</span> day
        </p>
      </>
    </section>
  );
}

export default Age;
