import { HeroSection, InfoContact } from "./_components";
import { InnerContainer, WhatsAppIcon } from "@/components";

export default function Page() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center gap-6">
      <HeroSection />
      <InfoContact />
      <InnerContainer className="fixed bottom-14 z-10">
        <WhatsAppIcon />
      </InnerContainer>
    </main>
  );
}
