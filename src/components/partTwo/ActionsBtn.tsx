import { Button } from "antd";
import React from "react";
import { cn } from "../../lib/utils";
import { EActionType } from "./Actions";

interface ActionsBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionType: EActionType;
  text: string;
  linesHandler: (type: EActionType) => void;
}

const ActionsBtn: React.FC<ActionsBtnProps> = ({
  linesHandler,
  text,
  actionType,
  className,
}) => {
  return (
    <Button
      onClick={() => {
        linesHandler(actionType);
      }}
      className={cn(`text-white bg-lime-700 capitalize`, className)}
    >
      {text}
    </Button>
  );
};

export default ActionsBtn;
