import {useState} from "react";
import { CSSTransition } from 'react-transition-group';
import { BurgerSvg} from "../../assets/img/svg/burger";
import {ExitSvg} from "../../assets/img/svg/exitSvg";
import '../../assets/styles/mobile/headerMobile.css'
export const HeaderMobile = () => {
    const titles = ['БИЛЕТЫ И АБОНИМЕНТЫ', 'Как купить?', 'Правила','Возврат билетов','Войти']

    const [menuOn, setMenuOn] = useState(false)

    return (
        <header className={'m_header'}>
            <CSSTransition in={menuOn} timeout={300} classNames="menu-animation">
                {menuOn === false ?
                    <div  className={'m_burger_btn'} onClick={() => setMenuOn(true)}>
                        <BurgerSvg width={50} height={50} />
                    </div>
                    :
                    <div className={'m_header_container'}>
                        <div className={'m_header_logo'} onClick={() => setMenuOn(false)}>
                            <ExitSvg width={40} height={50}/>
                        </div>
                        <ul className={'m_nav_container'}>
                            {titles.map((item) => (
                                <li className={'m_nav_container_item'}>{item}</li>
                            ))}
                        </ul>
                    </div>
                }
            </CSSTransition>
        </header>
    );

}

