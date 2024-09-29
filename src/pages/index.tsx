import React from 'react';
import Link from 'next/link';
import SignInForm from '@/components/SignInForm';

const Home = () => {
  return (
    <section className="relative z-10 my-20">
      <div className="mx-auto lg:gap-20 xl:gap-0 md:grid-cols-2 grid container px-6 lg:px-0 my-20">
        <div>
         <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default Home;
