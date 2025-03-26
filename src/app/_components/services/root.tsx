import { BoxCard } from "./box-card";
import { services } from "@/constants";
import { InnerContainer } from "@/components";

export function Services() {
  function getGridClasses(index: number): string {
    switch (index) {
      case 0:
        return "lg:row-span-3";
      case 1:
        return "lg:row-span-3 lg:col-start-3";
      case 2:
        return "lg:row-span-3 lg:col-start-5";
      case 3:
        return "lg:row-span-3 lg:row-start-5";
      case 4:
        return "lg:row-span-3 lg:col-start-3 lg:row-start-5";
      case 5:
        return "lg:row-span-3 lg:col-start-5 lg:row-start-5";
      default:
        return "";
    }
  }
  return (
    <section className="w-full min-h-96 bg-cover bg-center flex flex-col items-center justify-center py-6">
      <InnerContainer>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-5 lg:grid-rows-7 lg:gap-2">
          {services.map((item, index) => (
            <BoxCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              extraClass={getGridClasses(index)}
            />
          ))}
        </div>
      </InnerContainer>
    </section>
  );
}
