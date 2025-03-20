import { Logo } from "@/shared/ui/Logo";
import React from "react";
import { Link as RouterLink } from "react-router";
import { LINKS } from "../model/footerConstants";
import { PayNav } from "./PayNav";
import { SocialNav } from "./SocialNav";
import { UpToDate } from "./UpToDate";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <UpToDate />
      <section className="bg-accent-gray mt-8 xl:mt-24">
        <div className="container">
          <div className="xl:flex xl:justify-between">
            <div className="xl:max-w-[250px]">
              <Logo />

              <p className="mt-3 text-sm text-accent-light-gray">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>

              <SocialNav />
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 mt-8 xl:mt-0">
              {LINKS.map(item => (
                <div key={item.id}>
                  <h3 className="font-medium uppercase text-sm leading-1 tracking-[3px]">{item.title}</h3>
                  <ul className="mt-4">
                    {item.links.map(item => (
                      <li key={item.id} className="last:pb-0 pb-4">
                        <RouterLink
                          to={item.ref}
                          className="text-accent-light-gray text-sm leading-[16px] hover:text-black transition-colors"
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

          <PayNav />

        </div>
      </section>
    </footer>
  );
};
