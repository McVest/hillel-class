const emojis = document.querySelectorAll('.emoji');
const voteCounts = document.querySelectorAll('.votes');

emojis.forEach((emoji, index) => {
  let count = 0;
  const voteCountElement = voteCounts[index];
  
  emoji.addEventListener('click', () => {
    count++;
    voteCountElement.textContent = count;
  });
});
