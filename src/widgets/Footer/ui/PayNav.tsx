import ApplePaySvg from "@/shared/assets/icons/payments/apple-pay.svg";
import GPaySvg from "@/shared/assets/icons/payments/g-pay.svg";
import MasterCardSvg from "@/shared/assets/icons/payments/mastercard.svg";
import PayPalSvg from "@/shared/assets/icons/payments/paypal.svg";
import VisaSvg from "@/shared/assets/icons/payments/visa.svg";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface PayNavProps {
  className?: string;
}

export const PayNav: React.FC<PayNavProps> = ({ className }) => {
  return (
    <div className={classNames(className, "xl:flex xl:justify-between")}>
      <p className="text-sm text-accent-light-gray text-center mt-4">Shop.co © 2000-2023, All Rights Reserved</p>
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
  );
};
