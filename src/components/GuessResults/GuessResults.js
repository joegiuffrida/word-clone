import React from 'react';

function GuessResults({ userGuesses }) {
  return (
    <div className="guess-results">
      {userGuesses.map((userGuess) => {
        return (
          <p key={userGuess.id} className="guess">
            {userGuess.value}
          </p>
        );
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
