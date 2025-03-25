import { WhatsAppIcon } from "@/components";
import { HeroSection, InfoContact } from "./_components";

export default function Page() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center gap-6">
      <HeroSection />
      <InfoContact />
      <WhatsAppIcon />
    </main>
  );
}
