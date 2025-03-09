interface StatCardProps {
  number: string;
  text: string;
}

export function StatCard({ number, text }: StatCardProps) {
  return (
    <article className="flex gap-1.5 items-center p-2.5 w-64 rounded-md border-white border-solid border-[0.665px]">
      <h3 className="text-5xl font-bold">{number}</h3>
      <p className="text-sm text-left text-white">{text}</p>
    </article>
  );
}
