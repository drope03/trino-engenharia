import Link from "next/link";
import { supportLinks } from "@/constants";
import { InnerContainer } from "@/components";

export function InfoTop() {
  return (
    <section className="w-full h-9 flex items-center justify-center bg-primary-dark border-b-[2px] border-solid border-primary">
      <InnerContainer className="flex-row items-center justify-between">
        <span className="text-[#2B1D12] font-medium text-sm">(11) 98069-6105</span>
        <nav className="hidden lg:flex gap-4">
          {supportLinks.map((item) => (
            <Link key={item?.id} href={item?.href} className="text-[#2B1D12] font-medium text-sm">
              {item?.name}
            </Link>
          ))}
        </nav>
      </InnerContainer>
    </section>
  );
}
