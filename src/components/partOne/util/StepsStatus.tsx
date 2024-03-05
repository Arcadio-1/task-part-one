import { Steps } from "antd";
import React from "react";

type Props = {
  step: 0 | 2 | 1;
};
const steps: [
  {
    title: string;
  },
  {
    title: string;
  },
  {
    title: string;
  }
] = [
  {
    title: "First",
  },
  {
    title: "Second",
  },
  {
    title: "Last",
  },
];
export const StepsStatus: React.FC<Props> = ({ step }) => {
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return <Steps current={step} items={items} />;
};
