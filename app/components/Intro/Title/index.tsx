import { myInfo } from "@/app/data/sections";

export default function Title() {
  const { name, profession } = myInfo;
  return (
    <div>
      <span className="text-primary text-5xl">{profession}</span>
      <div className="flex flex-col items-center select-none">
        <span className="custom-secondary-stroke text-transparent text-8xl z-0">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent text-8xl z-10 -mt-16">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent text-8xl z-20 -mt-16">
          {name}
        </span>
        <span className="text-tertiary text-8xl z-30 -mt-16">{name}</span>
      </div>
    </div>
  );
}
