import SignInForm from "@/components/SignInForm";
import LoginIllustration from "@/socialIcons/LoginIllustration";
import React from "react";

export default function SignIn() {
  return (
    <section className="relative z-10 my-20">
      <div className="  mx-auto grid-cols-2 grid container px-6 lg:px-0 mt-16">
        <div className="size-96 my-auto">
          <LoginIllustration mode = "signin"/>
        </div>
        <div>
          <SignInForm />
        </div>
      </div>
    </section>
  );
}
