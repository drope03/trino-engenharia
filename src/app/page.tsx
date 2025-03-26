import { HeroSection, Services, InfoContact } from "./_components";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center mt-14">
      <HeroSection />
      <Services />
      <InfoContact />
    </main>
  );
}
