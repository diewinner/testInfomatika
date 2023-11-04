import useWindowSize from "./hooks/useWindowSize";
import './assets/styles/desktop/mainDesktop.css'
import {MainPageDesktop} from "./components/desktop/mainPageDesktop";
import {MainPageMobile} from "./components/mobile/mainPageMobile";
function App() {
    const windowSize = useWindowSize()
    if (windowSize.desktop) {
        return <MainPageDesktop  />

    } else if (windowSize.mobile) {
        return <MainPageMobile />;
    }
}

export default App;
