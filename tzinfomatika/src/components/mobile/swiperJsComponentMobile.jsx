import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import {titleGames} from "../../const/TitleGames";
import {MoreInfoTeamMobile} from "./moreInfoTeamMobile";
import '../../assets/styles/mobile/customSliderMobile.css'
export const SwiperJsComponentMobile = () => {
  const [activeSlideIndex,setActiveSlideIndex] =useState(0)

  return (
      <>
      <div className={'m_swiper_custom_wrapper'}>
        <Swiper
            slidesPerView={5}
            centeredSlides={true}
            className="m_mySwiper"
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
                  <div className={'m_swiper_item'}>
                    <div
                        className={index === activeSlideIndex ? 'm_swiper_item_text' : 'm_invisible_text'}>{match.stadion}</div>
                    <div className={index === activeSlideIndex ? 'm_swiper_item_text_other' : 'm_swiper_item_text_other_disable'}>{match.date.toUpperCase()}</div>
                    <div
                        className={index === activeSlideIndex ? 'm_swiper_item_text' : 'm_invisible_text'}>{match.time}</div>
                    <a className={index === activeSlideIndex ? 'm_slider_item_btn_active' : 'm_invisible_text'}>Купить билеты</a>
                  </div>
                </SwiperSlide>
            )

          })}
        </Swiper>
      </div>
    <MoreInfoTeamMobile
        activeSlideIndex={activeSlideIndex}
        teamOne={titleGames[activeSlideIndex].teamOne}
        teamTwo={titleGames[activeSlideIndex].teamTwo}
    />
      </>
  )
}