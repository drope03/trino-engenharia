import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const spanStyles = tv({
  variants: {
    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      third: "text-gray-500",
    },
    font: {
      default: "font-semibold",
    },
  },
  defaultVariants: {
    color: "primary",
    font: "default",
  },
});

export type SpanWeightColorProps = ComponentProps<"span"> &
  VariantProps<typeof spanStyles>;

export function SpanWeightColor({
  children,
  color,
  font,
  className,
  ...props
}: SpanWeightColorProps) {
  return (
    <span {...props} className={spanStyles({ color, font, className })}>
      {children}
    </span>
  );
}
