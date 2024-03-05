import { Image } from "antd";
import { useState } from "react";
import { Details } from "../../components/partTwo/Details";
import Actions from "../../components/partTwo/Actions";
import { Container } from "../../components/util/Container";
import { BackBtn } from "../../components/util/BackBtn";
import { OverLay } from "../../components/partTwo/OverLay";

const PartTwo = () => {
  const [lines, setLines] = useState<string[][]>([["0/0"]]);

  return (
    <div>
      <BackBtn />
      <Container className="max-w-3xl">
        <div className="relative h-auto flex grid-cols-6">
          <Image width={"auto"} className="size-max" src="/main.jpg" />
          <OverLay lines={lines} />
        </div>
        <Details lines={lines} />
        <Actions setLines={setLines} lines={lines} />
      </Container>
    </div>
  );
};

export default PartTwo;
