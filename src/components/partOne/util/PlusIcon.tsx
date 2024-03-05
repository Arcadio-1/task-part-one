import React from "react";

import { SVGProps } from "react";
import { cn } from "../../../lib/utils";

type Props = SVGProps<SVGSVGElement>;

const PlusIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(" h-[10px] w-[10px] fill-gray-300", className)}
      viewBox="0 0 32 32"
    >
      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
    </svg>
  );
};

export default PlusIcon;
