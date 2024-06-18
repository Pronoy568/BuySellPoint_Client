import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/Banner/chess5.jpg";
import img2 from "../../../assets/Banner/football3.jpg";
import img3 from "../../../assets/Banner/cricket1.jpg";
import img4 from "../../../assets/Banner/fruit4.jpg";
import img5 from "../../../assets/Banner/meal1.jpg";
import img6 from "../../../assets/Banner/meal4.jpg";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div className="h-screen">
          <img src={img1} alt="image1" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={img2} alt="image2" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={img3} alt="image3" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={img4} alt="image4" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={img5} alt="image5" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={img6} alt="image6" className="h-full w-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
