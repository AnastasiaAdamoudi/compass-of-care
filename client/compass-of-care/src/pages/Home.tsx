import { logoWithWords } from "../assets";

const Home = () => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden bg-tertiary inset-0 w-full h-full min-h-screen">
      <div className="flex flex-col items-center justify-center mx-auto text-center w-[90%] lg:w-[70%]">
        <img
          src={logoWithWords}
          alt="Compass of Care Logo"
          className="mt-3 sm:mt-3 md:mt-2 lg:mt-12 w-full sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[40%] h-auto"
        />
        <h1 className="text-5xl lg:text-6xl font-bold font-title text-primary pt-2 md:-mt-8 lg:pt-4 w-[90%] lg:w-full">
          Compass of Care
        </h1>
        <p className="mx-auto text-primary font-subtitle text-lg md:text-xl mt-5 w-[70%] lg:w-[50%] xl:w-[30%]">
          Your ultimate oranisational friend to help you manage your staff,
          clients, events and documets.
        </p>
      </div>
    </div>
  );
};

export default Home;
