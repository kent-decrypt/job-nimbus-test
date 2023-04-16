import React, { useState } from 'react';

/**
 * Check if the text has no value
 * @param {*} text 
 * @returns 
 */
const hasNoValueIn = text => text === '';

/**
 * Check if the string has no bracket "<" and ">"
 * @param {string} text 
 * @returns 
 */
const hasNoBracketIn = text => text.indexOf("<") === -1 && text.indexOf(">") === -1;

/**
 * Validates the input text
 * @param {string} text 
 * @returns {boolean} True if valid, otherwise false.
 */
const validTextValue = text => {

  // No brackets
  if(hasNoValueIn(text)) return true;

  // No "<" or ">"
  if(hasNoBracketIn(text)) return true;
  
  const ltIndex = text.indexOf("<");
  const gtLastIndex = text.lastIndexOf(">");

  const insideText = text.substring(ltIndex + 1, gtLastIndex);
  const leftSideText = text.substring(0, ltIndex);
  const rightSideText = text.substring(gtLastIndex + 1);

  if(ltIndex === -1 || gtLastIndex === -1) {
    return false;
  }
  
  // Text is like "><" -- invalid
  if(ltIndex > gtLastIndex) return false;

  // Both ltIndex and gtLastIndex should be > 0
  if(!hasNoBracketIn(leftSideText) || !hasNoBracketIn(rightSideText)) {
    return false;
  }

  // Text is "<>"
  if(hasNoValueIn(insideText) 
      && hasNoValueIn(leftSideText) 
      && hasNoValueIn(rightSideText)) {
    return true;
  }

  return validTextValue(insideText);
}

/**
 * The Custom Input hook
 * @param {*} _ 
 * @returns 
 */
const CustomInput = _ => {
  const [ text, setText ] = useState('');
  const [ displayText, setDisplayText ] = useState(text);
  const [ valid, setValid ] = useState(true);

  const events = {
    btnClick: _ => {
      setDisplayText(text);
      setValid(validTextValue(text));
    },
    inputChange: e => setText(e.target.value)
  };

  return (
    <div className='my-2'>
      <label 
        htmlFor='txtInput'
        id='lblInput'
        data-testid='test-customInput-lblInput' 
        className='form-control-label'>
        <small>Your text `<code>{displayText}</code>` is {valid ? 'valid' : 'invalid'}</small>
      </label>
      <input 
        type='text' 
        id='txtInput'
        data-testid="test-customInput-txtInput" 
        className={'form-control my-2 ' + (valid ? 'is-valid' : 'is-invalid')} 
        placeholder='Place text here...' 
        value={text} 
        onChange={events.inputChange} />
      <button 
        id='btnCheck'
        data-testid="test-customInput-btnCheck"
        className='form-control my-2' 
        onClick={events.btnClick}>Check text!</button>
    </div>
  )
}

export default CustomInput;
