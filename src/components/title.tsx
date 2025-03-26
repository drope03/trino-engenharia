import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const titleStyles = tv({
  base: "font-semibold",
  variants: {
    typography: {
      h1: "text-2xl xl:text-4xl 2xl:text-[40px]",
      h2: "text-base md:text-xl xl:text-2xl 2xl:text-3xl",
      h3: "text-sm md:text-base xl:text-xl",
      h4: "text-xl",
      h5: "",
      h6: "text-xs md:text-sm ",
    },
    color: {
      primary: "text-black",
      secondary: "text-text-third",
      third: "text-gray-500",
      gradient:"bg-gradient-to-r from-[#000000] via-[#1e1e1e] to-[#1e1e1e98] text-transparent bg-clip-text",
    },
    font: {
      poppins: "font-poppins",
      inter: "font-inter",
    },
  },
  defaultVariants: {
    typography: "h2",
    color: "primary",
    font: "poppins",
  },
});

export type TitleProps = ComponentProps<"h1"> &
  VariantProps<typeof titleStyles>;

export function Title({
  color,
  className,
  typography,
  font,
  ...text
}: TitleProps) {
  return (
    <h1
      {...text}
      className={`${titleStyles({ typography, color, font, className })}`}
    >
      {text.children}
    </h1>
  );
}
