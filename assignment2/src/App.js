import React, { Component } from 'react';
import './App.css';
import './Char/Char.css';

import Char from './Char/Char';
import CharValidation from './Char/CharValidation';

class App extends Component {
  state = {
    currentWord: '',
    currentLength: 0,
    minLength: 4,
    maxLength: 21,
    tooShort: false,
    tooLong: false,
    chars: []
  }

  handleChange = (event) => {
    const wordValue = event.target.value;
    
    const charArray = wordValue.split('');

    this.handleValidateLength(wordValue);

    this.setState({ 
      currentWord: wordValue, 
      currentLength: wordValue.length,
      chars: charArray 
    });
  }

  handleValidateLength = (wordValue) => {
    if(wordValue.length > 0 && wordValue.length < this.state.minLength) {
      this.setState({ tooShort: true, tooLong: false });
    }else{
      this.setState({ tooShort: false });
    }

    if(wordValue.length > this.state.maxLength) {
      this.setState({ tooLong: true, tooShort: false });
    }else{
      this.setState({ tooLong: false });
    }
  }

  removeDigit = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index,1);
    const newWord = chars.join('');
    this.setState({ chars: chars, currentWord: newWord });
    this.handleValidateLength(newWord);
  }

  render() {
    let errorMessage = null;
    if(this.state.tooShort) {
      errorMessage = "Too short";
    }
    if(this.state.tooLong) {
      errorMessage = "Too long";
    }

    let charDisplay = null;
    if(this.state.currentLength > 0 && errorMessage == null) {
      charDisplay = (
        <div className="charContainer">
          <p>Digits that form your word</p>
          {this.state.chars.map((digit, index) => 
            <Char 
              key={index+digit} 
              digit={digit} 
              index={index}
              currentWord={this.state.currentWord}
              removeDigit={this.removeDigit} 
            />
          )}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Character Counter</h1>
        <label className="charCounterLabel">
          <p>Enter your word</p>
          <span>Has to be between 4 and 21 characters.</span>
        </label>
        <div className="charCounterField">
          <input type="text" onChange={this.handleChange} minLength="4" value={this.state.currentWord} />
          <CharValidation 
            currentLength={this.state.currentLength}
            errorMessage={errorMessage} 
          />
        </div>
        {charDisplay}
                
      </div>
    );
  }
}

export default App;
