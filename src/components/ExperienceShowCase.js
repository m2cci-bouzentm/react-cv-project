import React from 'react';
import styles from '../styles.module.css';

const ExperienceShowCase = (props) => {
  // if an empty array return
  if (!props.experience.length) return;

  const expShowCase = props.experience.map((expObj, index) => {
    const { company, position, from, to, city } = expObj;

    // if an empty object return
    if (!Object.keys(expObj).length) return '';

    return (
      <div key={index} className={styles.experience}>
        <div className={styles.date}>
          <p>
            {from} - {to}
          </p>
        </div>
        <div className={styles.position}>
          <p>{position}</p>
          <p>
            {company}, {city}
          </p>
        </div>
      </div>
    );
  });

  return expShowCase;
};

export default ExperienceShowCase;
