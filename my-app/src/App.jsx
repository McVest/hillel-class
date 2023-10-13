import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MainContainer} from "./components/MainContainer/MainContainer";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="main-content">
        <Sidebar/>
        <MainContainer/>
      </div>
    </div>
  );
};

export default App;
