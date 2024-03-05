import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export const Column: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-l-[1px] border-lime-500 w-full h-full flex flex-col items-stretch">
      {children}
    </div>
  );
};
