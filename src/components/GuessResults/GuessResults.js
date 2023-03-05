import React from 'react';
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ userGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} guessValue={userGuesses[num]} />;
      })}
    </div>
  );
}

export default GuessResults;

/*
Acceptance Criteria:

A new component should be created, to render previous guesses.

When the user submits their guess, that value should be rendered within this new component.

There should be no key warnings in the console!
*/
