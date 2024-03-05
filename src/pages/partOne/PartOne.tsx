import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { StepOne } from "../../components/partOne/forms/stepOne";
import { Steptwo } from "../../components/partOne/forms/steptwo";
import { Result } from "../../components/partOne/result";
import { Container } from "../../components/util/Container";
import { BackBtn } from "../../components/util/BackBtn";

const PartOne = () => {
  const [stepOneData, setStepOneData] = useState<{
    name: string;
    countryCode: string;
    phone: string;
    dateRange: string[];
  } | null>(null);

  const [stepTwoData, setStepTwoData] = useState<
    | {
        color: string;
        number: number;
        date: string;
      }[]
    | []
  >([]);
  const [step, setStep] = useState<"1" | "2" | "3">("1");
  const resetHandler = () => {
    setStep("1");
    setStepOneData(null);
    setStepTwoData([]);
  };
  return (
    <div>
      <BackBtn />
      <Container className="max-w-lg">
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          {step === "1" && (
            <StepOne setStep={setStep} setStepOneData={setStepOneData} />
          )}
          {step === "2" && stepOneData && (
            <Steptwo
              setStep={setStep}
              stepOneData={stepOneData}
              setStepTwoData={setStepTwoData}
            />
          )}
          {step === "3" && stepTwoData.length && (
            <Result resetHandler={resetHandler} stepTwoData={stepTwoData} />
          )}
        </ConfigProvider>
      </Container>
    </div>
  );
};

export default PartOne;
