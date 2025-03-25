import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const paragraphStyles = tv({
  base: "font-normal tracking-tighter",
  variants: {
    typography: {
      p1: "text-lg",
      p2: "text-base",
      p3: "text-sm",
      p4: "text-xs",
      p5: "text-xl",
      p6: "text-2xl",
    },
    color: {
      primary: "",
      secondary: "",
      third: "",
    },
    font: {
      poppins: "font-poppins",
      inter: "font-inter",
    },
  },
  defaultVariants: {
    typography: "p2",
    color: "primary",
    font: "inter",
  },
});

export type ParagraphProps = ComponentProps<"p"> &
  VariantProps<typeof paragraphStyles>;

export function Paragraph({
  color,
  children,
  className,
  typography,
  font,
  ...props
}: ParagraphProps) {
  return (
    <p {...props} className={`${paragraphStyles({ typography, color, font, className })}`}>
      {children}
    </p>
  );
}
