import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Input = ({ errorMessage, ...otherProps }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
  }, [errorMessage]);

  return (
    <>
      <input
        className="form-input"
        onFocus={() => setShowError(false)}
        {...otherProps}
      />
      <div className="w-full h-[25px] flex items-center justify-start text-right pr-5">
        {showError ? (
          <span className="text-red-500 font-vazirmatn text-[13px]">
            {errorMessage}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
