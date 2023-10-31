import {DoorSignInSvg} from "../../assets/img/svg/doorSignInSvg";
import {BurgerSvg} from "../../assets/img/svg/burger";
import '../../assets/styles/desktop/headerDesktop.css'
export const HeaderDesktop = () => {

    const titles = [ 'как купить?', 'правила','возврат билетов',]

    function Capitalizer(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <header className={'header_container'}>
            <a className={'header_title'}>БИЛЕТЫ И АБОНИМЕНТЫ</a>
            <nav className={'header_nav'}>
                {titles.map((e, index) => (
                    <a key={index} className={'header_nav_item'}>{Capitalizer(e)}</a>
                ))}
            </nav>
            <div className={'header_tabs'}>
                <a className={'header_sign_in_container'}>
                    <DoorSignInSvg width={25} height={25}/>
                    <span>Войти</span>
                </a>
                <a className={'header_burger'}>
                    <BurgerSvg width={45} height={45}/>
                </a>
            </div>
        </header>
    )
}