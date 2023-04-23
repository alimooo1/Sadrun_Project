import { useEffect } from "react";

export default function useOutsideHandler(ref, clickOut, clickIn) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOut();
      } else if (ref.current && ref.current.contains(event.target)) {
        clickIn();
      } else {
        console.log("Ref is not exist.");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
