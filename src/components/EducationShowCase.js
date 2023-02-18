import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationShowCase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { university, degree, from, to, city } = this.props.information.education;
    return (
      <div className={styles.education}>
        <div className={styles.date}>
          <p>{from} - {to}</p>
        </div>
        <div className={styles.university}>
          <p>{university}, {city}</p>
          <p>Degree: {degree}</p>
        </div>
      </div>
    );
  }
}
