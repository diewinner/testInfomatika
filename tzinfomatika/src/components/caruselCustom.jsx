import Carousel from 'react-bootstrap/Carousel';
import {titleGames} from "../const/TitleGames";
import {useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/customBootstrap.css'
export const CaruselCustom = () => {
    const carouselRef = useRef(null);
    const [active, setActive]  = useState(null)
    const [displayBlock, setDisplayBlock] = useState(false)
    const elementRef = useRef(null)
    function SelectedItem(selectedIndex, e) {

        setActive(selectedIndex)
        console.log(`Выбран слайд с индексом ${selectedIndex}`)
    }

    const handleScroll = (e) => {
        const carousel = carouselRef.current;
        if (carousel) {
            if (e.deltaY > 0) {
                carousel.next();
            } else {
                carousel.prev();
            }
        }
    };

    const checkStyle = (e) => {
        const element = elementRef.current;
        if(element && element.classList.contains('active')) {

        }
    }
  return (
      <div className={'carusel_container'} onWheel={handleScroll}>
        <Carousel
          className={'custom_carusel'}
          indicators={false}
          interval={null}
          touch={true}
          ref={carouselRef}
          controls={false}
          slide={true}
          onSelect={SelectedItem}>
            {titleGames.map((e) => (
              <Carousel.Item ref={elementRef} onWheel={checkStyle}>
                  <div className={'carusel_item_container'}>
                      <div className={'carusel_item_child_first'}>{e.teamOne}</div>
                    <div className={'hexagon'}>
                      <span>{e.stadion}</span>
                      <span>{e.date}</span>
                      <span>{e.time}</span>
                      <a className={'hexagon_btn'}>КУПИТЬ БИЛЕТ</a>
                    </div>
                      <div className={'carusel_item_child_sec'}>{e.teamTwo}</div>
                  </div>
              </Carousel.Item>
          ))}
        </Carousel>
      </div>
  )
}