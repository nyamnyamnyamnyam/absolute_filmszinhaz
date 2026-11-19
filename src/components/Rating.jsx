import React from "react";

export const Rating = ({ vote }) => {
  return (
    <div>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((nr) => (
          <div
            key={nr}
            className="mask mask-star bg-amber-600"
            aria-label={`${nr} star`}
            aria-current={nr == Math.round(vote / 2) ? "true" : "false"}
          ></div>
        ))}
      </div>
    </div>
  );
};
