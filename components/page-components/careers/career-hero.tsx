import CareerHeroImage from "./career-hero-image";
import CareerHeroContent from "./careers-hero-content";

const CareerHeroSection = () => {
  return (
    <section className="bg-[url('/images/shapes/horizontal-shape.png')] bg-no-repeat bg-cover">
      <div className="container py-20 flex flex-col items-center justify-center">
        {/* Badge */}
        <div className="bg-primary/80 px-4 py-2 w-fit rounded-3xl text-white text-base font-normal">
          Careers
        </div>
        <div className="flex justify-center items-center flex-wrap space-y-7 gap-16">
          <CareerHeroImage
            imageUrl="https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286988.jpg"
            className="rounded-tr-[120px] rounded-bl-[120px]"
          />
          <CareerHeroContent />

          <CareerHeroImage
            imageUrl="https://img.freepik.com/free-photo/team-working-animation-project_23-2149269901.jpg"
            className="rounded-tl-[120px] rounded-br-[120px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
