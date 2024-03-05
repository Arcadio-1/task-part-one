import React, { useState } from "react";
import { Button, ColorPicker, Form, InputNumber } from "antd";
import { formOneStepTwoScham } from "../../../lib/validation";
const formItemLayout = {
  labelCol: {
    xs: { span: 10 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};
type Props = {
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
  stepOneData: {
    name: string;
    countryCode: string;
    phone: string;
    dateRange: string[];
  };
  setStepTwoData: React.Dispatch<
    React.SetStateAction<
      | []
      | {
          color: string;
          number: number;
          date: string;
        }[]
    >
  >;
};
export const Steptwo: React.FC<Props> = ({
  stepOneData,
  setStepTwoData,
  setStep,
}) => {
  const [error, setError] = useState<string | null>();
  const prefixSelector = (name: string) => (
    <Form.Item
      rules={[
        {
          required: true,
          message: "Please Select Color",
        },
      ]}
      name={name}
      noStyle
    >
      <ColorPicker />
    </Form.Item>
  );
  const onFinishStepTwo = (fieldsValue: any) => {
    const tempArr = stepOneData.dateRange.map((date) => {
      const { r, g, b, a } = fieldsValue[`color${date}`].metaColor;
      return {
        color: `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`,
        date: date,
        number: fieldsValue[`number${date}`],
      };
    });
    const validated = formOneStepTwoScham.safeParse(tempArr);
    if (validated.success) {
      setStepTwoData(validated.data);
      setStep(2);
    } else {
      setError(JSON.parse(validated.error.message)[0].message);
    }
  };
  return (
    <div>
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinishStepTwo}
        style={{ maxWidth: 600 }}
      >
        {stepOneData.dateRange.map((date, index) => {
          return (
            <Form.Item
              key={index}
              name={`number${date}`}
              label={date}
              rules={[
                {
                  required: true,
                  message: "Please Enter number!",
                },
              ]}
            >
              <InputNumber
                placeholder="1-10"
                min={1}
                max={10}
                style={{ width: "100%" }}
                addonBefore={prefixSelector(`color${date}`)}
              />
            </Form.Item>
          );
        })}
        <Form.Item
          className="w-full"
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 44, offset: 0 },
          }}
        >
          <Button
            className="bg-lime-600 font-medium w-full"
            type="default"
            htmlType="submit"
          >
            Next
          </Button>
        </Form.Item>
        {error && <span className="text-red-600">{error}</span>}
      </Form>
    </div>
  );
};
