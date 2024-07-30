import React from "react";
type buttonProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  rounded?: "sm" | "md" | "lg" | "xl" | "xxl" | "full";
  color?: string;
  background?: string;
  fontSize?: number;
  fontWeight?: number;
  content?: string | React.ReactNode;
};
const Button = ({
  size = "md",
  rounded = "md",
  color = "red",
  background = "green",
  fontSize = 33,
  fontWeight = 500,
  content = "submit",
  ...rest
}: buttonProps) => {
  const buttonSize = {
    xs: "px-2 py-1",
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-5 py-2.5",
    xl: "px-6 py-3",
    xxl: "px-7 py-3.5",
  };
  const buttonRounded = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    full: "rounded-full",
  }; 
  const colorCombination = `text-[${color}] bg-[${background}] `
  return (
    <button
      className={`${buttonSize[size]} ${buttonRounded[rounded]} ${colorCombination} hover:opacity-95`}
      style={{ 
        fontSize: fontSize + "px",
        fontWeight: fontWeight,
        color: color,
        backgroundColor: background,
      }}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
