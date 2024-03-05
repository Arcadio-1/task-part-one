import { produce } from "immer";
import React from "react";
import ActionsBtn from "./ActionsBtn";
type Props = {
  lines: string[][];
  setLines: React.Dispatch<React.SetStateAction<string[][]>>;
};
export enum EActionType {
  IncCol = "incCol",
  DecCol = "decCol",
  IncRow = "incRow",
  DecRow = "decRow",
}
const Actions: React.FC<Props> = ({ setLines, lines }) => {
  const linesHandler = (type: EActionType) => {
    const nextState = produce(lines, (draft) => {
      switch (type) {
        case "incRow": {
          for (const row of draft) {
            row.push(`${Math.random().toString()}`);
          }
          break;
        }
        case "decRow": {
          if (draft[0].length > 1) {
            for (const row of draft) {
              row.pop();
            }
          }
          break;
        }
        case "incCol": {
          const tempArr = draft[0].map(() => Math.random().toString());
          draft.push(tempArr);
          break;
        }
        case "decCol": {
          if (draft.length > 1) {
            draft.pop();
          }
          break;
        }
      }
    });
    setLines(nextState);
  };

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
      <ActionsBtn
        text="increase row"
        actionType={EActionType.IncRow}
        linesHandler={linesHandler}
      />
      <ActionsBtn
        text="decrease row"
        actionType={EActionType.DecRow}
        linesHandler={linesHandler}
      />
      <ActionsBtn
        text="increase column"
        actionType={EActionType.IncCol}
        linesHandler={linesHandler}
      />
      <ActionsBtn
        text="decrease column"
        actionType={EActionType.DecCol}
        linesHandler={linesHandler}
      />
    </div>
  );
};

export default Actions;
