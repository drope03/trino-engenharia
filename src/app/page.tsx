import { HeroSection, InfoContact } from "./_components";

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-6">
      <HeroSection />
      <InfoContact />
    </main>
  );
}
