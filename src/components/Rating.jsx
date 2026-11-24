export const Rating = ({ vote }) => {
  const rating = Math.round((Number(vote) || 0) / 2);

  return (
    <span className="inline-flex">
      {[1, 2, 3, 4, 5].map((nr) => (
        <span
          key={nr}
          className={`mask mask-star h-4 w-4 ${nr <= rating ? "bg-amber-500" : "bg-gray-400"}`}
          aria-label={`${nr} star`}
        />
      ))}
    </span>
  );
};
