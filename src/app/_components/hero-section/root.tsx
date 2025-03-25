import { InnerContainer } from "@/components";
import { TextsSection, CarouselCases } from "./_ui";

export function HeroSection() {
  return (
    <InnerContainer className="gap-20">
      <TextsSection />
      <CarouselCases />
    </InnerContainer>
  );
}
