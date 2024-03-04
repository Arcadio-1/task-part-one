import { z } from "zod";
import moment from "moment";

export const formOneStepOneScham = z.object({
  countryCode: z
    .string()
    .min(1, { message: "enter country Code" })
    .regex(/^(\+?\d{1,3}|\d{1,4})$/, {
      message: "Please enter your country code correctly!",
    }),
  phone: z.string().regex(/^\d{10}$/),
  name: z
    .string()
    .min(1, { message: "please Enter Your name" })
    .regex(/^[a-z ,.'-]+$/i, {
      message: "please Enter Your name correctly",
    }),
  dateRange: z.array(
    z.string().refine(
      (value) => {
        let result = moment(value, "YYYY-MM-DD", true).isValid();
        return result;
      },
      { message: "please Enter Dates correctly" }
    )
  ),
});
export const formOneStepTwoScham = z.array(
  z.object({
    color: z
      .string()
      .regex(/^rgba\(\s*(?:\d{1,3}\s*,\s*){3}(?:[0-9.]+)\s*\)$/, {
        message: "Please input your country code correctly!",
      }),
    number: z
      .number()
      .min(1, { message: "Please input your phone correctly!" })
      .max(10, { message: "Please input your phone correctly!" }),
    date: z.string().refine(
      (value) => {
        let result = moment(value, "YYYY-MM-DD", true).isValid();
        return result;
      },
      { message: "please Enter Dates correctly" }
    ),
  })
);
