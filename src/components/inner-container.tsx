import { twMerge } from "tailwind-merge";

export function InnerContainer({
  children,
  className,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <section
      className={twMerge(
        `w-[90%] h-auto flex flex-col lg:w-[85%] xl:w-[1200px] 2xl:w-[1400px]`,
        className
      )}
      // style={{ border: "2px solid #00000020" }}
    >
      {children}
    </section>
  );
}
