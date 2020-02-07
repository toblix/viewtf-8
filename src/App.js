import React, { Component } from 'react';
import './App.css';
import utf8 from 'utf8';

import Decoded from './Decoded';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '💩'
    }
  }

  render() {
    const { text } = this.state;

    const numberOfBytes = utf8.encode(text).length;

    return (
      <div className="App">

        <h1>
          ViewTF-8
          <span
            role="img"
            aria-label="Eyes emoji"
          >
            👀
          </span>
        </h1>
        <h2>Analyze UTF-8 encoded text</h2>

        <div className="App-input-section">
          <label>
            <h3>Feel free to put some text in here:</h3>
            <textarea
              className="App-input"
              value={text}
              onChange={this.onTextChange}
              placeholder="Type or paste some text"
            />
          </label>
        </div>

        <div className="App-ouput-section">
          <h3>
            { numberOfBytes === 1 && '... and here is the byte:'}
            { numberOfBytes > 1 && `... aaand here are the ${numberOfBytes} bytes:`}
            </h3>
          {text && (
            <Decoded
              text={text}
            />
          )}
          {!text && (
            <p className="App-empty-message">Type in some text above!</p>
          )}
        </div>

        <hr />

        <div className="App-info-section">
          <h3>Wow!</h3>
          UTF-8 is great; read more about it on <a href="https://en.wikipedia.org/wiki/UTF-8">Wikipedia!</a>
          <div className="App-info-nail-care">
            <span
              role="img"
              aria-label="Nail care emoji"
            >
              💅
            </span>
          </div>
        </div>
      </div>
    );
  }

  onTextChange = e=>{
    const text = e.target.value;
    this.setState(()=>({text}))
  }
}

export default App;