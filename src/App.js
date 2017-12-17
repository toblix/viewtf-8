import React, { Component } from 'react';
import './App.css';
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

        return (
            <div className="App">
                <div>
                    <textarea
						className="App-input"
						type="text"
						value={text}
						onChange={this.onTextChange}
						placeholder="Type or paste a thing"
					/>
                </div>
                <div>
                    <Decoded
						text={text}
					/>
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
