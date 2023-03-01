import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
      />
      Must be 5 letter word
    </form>
  );
}

export default GuessInput;

/*
Acceptance Criteria:


This component should render a <form> tag, including a label and a text input.

The text input should be controlled by React state.

When the form is submitted:
The entered value should be logged to the console (for now).
The input should be reset to an empty string.
The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
The input should have a minimum and maximum length of 5.

NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
*/
