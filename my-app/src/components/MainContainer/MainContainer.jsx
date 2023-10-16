import {EmojiList} from "../index";

const MainContainer = () => {
  return (
    <div className="main-container" style={{width:"100%",display: "flex", justifyContent: "center"}}>
      <EmojiList/>
    </div>
  );
};

export default MainContainer;