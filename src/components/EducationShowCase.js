import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationShowCase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if an empty array return
    if (!this.props.education.length) return;

    const educShowCase = this.props.education.map((educObj, index) => {
      const { university, degree, from, to, city } = educObj;
      // if an empty object return
      if (!Object.keys(educObj).length) return '';
      return (
        <div key={index} className={styles.education}>
          <div className={styles.date}>
            <p>
              {from} - {to}
            </p>
          </div>
          <div className={styles.university}>
            <p>
              {university}, {city}
            </p>
            <p>Degree: {degree}</p>
          </div>
        </div>
      );
    });

    return educShowCase;
  }
}
