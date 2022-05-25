import React from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Loader from "../../../helper/Loader";
import { useQuery } from "react-query";
import ShowReview from "./ShowReview";

const Review = () => {
  const { isLoading, data } = useQuery("reviewData", () =>
    fetch(`http://localhost:5000/review`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
      }
      return res.json();
    })
  );

  console.log(data);

  if (isLoading) return <Loader></Loader>;
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((review) => (
          <SwiperSlide>
            <ShowReview review={review} key={review._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
