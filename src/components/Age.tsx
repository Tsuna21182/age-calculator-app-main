type AgeProps = {
  Days: number;
  Months: number;
  Years: number;
};

function Age({ Days, Months, Years }: AgeProps) {
  return (
    <section className="mt-8">
      <p className="font-bold text-3xl">
        <span className="text-Purple">{Years}</span> years
      </p>
      <p className="font-bold text-3xl">
        <span className="text-Purple">{Months}</span> month
      </p>
      <p className="font-bold text-3xl">
        <span className="text-Purple">{Days}</span> day
      </p>
    </section>
  );
}

export default Age;
