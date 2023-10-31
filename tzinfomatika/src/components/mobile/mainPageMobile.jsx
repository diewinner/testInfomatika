import {HeaderMobile} from "./headerMobile";
import {SwiperJsComponentMobile} from "./swiperJsComponentMobile";
import '../../assets/styles/mobile/mainMobile.css'
export const MainPageMobile = () => {
    return (
        <div className={'m_main_container'}>
            <HeaderMobile/>
            <SwiperJsComponentMobile/>
        </div>
    )
}