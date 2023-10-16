import './App.css';
import {
  Header,
  MainContainer,
  Sidebar
} from "./components";

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
