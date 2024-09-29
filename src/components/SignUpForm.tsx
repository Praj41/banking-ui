import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import HidePasswordIcon from "@/socialIcons/HidePasswordcon";
import ShowPasswordIcon from "@/socialIcons/ShowPasswordIcon";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import parsePhoneNumberFromString from "libphonenumber-js";



const schema = z.object({
    first_name: z.string().min(1, "First Name is required").regex(/^[a-zA-Z\s]*$/, {
      message: "First name can only contain letters",
    }).refine(s => !s.includes(' '), 'Enter valid first name!'),
    last_name: z.string().min(1, "Last Name is required").regex(/^[a-zA-Z\s]*$/, {
      message: "Last name can only contain letters and spaces",
    }).refine(s => !s.includes(' '), 'Enter valid last name!'),
    phone_number: z
      .string()
      .min(1, "Phone number is required")
      .refine(
        (value) => {
          const phoneNumber = parsePhoneNumberFromString(value);
          return phoneNumber && phoneNumber.isValid();
        },
        { message: "Invalid phone number" }
      ),
    email_address: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    terms: z
      .boolean()
      .refine((val) => val === true, "You must accept the Terms and Conditions"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(4, "Password must be at least 4 characters long")
      .refine((s) => !s.includes(" "), 'Enter valid password.')
  });
  
  type FormFields = z.infer<typeof schema>;

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors, isSubmitting, isValid },
      } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
          phone_number: "+91",
        },
      });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form
        className="w-full mt-3 sm:w-10/12 mx-auto"
      >
        <div className="grid gap-4 mt-4 grid-cols-12">
          <div className="mb-5 col-span-6">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-pop font-semibold text-primary-800"
            >
              First Name
            </label>
            <input
              type="text"
              {...register("first_name")}
              id="text"
              className="shadow-sm font-bold text-base bg-white border border-gray-300 text-black-200  rounded-lg focus:outline-1 focus:outline-primary-800 focus:ring-0 block w-full p-2 leading-none h-11 placeholder:text-base placeholder:font-pop placeholder:font-normal"
              placeholder="First Name"
            />
            {errors.first_name && (
              <p className="text-sm text-red-600 p-2 font-pop">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="mb-5 col-span-6">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-pop font-semibold text-primary-800"
            >
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              placeholder="Last Name"
              id="last_name"
              className="shadow-sm font-bold text-base bg-white border border-gray-300 text-black-200  rounded-lg focus:outline-1 focus:outline-primary-800 focus:ring-0 block w-full p-2 leading-none h-11placeholder:text-base placeholder:font-pop placeholder:font-normal h-11"
            />
            {errors.last_name && (
              <p className="text-sm font-pop text-red-600 p-2">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 col-span-6">
          <label
            htmlFor="phone_number"
            className="block mb-2 text-base font-pop font-semibold text-primary-800"
          >
            Phone Number
          </label>
          <PhoneInput
            defaultCountry="us"
            preferredCountries={["us", "in", "gb", "au"]}
            onChange={(phone: any) => {
              setValue("phone_number", phone);
            }}
            inputProps={{
              name: "phone_number",
              required: true,
              placeholder: "Phone No.",
              tabIndex: 0,
              onInvalid: (e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "This field is required"
                ),
              onInput: (e) =>
                (e.target as HTMLInputElement).setCustomValidity(""),
              className:
                "h-11 bg-white shadow-sm font-bold text-base bg-gray-50 border border-gray-300 text-black-200  rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-base placeholder:font-pop placeholder:font-normal",
            }}
            countrySelectorStyleProps={{
              buttonStyle: {
                border: "none",
              },
              className:
                "shadow-sm rounded-l-lg font-bold text-base bg-gray-50 border border-gray-300 text-black-200  focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder:text-base placeholder:font-pop placeholder:font-normal",
            }}
          />
          {errors.phone_number && (
            <p className="text-sm font-pop text-red-600 p-2">
              {errors.phone_number.message}
            </p>
          )}
        </div>
        <div className="mb-5 col-span-6">
          <label
            htmlFor="email_address"
            className="block mb-2 text-base font-pop font-semibold text-primary-800"
          >
            Email Address
          </label>
          <input
            {...register("email_address")}
            type="email"
            placeholder="Email Address"
            id="email_address"
            className="shadow-sm font-bold text-base bg-white border border-gray-300 text-black-200  rounded-lg focus:outline-1 focus:outline-primary-800 focus:ring-0 block w-full p-2 leading-none h-11placeholder:text-base placeholder:font-pop placeholder:font-normal h-11"
          />
          {errors.email_address && (
            <p className="text-sm font-pop text-red-600 p-2">
              {errors.email_address.message}
            </p>
          )}
        </div>
        <div className="mb-5 col-span-6">
          <label
            htmlFor="password"
            className="block mb-2 text-base font-pop font-semibold text-primary-800"
          >
            Password
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:outline-1 focus:outline-primary-800 focus:ring-0 block w-full p-2 leading-none h-11placeholder:text-base placeholder:font-pop placeholder:font-normal h-11"
            />
            <button
              type="button"
              className="text-black-200  absolute right-4 top-2 lg:top-3.5 "
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm font-pop text-red-600 p-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="items-center mb-5 mt-10">
          <input
            {...register("terms")}
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-blue-800 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-base font-pop font-medium text-gray-900"
          >
            By Signing Up I agree with
            <Link
              href="/terms-of-service"
              className="text-blue-800 hover:underline ml-1 text-base font-pop font-medium"
            >
              Terms and Conditions
            </Link>
          </label>
          {errors.terms && (
            <p className="text-sm font-pop text-red-600 p-2">
              {errors.terms.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            label={"Sign Up"}
            className={`${
              isSubmitting
                ? "text-white !bg-primary-700 font-bold"
                : "hover:text-white hover:bg-primary-700 hover:font-semibold font-medium"
            } text-black-200  text-base h-11 font-pop w-full bg-primary shadow-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 border border-[#cbcbcb]  rounded-lg  px-5 py-2.5 text-center bg-white`}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          />
        </div>

        <div className="mt-4 text-center">
          <label
            htmlFor="terms"
            className="ms-2 text-base font-semibold text-gray-900 "
          >
            Already have an Account?{" "}
              <Link
                href="/sign-in"
                className="text-blue-800 hover:underline dark:text-blue-500 font-pop font-medium text-base"
              >
                Sign In
              </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
