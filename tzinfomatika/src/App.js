import {Header} from "./components/header";
import './assets/styles/App.css'
import './assets/styles/mainInfo.css'
import {CaruselCustom} from "./components/caruselCustom";
function App() {
  return (
    <div className="App">
        <Header/>
        <div className={'main_container'}>
            <div className={'carusel_custom_container'}>
                <CaruselCustom/>
            </div>

        </div>

    </div>
  );
}

export default App;
