import { Title } from "@/components";

export function TextsSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
      <article className="w-full flex flex-col items-center text-center gap-2">
        <Title
          typography="h1"
          color="gradient"
          font="poppins"
          className="uppercase leading-[48px]"
        >
          Excelência , qualidade <br /> competência do início ao fim
        </Title>
      </article>
    </section>
  );
}
