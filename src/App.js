import React, { Component } from 'react';
import Nav from './components/Nav';
// import './styles.module.css'
import Main from './components/Main';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
