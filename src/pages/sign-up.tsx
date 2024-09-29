import SignUpForm from "@/components/SignUpForm";
import LoginIllustration from "@/socialIcons/LoginIllustration";
import React from "react";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 container mx-auto gap-5 my-20">
      <div className="size-11/12">
        <LoginIllustration mode = "signup"/>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
