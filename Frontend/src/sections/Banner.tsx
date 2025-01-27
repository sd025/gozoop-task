import React from "react";
import CustomButton from "../common/Button";
import photo from "../assets/photo.avif";


const Banner: React.FC = () => {
  return (
    <div className="relative h-screen w-full border-8 border-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${photo})`,
          filter: "brightness(50%) saturate(150%)",
        }}
      ></div>

      <div className="absolute inset-y-0 left-0 w-1/2 bg-red-950/70 z-10"></div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="text-left">
          <h2 className="text-white md:text-7xl font-semibold font-display text-6xl tracking-tight mb-6">
            INDIA'S BIGGEST
            <br />
            REAL ESTATE
            <br />
            <span className="font-cursive text-center block">Uprising</span>
          </h2>
          <div className="flex justify-center">
            <CustomButton className="font-display bg-red-500 text-3xl hover:bg-red-700 text-white font-medium px-4 py-1 transition duration-300">
              ENQUIRE NOW
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
