/* eslint-disable react/no-unknown-property */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/Electronics/electronics2.png";
import slide2 from "../../../assets/Food/food1.jpg";
import slide3 from "../../../assets/Sports/SP3.jpg";
import slide4 from "../../../assets/Sports/SP4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularItem = () => {
  return (
    <section className="w-11/12 mx-auto">
      <SectionTitle heading={"Popular Item"} />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <div className="relative h-64">
            <img
              src={slide1}
              alt="image1"
              className="h-full w-full object-cover rounded"
            />
            <h3 className="hidden md:block absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 uppercase">
              Laptop
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-64">
            <img
              src={slide2}
              alt="image2"
              className="h-full w-full object-cover rounded"
            />
            <h3 className="hidden md:block absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 uppercase">
              Burger
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-64">
            <img
              src={slide3}
              alt="image3"
              className="h-full w-full object-cover rounded"
            />
            <h3 className="hidden md:block absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 uppercase">
              Football
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-64">
            <img
              src={slide4}
              alt="image4"
              className="h-full w-full object-cover rounded"
            />
            <h3 className="hidden md:block absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 uppercase">
              Chess
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination mt-4"></div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #6b7280; /* Background color of pagination bullets */
          width: 8px; /* Adjust width as needed */
          height: 8px; /* Adjust height as needed */
          margin: 0 4px; /* Adjust margin between bullets */
          border-radius: 50%; /* Make bullets round */
        }

        .swiper-pagination-bullet-active {
          background-color: #ffffff; /* Active bullet color */
        }
      `}</style>
    </section>
  );
};

export default PopularItem;
