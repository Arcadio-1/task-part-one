import React from "react";
import { Column } from "./Column";
import { Row } from "./Row";

type Props = {
  lines: string[][];
};

export const OverLay: React.FC<Props> = ({ lines }) => {
  return (
    <div className="z-50 absolute w-full h-full flex justify-between top-0 left-0 border-2 border-lime-500">
      {lines.map((row) => {
        return (
          <Column key={row[0]}>
            {row.map((col) => {
              return <Row key={col} />;
            })}
          </Column>
        );
      })}
    </div>
  );
};
