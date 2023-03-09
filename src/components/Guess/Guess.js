import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessValue, answer }) {
  const guessValidation = checkGuess(guessValue, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${
            guessValidation ? guessValidation[num].status : ''
          }`}
        >
          {guessValue ? guessValue[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

/*
Acceptance Criteria:

Import the checkGuess function from /src/game-helpers.js, and use it to validate each of the user's guesses
When rendering the letters in the Guess component, apply the letter's status to the cell element.
"Empty" guess slots should have the same markup as before: <span class="cell"></span>.
*/
