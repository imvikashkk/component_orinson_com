"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import Image from "next/image";
import LogoIMG from "../../../public/logo-img.png";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400", "700"], // Specify the weights you need
  display: "swap", // Controls how the font is displayed
});

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Send height to parent function
  const sendHeightToParent = () => {
    if (typeof window !== "undefined" && footerRef.current) {
      const height = footerRef.current.scrollHeight;
      window.parent.postMessage(
        {
          height,
        },
        "*"
      );
    }
  };

  useEffect(() => {
    // Send initial height
    sendHeightToParent();

    // Observe changes and update height
    const resizeObserver = new ResizeObserver(() => {
      sendHeightToParent();
    });

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    // Clean up
    return () => {
      if (footerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div ref={footerRef} className="w-full">
      <footer className="pt-12 footer-bg relative">
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
            <div className="flex-1">
              <h2 className="text-white text-2xl md:text-3xl font-medium">
                Interested To Get Our Featured Service
              </h2>
            </div>
            <div>
              <a href="tel:+916265388382">
                <button className="primary-btn shadow-lg">Call us Now</button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
            <div className="lg:pr-8 text-center md:text-start ">
              <div className="flex flex-1">
                <Link
                  href="https://orinson.com/"
                  className="-m-1.5 p-1.5 flex gap-[6px] no-select">
                  <Image
                    className={`h-10 w-auto `}
                    src={LogoIMG}
                    alt=""
                    width={250}
                    height={70}
                  />
                  <span
                    className={`flex flex-col justify-center items-center no-select gradient-text-logo-blue
              ${teko.className}`}>
                    <span className="font-semibold text-xl mb-0 pb-0 tracking-[0.2rem] no-select">
                      ORINSON
                    </span>
                    <span className="font-semibold text-base -mt-2 pt-0 tracking-[0.07rem] no-select">
                      Technologies
                    </span>
                  </span>
                </Link>
              </div>
              <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">
                At Orinson Technologies Private Limited, we deliver cutting-edge
                web and app solutions. Our digital marketing team enhances your
                brand, while our video editors and graphic designers create
                stunning visuals and engaging content. Transform your ideas into
                impactful digital experiences with our comprehensive services.
              </p>
            </div>
            <div className="mx-auto text-center md:text-start">
              <div>
                <h3 className="text-white text-xl font-medium mb-6">
                  Quick Links
                </h3>
              </div>
              <ul className="list-inside list-none">
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/">Home</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/about">About Us</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/contact">Contact us</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/portfolio">Portfolio</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/blogs">Blogs</Link>
                </li>
                <li className="my-5 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://certify.orinson.com/" target="_blank">
                    Certification
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto text-center md:text-start">
              <div>
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Our Services
                </h3>
              </div>
              <ul className="list-inside list-none">
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/web-app-development">
                    Web & App Development
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/videoediting-graphicdesign">
                    VideoEditing | GraphicDesign
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/content-management-marketing">
                    Content Management & Marketing
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/paid-campaign">
                    Paid Campaign
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/website-optimization">
                    Website Optimization
                  </Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="https://orinson.com/services/software-development">
                    Other Software Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mx-auto text-center md:text-start">
              <div>
                <div className="pb-md-25 animate get-bottom">
                  <h3 className="text-white text-capital text-xl font-medium mb-6">
                    Get In Touch
                  </h3>
                </div>
                <ul className="">
                  <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                    <a
                      className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                      href="tel:+916265388382">
                      <FaPhoneSquareAlt /> +91-6265388382
                    </a>
                  </li>
                  <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                    <a
                      className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                      href="mailto:info@orinson.com"
                      target="_blank">
                      <FaEnvelope /> info@orinson.com
                    </a>
                  </li>
                  <li className="mt-8">
                    <ul className="flex justify-start gap-4 items-center">
                      <li className="social">
                        <a
                          className="social-icon"
                          target="_blank"
                          href="https://www.facebook.com/orinsontechnologies">
                          <FaFacebook />
                        </a>
                      </li>
                      <li className="social">
                        <a
                          className="social-icon"
                          target="_blank"
                          href="https://x.com/orinsontech">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="social">
                        <a
                          className="social-icon"
                          target="_blank"
                          href="https://www.instagram.com/orinson_technologies/">
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="social">
                        <a
                          className="social-icon"
                          target="_blank"
                          href="https://www.youtube.com/channel/UCL2tqbvl6K1j6QH7d7BP1tg">
                          <FaYoutube />
                        </a>
                      </li>
                      <li className="social">
                        <a
                          className="social-icon"
                          target="_blank"
                          href="https://www.linkedin.com/company/orinsontechnologies/">
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
          <p className="text-sm text-slate-200 hover:text-white transition-all duration-300">
            © Copyright <a href="#">Orinson.com</a> 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
