import { InnerContainer } from "@/components";
import { ButtonScrollToTop } from "./button-scroll-to-top";

export function TitleCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full h-auto sm:h-12 flex flex-col items-center justify-center bg-zinc-900/65 py-8 sm:py-0 mt-12">
      <InnerContainer className="relative gap-2 items-center text-center text-base font-medium sm:flex-row sm:justify-between text-primary-dark">
        <h3>
          Copyright ©{currentYear}{" "}
          <span className="text-highlight font-semibold">Trino.</span>{" "}
        </h3>
        <h3 className="mb-2 sm:mb-0">Todos os direitos estão reservados.</h3>
        <ButtonScrollToTop />
      </InnerContainer>
    </section>
  );
}
