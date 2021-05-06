import React, { useState, useEffect } from 'react';
import utils from '../math-utils';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export function App() {
  return <StarMatch />;
}
