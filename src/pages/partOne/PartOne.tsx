import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { StepOne } from "../../components/partOne/forms/stepOne";
import { Steptwo } from "../../components/partOne/forms/steptwo";
import { Result } from "../../components/partOne/result";

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
      <Link
        className="text-cyan-500 sticky top-5 left-5 py-2 px-6 rounded-lg bg-gray-800"
        to={"/"}
      >
        Back
      </Link>
      <div className="grid place-items-center h-dvh mx-2 py-[4rem]">
        <div className="bg-gray-800 rounded-lg p-3 w-full max-w-lg flex flex-col items-stretch justify-center gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default PartOne;
