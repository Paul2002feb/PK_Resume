import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-5 flex items-center justify-between">
        {/* displays the date  */}
        <span> &copy; {new Date().getFullYear()} Paul Kiattikhunphan</span>
        <div className="flex items-center sm:hidden md:hidden ">
          Built with NextJS, Framer-motion, and Tailwind CSS
        </div>
        <span className="text-primary dark:text-primaryDark text2x-l px-1 ">
          &#x2602;
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
