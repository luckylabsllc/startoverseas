import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Overseas</h1>
        <p className="text-lg mb-8">Your journey begins here.</p>
        <Button
          className="
            px-8 py-4 
            text-lg font-bold text-[#fff8e7]
            bg-[#e03347] hover:bg-[#c92e40]
            border border-black
            rounded-lg
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1),inset_0_1px_4px_rgba(0,0,0,0.25)]
            transition-all duration-200
            transform hover:translate-y-[2px] hover:translate-x-[2px]
          "
        >
          GO OVERSEAS
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
