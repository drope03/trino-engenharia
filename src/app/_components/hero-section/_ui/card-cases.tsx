import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export function CardCases({
  index,
  source,
}: {
  index: number;
  source: StaticImageData;
}) {
  return (
    <div className="relative shadow-lg overflow-hidden rounded-md">
      <Button className="absolute bottom-10 right-4 rounded-full z-10 backdrop-blur-md bg-white/10 border border-white/20">
        Saiba mais
        <div className="size-6 flex items-center justify-center bg-primary-dark rounded-full text-text-primary">
          <ArrowUpRight className="m-auto" />
        </div>
      </Button>
      <div className="p-0 relative">
        <Image
          src={source}
          alt={`Imagem ${index + 1}`}
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-zinc-950/90 via-zinc-800/80 to-zinc-700/10 py-3 pl-4 flex flex-col justify-end rounded-b-md">
          <h3 className="text-white text-sm font-semibold">Título Aqui</h3>
          <p className="text-white/80 text-xs">Descrição curta aqui</p>
        </div>
      </div>
    </div>
  );
}
