"use client"
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import HidePasswordIcon from "@/socialIcons/HidePasswordcon";
import ShowPasswordIcon from "@/socialIcons/ShowPasswordIcon";

const schema = z.object({
  email_address: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(4, "Password must be at least 4 characters long")
    .refine((s) => !s.includes(" "), "Enter valid password."),
});
type FormFields = z.infer<typeof schema>;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container mx-auto">
      <form className="w-full mt-3 sm:w-10/12 mx-auto">
        <div className="mb-5 col-span-6">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-pop font-semibold text-primary-800 "
          >
            Email Address
          </label>
          <input
            type="email"
            {...register("email_address")}
            placeholder="Email Address"
            id="email"
            className="shadow-sm placeholder:text-base placeholder:font-pop placeholder:font-normal font-pop h-11 bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 focus:outline-1 focus:outline-primary-800 focus:ring-0"
          />
          {errors.email_address && (
            <p className="text-sm text-red-600 pt-1 font-pop">
              {errors.email_address.message}
            </p>
          )}
        </div>
        <div className="mb-2 col-span-6 relative">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-pop font-semibold text-primary-800 "
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              id="password"
              className="shadow-sm font-pop placeholder:text-base placeholder:font-pop placeholder:font-normal bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 focus:outline-1 focus:outline-primary-800 focus:ring-0 h-11"
            />
            <button
              type="button"
              className="text-black-200  absolute right-4 top-3.5 "
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 pt-1 font-pop">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex justify-end mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-primary-800 "
          ></label>
          <Link
            href={"/forgot-password"}
            className="text-blue-800 cursor-pointer font-pop text-base underline font-normal"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            label={"Sign In"}
            className={`${
              isSubmitting
                ? "text-white !bg-primary-700 font-bold"
                : "hover:text-white hover:font-semibold hover:bg-primary-700 font-medium"
            }  text-black-200  text-base h-11 font-pop w-full bg-primary shadow-3xl   focus:ring-4 focus:outline-none focus:ring-blue-300 border border-[#cbcbcb] hover:font-semibold rounded-lg  px-5 py-2.5 text-center bg-white`}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          />
        </div>
        <div className="mt-4 flex justify-center ">
          <label
            htmlFor="terms"
            className="ms-2 font-pop text-base font-semibold text-gray-900"
          >
            New to App?{" "}
            <Link
              href="/sign-up"
              className="text-blue-800 font-pop font-normal text-base underline"
            >
              Sign Up
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
