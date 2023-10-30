import {useRef, useState} from "react";
import {titleGames} from "../const/TitleGames";
import '../assets/styles/customSlider.css'
import {logDOM} from "@testing-library/react";
export const CustomSlider = () => {
    const [matches, setMatches] = useState(titleGames)
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderRef = useRef(null)

    const ScrollSlider = (e) => {
        const slider = sliderRef.current;
        if (slider) {
            if (e.deltaY > 0) {
                setCurrentIndex(prevState => prevState + 1);
            } else {
                setCurrentIndex(prevState => prevState - 1);
            }
        }
    }

    console.log(currentIndex)
    return (
        <section ref={sliderRef} onWheel={ScrollSlider} className={'slider_container'}>
            {matches.map((match, matchIndex) => {

                let position = 'nextSlide'

                if(currentIndex === matchIndex) {
                    position = 'activeSlide'
                }
                if (
                    matchIndex === (currentIndex - 1 + matches.length) % matches.length ||
                    (currentIndex === 0 && matchIndex === matches.length - 1)
                ) {
                    position = 'lastSlide';
                }
                return (
                    <div  key={match.id}   className={position}>
                        <div className={position === 'activeSlide' ? 'slider_more_info_active' : 'invisible'}>{match.teamOne}</div>
                        <div className={'main_info_slide'}>
                            <span className={position === 'activeSlide' ? 'slider_more_info_text_active' : 'invisible_text'}>{match.stadion}</span>
                            <h4 className={position === 'activeSlide' ? 'slider_more_info_date_active' : 'slider_more_info_date'}>{match.date}</h4>
                            <span className={position === 'activeSlide' ? 'slider_more_info_text_active' : 'invisible_text'}>{match.time}</span>
                            <a className={position === 'activeSlide' ? 'slider_more_info_btn_active' : 'invisible_text'}>КУПИТЬ БИЛЕТЫ</a>
                        </div>
                        <div className={position === 'activeSlide' ? 'slider_more_info_sec_active' : 'invisible'}>{match.teamTwo}</div>

                    </div>
                    )
            })}
        </section>
    )
}