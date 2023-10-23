import { myInfo } from "@/app/data/sections";

export default function Title() {
  const { name, profession } = myInfo;
  return (
    <div className="max-sm:text-center">
      <span className="text-primary sm:text-5xl text-2xl">{profession}</span>
      <div className="flex flex-col items-center select-none max-sm:mt-8">
        <span className="custom-secondary-stroke text-transparent sm:text-8xl text-5xl z-0">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent sm:text-8xl text-5xl z-10 sm:-mt-16 -mt-8">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent sm:text-8xl text-5xl z-20 sm:-mt-16 -mt-8">
          {name}
        </span>
        <span className="text-tertiary sm:text-8xl text-5xl z-30  sm:-mt-16 -mt-8">
          {name}
        </span>
      </div>
    </div>
  );
}
