import { myInfo } from "@/app/data/sections";

export default function Title() {
  const { name, profession } = myInfo;
  return (
    <div className="md:text-left text-center">
      <span className="text-primary md:text-5xl text-2xl">{profession}</span>
      <div className="flex flex-col items-center select-none max-md:mt-8 mt-12">
        <span className="custom-secondary-stroke text-transparent md:text-8xl text-5xl z-0">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent md:text-8xl text-5xl z-10 md:-mt-16 -mt-8">
          {name}
        </span>
        <span className="custom-secondary-stroke text-transparent md:text-8xl text-5xl z-20 md:-mt-16 -mt-8">
          {name}
        </span>
        <span className="text-tertiary md:text-8xl text-5xl z-30  md:-mt-16 -mt-8">
          {name}
        </span>
      </div>
    </div>
  );
}
