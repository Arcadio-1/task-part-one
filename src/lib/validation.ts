import { z } from "zod";
import moment from "moment";

export const formOneStepOneScham = z.object({
  name: z
    .string()
    .min(1, { message: "please Enter Your name" })
    .regex(/^[a-z ,.'-]+$/i, {
      message: "please Enter Your name correctly",
    }),
  countryCode: z
    .string()
    .min(1, { message: "enter country Code" })
    .regex(/^[1-9]\d{0,14}$/, {
      message: "Please enter your country code correctly!",
    }),
  phone: z.string().regex(/^\d{10}$/),
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
        message: "Wrong color format",
      }),
    number: z
      .number()
      .min(1, { message: "insert number between 1 to 10!" })
      .max(10, { message: "insert number between 1 to 10!" }),
    date: z.string().refine(
      (value) => {
        let result = moment(value, "YYYY-MM-DD", true).isValid();
        return result;
      },
      { message: "please Enter Dates correctly" }
    ),
  })
);
