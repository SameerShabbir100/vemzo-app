"use client";

import { ReviewCard } from "@/app/components/common/review-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const REVIEWS = [
  {
    name: "John Smith",
    position: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Outstanding experience! They delivered our SaaS platform with exceptional quality and excellent communication.",
  },
  {
    name: "Sarah Johnson",
    position: "Founder, Ecommerce Hub",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Professional team with strong technical skills. Our Shopify app exceeded expectations.",
  },
  {
    name: "Sarah John",
    position: "Founder, Ecommerce Hub",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Professional team with strong technical skills. Our Shopify app exceeded expectations.",
  },
  {
    name: "Michael Browns",
    position: "CTO, FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=56",
    review:
      "Fast delivery, clean architecture, and impressive UI. Highly recommended.",
  },
  {
    name: "Michael Brown",
    position: "CTO, FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=60",
    review:
      "Fast delivery, clean architecture, and impressive UI. Highly recommended.",
  },
  {
    name: "Emily Wilson",
    position: "Creative Director",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Amazing frontend expertise. Our website performance improved significantly.",
  },
  {
    name: "Emily Wilsons",
    position: "Creative Director",
    image: "https://i.pravatar.cc/150?img=49",
    review:
      "Amazing frontend expertise. Our website performance improved significantly.",
  },
  {
    name: "Emil Wilson",
    position: "Creative Director",
    image: "https://i.pravatar.cc/150?img=51",
    review:
      "Amazing frontend expertise. Our website performance improved significantly.",
  },
];

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative flex flex-col items-center justify-center py-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.05),transparent_65%)]" />

      <div className="relative z-10 w-full max-w-7xl px-5">
         <div className="text-center mb-16">
  <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
    What Our Clients Say
  </span>

  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Real Feedback.
    <span className="text-[#00dc82]"> Real Results.</span>
  </h2>

  <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
    Client satisfaction is at the heart of everything we do. From startups to
    growing enterprises, we help businesses achieve their goals through
    innovative, reliable, and high-quality software solutions.
  </p>
</div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="testimonialSwiper"
        >
          {REVIEWS.map((review) => (
            <SwiperSlide
              key={review.name}
              className="max-w-[380px]"
            >
              <ReviewCard
                image={review.image}
                name={review.name}
                position={review.position}
                review={review.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .testimonialSwiper .swiper-pagination-bullet {
          background: rgba(0, 220, 130, 0.3) !important;
          opacity: 1;
        }
        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #00dc82 !important;
          box-shadow: 0 0 20px rgba(0, 220, 130, 0.4);
        }
      `}</style>
    </section>
  );
};