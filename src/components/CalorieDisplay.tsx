type CalorieDisplayProps = {
  total: number;
  text: string;
};

export default function CalorieDisplay({ total, text }: CalorieDisplayProps) {
  return (
    <>
      <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className="font-black text-6xl text-orange">{total}</span>
        {text}
      </p>
    </>
  );
}
