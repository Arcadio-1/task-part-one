import React from "react";

type Props = {
  lines: string[][];
};

export const Details: React.FC<Props> = ({ lines }) => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <label>Horizontal :</label>
        <span className="bg-lime-600 px-4 rounded-lg">{lines.length - 1}</span>
      </div>
      <div className="flex gap-2">
        <label>Vertical :</label>
        <span className="bg-lime-600 px-4 rounded-lg">
          {lines[0].length - 1}
        </span>
      </div>
    </div>
  );
};
