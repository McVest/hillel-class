import {TodoApp} from "../index";

const MainContainer = () => {
  return (
    <div className="main-container" style={{width:"100%",display: "flex", justifyContent: "center"}}>
      <TodoApp/>
    </div>
  );
};

export default MainContainer;