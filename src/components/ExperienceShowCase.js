import React, { Component } from 'react'
import styles from '../styles.module.css';


export default class ExperienceShowCase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { company, position, from, to, city } = this.props.information.experience;
    return (
      <div className={styles.experience}>
        <div className={styles.date}>
          <p>{from} - {to}</p>
        </div>
        <div className={styles.position}>
          <p>{position}</p>
          <p>{company}, {city}</p>
        </div>
      </div>
    )
  }
}