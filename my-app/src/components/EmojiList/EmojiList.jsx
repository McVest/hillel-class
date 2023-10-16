import React, {useEffect, useState} from 'react';

const EmojiItem = ({emoji, onClick}) => {
  return (
    <div>
            <span style={{fontSize: '20px', margin: '10px', cursor: 'pointer'}} onClick={onClick}>
                {emoji}
            </span>
    </div>
  );
};

const ShowResultsButton = ({emojis}) => {
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);
  
  const toggleResults = () => {
    setShowResults(!showResults);
  };
  
  useEffect(() => {
    let max = 0;
    let winnerEmoji = null;
    
    for (const emoji of emojis) {
      if (emoji.votes > max) {
        max = emoji.votes;
        winnerEmoji = emoji;
      }
    }
    setWinner(winnerEmoji);
  }, [emojis]);
  
  return (
    <div style={{marginTop: '20px'}}>
      <button onClick={toggleResults}>{showResults ? 'Hide Results' : 'Show Results'}</button>
      {showResults && winner && <p>The winner is {winner.emoji} with {winner.votes} votes!</p>}
    </div>
  );
};

const EmojiList = () => {
  const [emojis, setEmojis] = useState([
    {emoji: '😊', votes: 0},
    {emoji: '😂', votes: 0},
    {emoji: '😍', votes: 0},
  ]);
  
  const handleEmojiClick = (index) => {
    const newEmojis = [...emojis];
    newEmojis[index].votes++;
    setEmojis(newEmojis);
  };
  
  return (
    <div>
      
      <div style={{width:'300px',display: 'flex'}}>
        {emojis.map((emoji, index) => (
          <EmojiItem key={index} emoji={emoji.emoji} onClick={() => handleEmojiClick(index)}/>
        ))}
      </div>
      <ShowResultsButton emojis={emojis}/>
    </div>
  );
};

export default EmojiList;
