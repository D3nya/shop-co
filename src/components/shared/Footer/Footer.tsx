import React from "react";
import { UpToDate } from "./components/UpToDate";
import { Link as RouterLink } from "react-router";

import { TwitterSvg } from "./components/svgs/TwitterSvg";
import { FacebookSvg } from "./components/svgs/FacebookSvg";
import { InstagramSvg } from "./components/svgs/InstagramSvg";
import { GithubSvg } from "./components/svgs/GithubSvg";

import ApplePaySvg from "../../../assets/icons/payments/apple-pay.svg";
import GPaySvg from "../../../assets/icons/payments/g-pay.svg";
import MasterCardSvg from "../../../assets/icons/payments/mastercard.svg";
import PayPalSvg from "../../../assets/icons/payments/paypal.svg";
import VisaSvg from "../../../assets/icons/payments/visa.svg";

interface FooterProps {
  className?: string;
}

const LINKS = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        ref: "/about",
      },
      {
        name: "Features",
        ref: "/features",
      },
      {
        name: "Works",
        ref: "/works",
      },
      {
        name: "Career",
        ref: "/career",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "Customer Support",
        ref: "/support",
      },
      {
        name: "Delivery Details",
        ref: "/delivery",
      },
      {
        name: "Terms & Conditions",
        ref: "/terms",
      },
      {
        name: "Privacy Policy",
        ref: "/policy",
      },
    ],
  },
  {
    title: "FAQ",
    links: [
      {
        name: "Account",
        ref: "/account",
      },
      {
        name: "Manage Deliveries",
        ref: "/deliveries",
      },
      {
        name: "Orders",
        ref: "/orders",
      },
      {
        name: "Payment",
        ref: "/payment",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Free eBook",
        ref: "/ebook",
      },
      {
        name: "Development Tutorial",
        ref: "/development",
      },
      {
        name: "How to - Blog",
        ref: "/blog",
      },
      {
        name: "Youtube Playlist",
        ref: "/youtube",
      },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <UpToDate />
      <section className="bg-accent-gray mt-8 xl:mt-24">
        <div className="container">
          <div className="xl:flex xl:justify-between">
            <div className="xl:max-w-[250px]">
              <RouterLink to="/" className="block">
                <h2 className="font-integral font-bold text-3xl">Shop.co</h2>
              </RouterLink>
              <p className="mt-3 text-sm opacity-60">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex gap-x-3 mt-5">
                <RouterLink
                  to="https://x.com/"
                  className="w-[28px] h-[28px] border border-black/20 bg-white rounded-full flex justify-center items-center group hover:bg-black transition-all"
                >
                  <TwitterSvg className="w-[12px] h-[9px] group-hover:fill-white" />
                </RouterLink>
                <RouterLink
                  to="https://www.facebook.com/"
                  className="w-[28px] h-[28px] border border-black/20 bg-white rounded-full flex justify-center items-center group hover:bg-black transition-all"
                >
                  <FacebookSvg className="w-[6px] h-[12px] group-hover:fill-white" />
                </RouterLink>
                <RouterLink
                  to="https://www.instagram.com/"
                  className="w-[28px] h-[28px] border border-black/20 bg-white rounded-full flex justify-center items-center group hover:bg-black transition-all"
                >
                  <InstagramSvg className="w-[14px] h-[14px] group-hover:fill-white" />
                </RouterLink>
                <RouterLink
                  to="https://github.com/"
                  className="w-[28px] h-[28px] border border-black/20 bg-white rounded-full flex justify-center items-center group hover:bg-black transition-all"
                >
                  <GithubSvg className="w-[13px] h-[13px] group-hover:fill-white" />
                </RouterLink>
              </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 mt-8 xl:mt-0">
              {LINKS.map((item, index) => (
                <div key={index}>
                  <h3 className="font-medium uppercase text-sm leading-1 tracking-[3px]">{item.title}</h3>
                  <ul className="mt-4">
                    {item.links.map((item, index) => (
                      <li key={index} className="last:pb-0 pb-4">
                        <RouterLink
                          to={item.ref}
                          className="opacity-60 text-sm leading-[16px] hover:opacity-100 transition-opacity"
                        >
                          {item.name}
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="w-full opacity-10 mt-10" />

          <div className="xl:flex xl:justify-between">
            <p className="text-sm opacity-60 text-center mt-4">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex gap-x-2.5 justify-center items-center mt-4 pb-20">
              <div className="w-[40px] h-[26px] bg-white rounded-md flex items-center justify-center">
                <img src={VisaSvg} alt="Visa Icon" className="w-[27px] h-[9px]" />
              </div>
              <div className="w-[40px] h-[26px] bg-white rounded-md flex items-center justify-center">
                <img src={MasterCardSvg} alt="MasterCard Icon" className="w-[21px] h-[13px] " />
              </div>
              <div className="w-[40px] h-[26px] bg-white rounded-md flex items-center justify-center">
                <img src={PayPalSvg} alt="PayPal Icon" className="w-[30px] h-[8px]" />
              </div>
              <div className="w-[40px] h-[26px] bg-white rounded-md flex items-center justify-center">
                <img src={ApplePaySvg} alt="Apple Pay Icon" className="w-[23px] h-[10px]" />
              </div>
              <div className="w-[40px] h-[26px] bg-white rounded-md flex items-center justify-center">
                <img src={GPaySvg} alt="Google Pay Icon" className="w-[25px] h-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
