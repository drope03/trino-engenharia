import { InnerContainer } from "@/components";
import { TitleCopyright, SocialMedias, TermsPolicysAndContact } from "./_ui";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-8 bg-zinc-950">
      <InnerContainer className="flex-col sm:flex-row gap-6 md:gap-0 sm:justify-between">
        <div className="w-auto flex flex-col items-start lg:flex-row gap-6 lg:gap-16">
          <TermsPolicysAndContact />
        </div>
        <SocialMedias />
      </InnerContainer>
      <TitleCopyright />
    </footer>
  );
}
