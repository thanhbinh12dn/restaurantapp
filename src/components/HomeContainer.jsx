import React from "react";

import { heroData } from "./utils/data";

import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="flex flex-col items-start justify-center gap-6 py-2 flex-1">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
            {" "}
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nam
          laudantium quod blanditiis tempora ipsa! Eaque dolorem, dolore quas
          saepe unde necessitatibus reprehenderit fuga laudantium illo earum
          sunt adipisci inventore.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="flex items-center py-2 flex-1 relative">
        <img
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          src={HeroBg}
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-wrap gap-2  lg:px-24 py-4">
          {heroData &&
            heroData.map((hero) => (
              <div
                key={hero.id}
                className="lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={hero.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {hero.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                  {hero.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {hero.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
