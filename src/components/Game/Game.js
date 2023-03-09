import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);

  return (
    <>
      <GuessResults userGuesses={userGuesses} answer={answer} />
      <GuessInput userGuesses={userGuesses} setUserGuesses={setUserGuesses} />
    </>
  );
}

export default Game;
