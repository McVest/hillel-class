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
      <div style={{display:"flex"}}>
        <Sidebar/>
        <MainContainer/>
      </div>
    </div>
  );
};

export default App;
