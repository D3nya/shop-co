import React, { useRef, useState } from "react";
import { classNames } from "../../../../utils/classNames";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";

import EmailSvg from "../../../../assets/icons/email.svg";

interface UpToDateProps {
  className?: string;
}

export const UpToDate: React.FC<UpToDateProps> = ({ className }) => {
  const [emailValue, setEmailValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setEmailValue("");
    inputRef.current?.focus();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emailValue);
  };

  return (
    <section className={classNames(className, "bg-accent-gray mt-[190px] -mb-[140px] xl:-mb[90px]")}>
      <div className="container">
        <div className="bg-black rounded-xl p-6 xl:py-9 xl:px-16 relative -top-[140px] xl:-top-[90px] xl:flex xl:justify-between xl:items-center">
          <h2 className="font-integral text-white uppercase text-3xl xl:text-4xl xl:max-w-[550px]">
            Stay Up To Date About Our Latest Offers
          </h2>
          <form onSubmit={handleSubmit} className=" xl:max-w-[400px] mt-6 xl:mt-0 xl:w-full">
            <Input
              onClear={handleClear}
              onChange={handleInputChange}
              value={emailValue}
              icon={EmailSvg}
              ref={inputRef}
              type="email"
              placeholder="Enter your email address"
              name="email"
              id="email"
            />
            <Button type="submit" className="mt-3">
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
