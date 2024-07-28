import React from "react";
interface spinnerProps {
  color?: string;
  sz?: "xs" | "sm" | "lg" | "xl" | "xxl";
  rounded?: boolean;
}
const Spinner = ({ color = "red", sz = "xxl", rounded=true }: spinnerProps) => {
  const spinnerSize = {
    xs: "w-2 h-2",
    sm: "w-4 h-4",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    xxl: "w-16 h-16",
  };
  return (
    <>
      {rounded ? (
        <div
          className={`spinner animate-spin ${spinnerSize[sz]}  border-4 rounded-full border-b-transparent`}
          style={{
            borderLeftColor: color,
            borderRightColor: color,
            borderTopColor: color,
          }}
        ></div>
      ) : (
        <div
          className={`${spinnerSize[sz]} border-t-4 border-b-4     rounded-full animate-spin  `}
          style={{
            borderBottomColor: color,
            borderTopColor: color,
          }}
        ></div>
      )}
    </>
  );
};

export default Spinner;
