import { InnerContainer } from "@/components";
import RowsHero from "@/assets/rows-hero.svg";
import { TextsSection, CarouselCases } from "./_ui";

export function HeroSection() {
  return (
    <InnerContainer>
      <section
        className="w-full flex flex-col items-center text-center gap-12 sm:gap-20 bg-cover bg-center pt-4"
        style={{ backgroundImage: `url(${RowsHero.src})` }}
      >
        <TextsSection />
        <CarouselCases />
      </section>
    </InnerContainer>
  );
}
