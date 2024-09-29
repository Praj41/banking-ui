import Logo from "@/socialIcons/Logo";
import Link from "next/link";

const Footer = () => {

  return (


    <footer className="bg-white text-white ">
      <div className="mx-auto w-full px-4 py-11 bg-secondary-900">
        <div className="container mx-auto flex justify-between items-center flex-col">
          <div className="flex items-start">
            <Link
              href="/"
              className="flex items-start space-x-3 rtl:space-x-reverse 2xl:size-28"
            >
              <Logo />
            </Link>

          </div>
          <ul className="flex divide-x divide-primary-600 mt-6">
            <li className="text-center px-4 sm:px-6 lg:px-11 leading-none flex items-center">
              <Link href="/about-aqwertyz"  className="hover:underline font-pop font-normal !text-sm">About AqwertyZ</Link>
            </li>
            <li  className="text-center px-4 sm:px-6 lg:px-11 leading-none flex items-center">
              <Link href="mailto:reachus@aqwertyz.com" className="hover:underline font-pop font-normal !text-sm">Contact us</Link>
            </li>
            <li  className="text-center px-4 sm:px-6 lg:px-11 leading-none flex items-center">
              <Link href="/terms-of-service" className="hover:underline font-pop font-normal !text-sm">Terms of Service</Link>
            </li>
            <li  className="text-center px-4 sm:px-6 lg:px-11 leading-none flex items-center">
              <Link href="/privacy-policy" className="hover:underline font-pop font-normal !text-sm">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer >

  );
};

export default Footer;
