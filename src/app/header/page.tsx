"use client";
import Image from "next/image";
import Link from "next/link";
import {
  SpeakerWaveIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";
import LogoIMG from "../../../public/logo-img.png";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ['latin'], // Choose the subsets you need
  weight: ['400', '700'], // Specify the weights you need
  display: 'swap', // Controls how the font is displayed
});

const products = [
  {
    name: "Web & App Development",
    description: "Creating dynamic websites & Apps with coding expertise.",
    href: "https://orinson.com/services/web-app-development",
    icon: CodeBracketIcon,
  },
  {
    name: "Digital Marketing & SEO & SMO etc.",
    description: "Maximizing online presence through strategic promotion.",
    href: "https://orinson.com/services/digital-marketing",
    icon: SpeakerWaveIcon,
  },
  {
    name: "VideoEditing | GraphicDesign | UI/UX",
    description: "Creative visuals with professional edits and designs.",
    href: "https://orinson.com/services/videoediting-graphicdesign",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Content Management & Marketing",
    description: "Efficiently organize, promote, and deliver engaging content.",
    href: "https://orinson.com/services/content-management-marketing",
    icon: RocketLaunchIcon,
  },
  {
    name: "Paid Campaign",
    description: "Effective Advertising Through Paid Campaign",
    href: "https://orinson.com/services/paid-campaign",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Website Optimization",
    description: "Maximizing website performance for optimal results.",
    href: "https://orinson.com/services/website-optimization",
    icon: CommandLineIcon,
  },
  {
    name: "Other Software Service",
    description: "Tailored software solutions for business growth.",
    href: "https://orinson.com/services/software-development",
    icon: Cog8ToothIcon,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef<HTMLElement | null>(null);

  console.log(segment)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 bg-white shadow-sm`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 min-[360px]:px-6 py-4 lg:px-8">
        <div className="flex flex-1">   
          <Link href="https://orinson.com/" className="-m-1.5 p-1.5 flex gap-[6px] no-select">
            <Image
              className={`h-10 w-auto logo-filter-white `}
              src={LogoIMG}
              alt="Logo"
              width={250}
              height={70}
            />
            <span className={`flex flex-col justify-center items-center no-select gradient-text-logo-white ${teko.className}`}>
              <span className="font-semibold text-xl mb-0 pb-0 tracking-[0.2rem] no-select">ORINSON</span>
              <span className="font-semibold text-base -mt-2 pt-0 tracking-[0.07rem] no-select">Technologies</span>
            </span>
          </Link>
        </div>

        <div
          className={`hidden md:flex ml-12 justify-center items-center gap-0 lg:gap-7 text-gray-900`}>
          <motion.div whileHover={{ scale: 1.1 }} className="hidden min-[825px]:block">
            <Link
              href="https://orinson.com/"
              className={`px-3 py-2 text-sm navlink`}
              onClick={() => setToggle(false)}>
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="https://orinson.com/about"
              className={`px-3 py-2 text-sm navlink`}
              onClick={() => setToggle(false)}>
              About Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              className={`px-3 py-2 text-sm flex items-center cursor-pointer navlink `}
              onClick={() => setToggle(!toggle)}>
              Our Services
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${toggle ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="https://orinson.com/portfolio"
              className={`px-3 py-2 text-sm navlink`}
              onClick={() => setToggle(false)}>
              Portfolio
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="https://orinson.com/blogs"
              className={`px-3 py-2 text-sm navlink active`}
              onClick={() => setToggle(false)}>
              Blogs
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="https://orinson.com/contact"
              className={`px-3 py-2 text-sm navlink`}
              onClick={() => setToggle(false)}>
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 justify-end items-center">
          <div
            className={`mr-1 sm:mr-6 md:hidden text-gray-900`}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://orinson.com/blogs"
                className={` px-1 min-[760px]:px-3 min-[760px]:py-2 text-sm navlink active`}
                onClick={() => setToggle(false)}>
                Blogs
              </Link>
            </motion.div>
          </div>
          <a
            href="tel:+916265388382"
            className="navbar-btn text-sm md:text-base  shadow-lg">
            Call Us
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-99 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
        }`}>
        {products.map((item) => {
          return (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <Link
                  href={item.href}
                  className="block font-semibold text-gray-900"
                  onClick={() => setToggle(false)}>
                  {item.name}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
