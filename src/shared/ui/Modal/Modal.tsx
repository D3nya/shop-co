import type { ReactNode } from "react";
import CrossSvg from "@/shared/assets/icons/x.svg";
import useClickOutside from "@/shared/hooks/useClickOutside";
import { classNames } from "@/shared/utils/classNames";
import React, { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  className?: string;
  position?: "center" | "start";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ className, isOpen, onClose, children, position = "center" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => onClose());

  if (!isOpen)
    return null;

  return createPortal(
    <div
      className={classNames(
        "fixed inset-0 z-50 flex bg-white/90",
        className,
        position === "center" ? "items-center" : "items-start pt-[10vh]",
      )}
    >
      <div className="bg-white p-4 rounded-lg shadow-2xl relative w-[90%] max-w-lg mx-auto" ref={ref}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 opacity-100 hover:opacity-60 transition-opacity"
          title="Close modal"
        >
          <img src={CrossSvg} alt="Cross Icon" className="w-3 h-3" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
