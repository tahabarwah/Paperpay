import React from "react";

const sizes = {
  s: "text-[13px] font-thin",
  "3xl": "text-lg font-medium",
  xl: "text-base font-normal",
};

const fonts = {
  outfit: "font-outfit",
  palanquin: "font-palanquin",
};

const Text = ({
  children,
  className = "",
  as,
  size = "xl",
  font = "outfit",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900  ${fonts[font]} ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
