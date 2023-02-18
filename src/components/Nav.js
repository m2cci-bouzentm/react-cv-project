import React, { Component } from 'react';
import styles from '../styles.module.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navBar}>
        <h1>CV BUILDER</h1>
      </div>
    );
  }
}

export default Nav;
