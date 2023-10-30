import {Header} from "./components/header";
import './assets/styles/App.css'
import './assets/styles/mainInfo.css'
import {CaruselCustom} from "./components/caruselCustom";
import {useState} from "react";
import {titleGames} from "./const/TitleGames";
import {CustomSlider} from "./components/customSlider";
function App() {




  return (
    <div className="App">
        <div className={'main_container'}>
            <Header/>
            <CustomSlider/>
        </div>
    </div>
  );
}

export default App;
