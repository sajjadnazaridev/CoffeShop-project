import { Cup1 } from "../../assets";
import './HurryUpCardStyle.css'

function HurryUpCard() {
  return (
    <div className="container-content-hurry-up-card w-[350px] relative bottom-[-7rem] p-3 bg-secondary rounded-3xl flex justify-between items-center">
      <div className="container-image w-1/2">
        <img src={Cup1} className="w-full h-full" alt="cup image" />
      </div>

      <div className="container-content-card w-1/2 h-32 flex flex-col items-center justify-around">
        <div className="container-text">
          <h4 className="title-hurryupcard font-DancingScript">
            but first coffee
          </h4>
        </div>

        <div className="container-button">
          <button className="btn btn-primary py-1 px-2 font-Leiko border rounded-full text-sm transition-all hover:bg-accent hover:text-secondary">
            Hurry Up <i className="ri-motorbike-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HurryUpCard;
