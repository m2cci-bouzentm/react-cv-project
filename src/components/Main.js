import React, { Component } from 'react';
import styles from '../styles.module.css';
import InformationForm from './InformationForm';
import ShowCase from './ShowCase';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInformation: {},
      experience: [], // [{},{},{},{}]
      education: [],
    };

    this.setInfoStateOfParent = this.setInfoStateOfParent.bind(this);
    this.setExperienceStateOfParent = this.setExperienceStateOfParent.bind(this);
    this.setEducationStateOfParent = this.setEducationStateOfParent.bind(this);
  }

  // handling each component state change alone
  setExperienceStateOfParent(expArr) {
    this.setState({
      experience: [...expArr],
    });
  }
  setEducationStateOfParent(educArr) {
    this.setState({
      education: [...educArr],
    });
  }

  setInfoStateOfParent(personInfo) {
    this.setState({
      personalInformation: {
        ...personInfo,
      },
    });
  }

  render() {
    return (
      <main className={styles.main}>
        <InformationForm
          setInfoStateOfParent={this.setInfoStateOfParent}
          setExperienceStateOfParent={this.setExperienceStateOfParent}
          setEducationStateOfParent={this.setEducationStateOfParent}
        />
        <ShowCase
          information={this.state}
        />
      </main>
    );
  }
}

export default Main;
