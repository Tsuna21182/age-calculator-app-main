type InputProps = {
  setDay: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  errorDay: string | null;
  errorMonth: string | null;
  errorYear: string | null;
};

function Input({
  setDay,
  setMonth,
  setYear,
  errorDay,
  errorMonth,
  errorYear,
}: InputProps) {
  return (
    <section className="flex justify-center items-center gap-3">
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase text-SmokeyGrey font-bold tracking-widest">
          day
        </label>
        <input
          type="number"
          className="border-[1px] border-SmokeyGrey p-2  rounded-lg w-20 outline-0 text-SmokeyGrey font-bold"
          placeholder="DD"
          onChange={(e) => setDay(Number(e.target.value))}
        />
        {errorDay && <p className="text-LightRed text-xs mt-2">{errorDay}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase text-SmokeyGrey font-bold tracking-widest">
          month
        </label>
        <input
          type="number"
          className="border-[1px] border-SmokeyGrey p-2  rounded-lg w-20 outline-0 text-SmokeyGrey font-bold"
          placeholder="MM"
          onChange={(e) => setMonth(Number(e.target.value))}
        />
        {errorMonth && (
          <p className="text-LightRed text-xs mt-2">{errorMonth}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase text-SmokeyGrey font-bold tracking-widest">
          year
        </label>
        <input
          type="number"
          className="border-[1px] border-SmokeyGrey p-2  rounded-lg w-20 outline-0 text-SmokeyGrey font-bold"
          placeholder="YYYY"
          onChange={(e) => setYear(Number(e.target.value))}
        />
        {errorYear && <p className="text-LightRed text-xs mt-2">{errorYear}</p>}
      </div>
    </section>
  );
}

export default Input;
