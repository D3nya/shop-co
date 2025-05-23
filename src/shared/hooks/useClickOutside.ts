import type { RefObject } from "react";
import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, callback: (event: Event) => void) {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback, ref]);
}

export default useClickOutside;
