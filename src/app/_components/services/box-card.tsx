import { ArrowRight } from "lucide-react";
import { Title } from "@/components";

export function BoxCard({
  title,
  icon: Icon,
  extraClass = "",
}: {
  title: string;
  description: string;
  extraClass?: string;
  icon: React.ElementType;
}) {
  return (
    <div className={`flex flex-col items-center rounded-lg group ${extraClass} p-2`}>
      <div className="w-full min-h-[144px] flex flex-col justify-between text-center">
        <div className="flex justify-center">
          <Icon className="w-6 h-6 text-text-third" />
        </div>
        <div className="flex items-start justify-center h-12 ">
          <Title typography="h3" className="font-normal xl:text-base" color="third">
            {title}
          </Title>
        </div>
        
        <div className="flex justify-center mt-3">
          <div className="size-6 flex items-center justify-center rounded-full bg-primary">
            <ArrowRight className="w-4 h-4 text-text-secondary rotate-90" />
          </div>
        </div>
      </div>
      {/* Descrição (comentada por enquanto) */}
      {/* 
      <div className="mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="bg-primary p-2 rounded">
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
      */}
    </div>
  );
}
