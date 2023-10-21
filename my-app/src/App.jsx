import './App.css';
import {Home, Layout,UserDetails,NoPage} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/user/:userId" component={<UserDetails/>}/>
          <Route path="*" component={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
