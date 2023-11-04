import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel} from "swiper/modules";
import {MoreInfoTeamDesktop} from "./moreInfoTeamDesktop";
import {titleGames} from "../../const/TitleGames";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/styles/desktop/customSliderDesktop.css'

export const SwiperJsComponentDesktop = () => {
    const [activeSlideIndex,setActiveSlideIndex] =useState(0)

    return (
        <div className={'desktop_container'}>
            <div className={'swiper_custom_wrapper'}>
                <Swiper
              slidesPerView={5}
              centeredSlides={true}
              className="mySwiper"
              mousewheel={true}
              simulateTouch={true}
              modules={[Mousewheel]}
              slideToClickedSlide={true}
              onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.activeIndex);
              }}
          >
              {titleGames.map((match, index) => {
                return(
                    <SwiperSlide key={match.id}>
                        <div className={'swiper_item'}>
                            <div
                                className={index === activeSlideIndex ? 'swiper_item_text' : 'invisible_text'}>{match.stadion}</div>
                            <div className={index === activeSlideIndex ? 'swiper_item_text_other' : 'swiper_item_text_other_disable'}>{match.date.toUpperCase()}</div>
                            <div
                                className={index === activeSlideIndex ? 'swiper_item_text' : 'invisible_text'}>{match.time}</div>
                            <a className={index === activeSlideIndex ? 'swiper_item_btn_active' : 'invisible_text'}>Купить билеты</a>
                        </div>
                    </SwiperSlide>
                    )

              })}
          </Swiper>
      </div>
            <MoreInfoTeamDesktop
                activeSlideIndex={activeSlideIndex}
                teamOne={titleGames[activeSlideIndex].teamOne}
                teamTwo={titleGames[activeSlideIndex].teamTwo}
            />
    </div>
  )
}