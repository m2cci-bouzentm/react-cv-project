import React, { Component } from 'react';
import styles from '../styles.module.css';
import InformationForm from './InformationForm';
import ShowCase from './ShowCase';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInformation: {},
      experience: {},
      education: {},
    };

    this.setStateOfParent = this.setStateOfParent.bind(this);
  }

  setStateOfParent(value) {
    if ('fName' in value) {
      this.setState((prevState) => ({
        personalInformation: {
          ...prevState.personalInformation,
          ...value,
        },
      }));
    }

    if ('position' in value) {
      this.setState((prevState) => ({
        experience: {
          ...prevState.experience,
          ...value,
        },
      }));
    }

    if ('university' in value) {
      this.setState((prevState) => ({
        education: {
          ...prevState.education,
          ...value,
        },
      }));
    }
  }

  render() {
    return (
      <main className={styles.main}>
        <InformationForm setStateOfParent={this.setStateOfParent} />
        <ShowCase information={this.state} setStateOfParent={this.setStateOfParent} />
      </main>
    );
  }
}

export default Main;
