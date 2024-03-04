import React from "react";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { Dayjs } from "dayjs";
import { convert_to_en_number } from "../../../lib/translateNumbers";
import { formOneStepOneScham } from "../../../lib/validation";

const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null, Dayjs | null] | null;
const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
function getDatesBetween(startDate: Date, endDate: Date): string[] {
  const dates: string[] = [];
  let currentDate = new Date(startDate.getTime());

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().slice(0, 10);
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

type Props = {
  setStep: React.Dispatch<React.SetStateAction<"1" | "2" | "3">>;
  setStepOneData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      countryCode: string;
      phone: string;
      dateRange: string[];
    } | null>
  >;
};
export const StepOne: React.FC<Props> = ({ setStepOneData, setStep }) => {
  const [dateRange, setDateRange] = useState<RangeValue>(null);
  const [error, setError] = useState<string | null>();

  const disabledDate: DatePickerProps["disabledDate"] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }

    return false;
  };

  const prefixSelector = (
    <Form.Item
      rules={[
        {
          pattern: /^(\+?\d{1,3}|\d{1,4})$/,
          required: true,
          message: "Please enter your country code!",
        },
      ]}
      name="countryCode"
      noStyle
    >
      <Input className="rounded-none" style={{ width: 80 }} />
    </Form.Item>
  );

  const onFinish = (fieldsValue: any) => {
    const rangeValue = fieldsValue["range-picker"];
    const values = {
      ...fieldsValue,
      date_range: [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    };
    const start = new Date(values.date_range[0]);
    const end = new Date(values.date_range[1]);
    const daysDifference = getDatesBetween(start, end);
    const validated = formOneStepOneScham.safeParse({
      name: values.name,
      countryCode: convert_to_en_number(values.countryCode),
      phone: convert_to_en_number(values.phone),
      dateRange: daysDifference,
    });
    if (validated.success) {
      setError(null);
      setStepOneData(validated.data);
      setStep("2");
    } else {
      setError(JSON.parse(validated.error.message)[0].message);
    }
  };
  return (
    <div>
      <Form name="step_one" {...formItemLayout} onFinish={onFinish}>
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              pattern: /^[a-z ,.'-]+$/i,
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              pattern: /^\d{10}$/,
              required: true,
              message: "Please enter your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="range-picker"
          label="Dates"
          rules={[
            {
              type: "array" as const,
              required: true,
              message: "Please select date!",
            },
          ]}
        >
          <RangePicker
            className="w-full"
            value={dateRange}
            disabledDate={disabledDate}
            onChange={setDateRange}
          />
        </Form.Item>
        <Form.Item>
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
