import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const titleStyles = tv({
  base: "font-semibold",
  variants: {
    typography: {
      h1: "text-xl md:text-2xl xl:text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "",
      h6: "text-xs md:text-sm lg:text-base",
    },
    color: {
      primary: "text-black",
      secondary: "text-gray-700",
      third: "text-gray-500",
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
