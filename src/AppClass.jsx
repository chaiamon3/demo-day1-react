import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

//-- App Class Component
class AppClass extends Component {
  message = "Hello Class Component";

  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  setCount(newValue) {
    this.setState({ count: newValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.message}</p>
          <p>
            <button type="button" onClick={() => this.setCount(this.state.count + 1)}>
              count is: {this.state.count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    )
  };
}

export default AppClass
