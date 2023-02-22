import React, { Component } from 'react';
import Nav from './components/Nav'
// import './styles.module.css'
import Main from './components/Main'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;