import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import "swiper/css";

import reviewImage1 from "../icons/review1-image.svg";
import reviewImage2 from "../icons/review2-image.svg";
import reviewImage3 from "../icons/review3-image.svg";
import reviewImage4 from "../icons/review4-image.svg";
import star from "../icons/icon - star.svg";
import emptyStar from "../icons/star-empty.svg";
import arrowLeft from "../icons/icon - arrow-left.svg";
import arrowRight from "../icons/icon - arrow-right.svg";

const reviewsInfo = [
    {
        name: 'Sara Cristian',
        career: 'Nationwide Group',
        image: reviewImage1,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, star],
    },
    {
        name: 'David Anderson',
        career: 'Riverbed Technology',
        image: reviewImage2,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, star],
    },
    {
        name: 'Nika Woo',
        career: 'Seppi Technology Associates',
        image: reviewImage3,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, emptyStar],
    },
    {
        name: 'Jack Henderson',
        career: 'Nationwide Group',
        image: reviewImage4,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, emptyStar],
    },
    {
        name: 'Sara Cristian',
        career: 'Nationwide Group',
        image: reviewImage1,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, star],
    },
    {
        name: 'David Anderson',
        career: 'Riverbed Technology',
        image: reviewImage2,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, star],
    },
    {
        name: 'Nika Woo',
        career: 'Seppi Technology Associates',
        image: reviewImage3,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, emptyStar],
    },
    {
        name: 'Jack Henderson',
        career: 'Nationwide Group',
        image: reviewImage4,
        description: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Nunc sed blandit libero volutpat sed cras.",
        stars: [star, star, star, star, emptyStar],
    },
]


const Reviews = () => {
    return <div class="container reviews-container">
        <section class="row reviews" id="reviews">
            <div class="flex-display reviews-title">
                <div class="flex-display"><div class="hr-title-line"></div></div>
                <div class="page-title">Thanks for your sweet words to us</div>
                <div class="swiper-pagination swiper__pagination"></div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                }}
                pagination={{
                    el: ".swiper__pagination",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".swiper__next",
                    prevEl: ".swiper__prev",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper swiper reviews__swiper"
            >
                {reviewsInfo.map((review) => <div class="swiper-wrapper swipper__wrapper"><SwiperSlide>
                    <div class="swiper-slide">
                        <div class="review">
                            <div class="flex-display review__info">
                                <div class="review__image">
                                    <img src={review.image} alt="review" />
                                </div>
                                <div class="review__details">
                                    <div class="review__name">{review.name}</div>
                                    <div class="review__career">
                                        {review.career}
                                    </div>
                                </div>
                            </div>
                            <div class="review__description">
                                {review.description}
                            </div>
                            <div class="review__stars">
                                {review.stars.map((starImg) => <img src={starImg} alt="star" />)}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </div>)}

                <div class="review__buttons">
                    <button class="review__button swiper__prev"><img src={arrowLeft} alt="arrow left" /></button>
                    <button class="review__button swiper__next"><img src={arrowRight} alt="arrow right" /></button>
                </div>
            </Swiper>
        </section>

    </div>
}
export default Reviews;