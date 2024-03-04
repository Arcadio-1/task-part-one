import { Link } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

const PartTwo = () => {
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
          ></ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default PartTwo;
