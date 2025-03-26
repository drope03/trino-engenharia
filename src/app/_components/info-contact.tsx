import BgContactInfo from "@/assets/bg-contact.svg";
import { InnerContainer } from "@/components";

export function InfoContact() {
  return (
    <section
      className="w-full min-h-96 bg-cover bg-center flex flex-col items-center justify-center object-contain  p-6"
      style={{ backgroundImage: `url(${BgContactInfo.src})` }}
    >
      <InnerContainer>
        <div>aaa</div>
      </InnerContainer>
      {/* <p className="text-lg font-semibold text-center">
        Endereço: Alameda Grajaú, 60 sala 1013 - Alphaville - Barueri
      </p>
      <a
        href="https://www.instagram.com/Trino.engenhariaterraplanagem"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary rounded-full transition-all"
      >
        <Instagram className="w-5 h-5" />
        <span>@Trino.engenhariaterraplanagem</span>
      </a>
      <p className="mt-4 text-lg font-medium"> Tel: (11) 94963-8434</p> */}
    </section>
  );
}
