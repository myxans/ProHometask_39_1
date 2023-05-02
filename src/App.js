import React, { useState } from 'react';

const emojis = [
  { name: 'Smile', emoji: '😊' },
  { name: 'Heart', emoji: '❤️' },
  { name: 'Thumbs Up', emoji: '👍' },
];

const EmojiList = () => {
  const [clicks, setClicks] = useState(Array(emojis.length).fill(0));
  const [showResults, setShowResults] = useState(false);

  const handleEmojiClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index] += 1;
    setClicks(newClicks);
  };

  const handleShowResultsClick = () => {
    setShowResults(true);
  };

  const maxClicks = Math.max(...clicks);
  const winningEmojiIndex = clicks.indexOf(maxClicks);

  return (
    <div>
      {emojis.map((emoji, index) => (
        <div key={index} onClick={() => handleEmojiClick(index)}>
          {emoji.name} - {emoji.emoji} - Clicks: {clicks[index]}
        </div>
      ))}
      <button onClick={handleShowResultsClick}>Show Results</button>
      {showResults && (
        <div>
          <h2>Winner:</h2>
          {emojis[winningEmojiIndex].name} - {emojis[winningEmojiIndex].emoji} - Clicks: {maxClicks}
        </div>
      )}
    </div>
  );
};

export default EmojiList;