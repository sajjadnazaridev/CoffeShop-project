import { coffeeImgHero } from "../assets";
import HurryUpCard from "./HurryUpCard/HurryUpCard";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="container-hero h-screen">
      <Navbar />

      <div className="container-content-hero flex items-center p-10">
        <div className="container-left-content flex flex-col w-1/2">
          <h2 className="heading-main-hero font-DancingScript text-8xl">
            Elza Coffee
          </h2>

          <p className="text-left font-Leiko text-accent/60 text-xl mt-14 pr-10">
            Todays good mood is sponsored by coffee search for your coffee now
          </p>

          <div className="container-buttons-in-hero w-full flex items-center justify-evenly mt-16 font-Leiko">
            <a
              href="#"
              className="btn-action-hero text-accent bg-accent/40 py-2 px-8 rounded-full transition-all hover:bg-accent hover:text-secondary"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="btn-action-hero text-accent bg-accent/40 py-2 px-8 rounded-full transition-all hover:bg-accent hover:text-secondary"
            >
              Catalog
            </a>
          </div>

          <div className="container-card-hurry-up">
            <HurryUpCard />
          </div>
        </div>

        <div className="container-right-image flex items-center w-1/2">
          <div className="bg-gradient-img h-2/3 w-1/2 bg-gradient-to-b from-secondary absolute right-0 top-0 -z-10"></div>
          <div className="container-img-coffee-hero">
            <img src={coffeeImgHero} alt="coffee img hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
