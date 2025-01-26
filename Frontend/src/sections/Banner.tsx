import React from "react";
import CustomButton from "../common/Button";
import photo from "../assets/photo.avif";

const Banner: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${photo})`,
          filter: "brightness(50%) saturate(150%)",
        }}
      ></div>

      <div className="absolute inset-0 y-0 left-0 w-1/2 bg-red-950/70 z-10"></div>

      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-grow flex items-center">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-white md:text-7xl font-semibold font-display text-6xl tracking-tight mb-6">
              INDIA'S BIGGEST
              <br />
              REAL ESTATE
              <br />
              <span className="font-cursive">Uprising</span>
            </h2>
              <CustomButton className="bg-red-500 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition duration-300">
                ENQUIRE NOW
              </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
