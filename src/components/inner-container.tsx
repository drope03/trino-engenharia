import { twMerge } from "tailwind-merge";

export function InnerContainer({
  children,
  className,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={twMerge(
        `w-[90%] h-auto flex flex-col lg:w-[80%] xl:w-[1026px] 2xl:w-[1300px] 3xl:w-[1536px]`,
        className
      )}
      // style={{ border: "2px solid #00000020" }}
    >
      {children}
    </div>
  );
}
