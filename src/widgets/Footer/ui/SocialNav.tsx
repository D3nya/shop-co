import FacebookSvg from "@/shared/assets/icons/socials/facebookSvg.svg?react";
import GithubSvg from "@/shared/assets/icons/socials/githubSvg.svg?react";
import InstagramSvg from "@/shared/assets/icons/socials/instagramSvg.svg?react";
import TwitterSvg from "@/shared/assets/icons/socials/twitterSvg.svg?react";
import { classNames } from "@/shared/utils/classNames";
import React from "react";
import { Link as RouterLink } from "react-router";

interface SocialNavProps {
  className?: string;
}

export const SocialNav: React.FC<SocialNavProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex gap-x-3 mt-5")}>
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
  );
};
