import React from "react";
import { classNames } from "../../../utils/classNames";

interface NewArrivalsProps {
  className?: string;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ className }) => {
  return (
    <section className={classNames(className)}>
      <div className="container">
        <h2>NEW ARRIVALS</h2>
      </div>
    </section>
  );
};
