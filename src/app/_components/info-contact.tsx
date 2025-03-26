import BgContactInfo from "@/assets/bg-contact.svg";
import { InnerContainer } from "@/components";

export function InfoContact() {
  return (
    <section
      className="w-full min-h-[24rem] bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${BgContactInfo.src})` }}
    >
      <InnerContainer className="flex flex-col items-center text-center space-y-6">
        <p className="text-lg md:text-xl font-semibold text-white">
          Endereço: Alameda Grajaú, 60 sala 1013 - Alphaville - Barueri
        </p>
        <a
          href="https://www.instagram.com/Trino.engenhariaterraplanagem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full transition-all hover:bg-primary-dark"
        >
          <span className="text-white text-base md:text-lg">@Trino.engenhariaterraplanagem</span>
        </a>
        <p className="text-lg md:text-xl font-medium text-white">
          Tel: (11) 94963-8434
        </p>
      </InnerContainer>
    </section>
  );
}
