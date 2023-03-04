import React, { useState } from 'react';
import styles from '../styles.module.css';
import InformationForm from './InformationForm';
import ShowCase from './ShowCase';

const Main = () => {
  const [personalInformation, setPersonalInformation] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const setInfoStateOfParent = (personInfo) => {
    setPersonalInformation({ ...personInfo });
  };
  const setExperienceStateOfParent = (expArr) => {
    setExperience([...expArr]);
  };
  const setEducationStateOfParent = (educArr) => {
    setEducation([...educArr]);
  };

  const currentInformation = { personalInformation, experience, education };

  return (
    <main className={styles.main}>
      <InformationForm
        setInfoStateOfParent={setInfoStateOfParent}
        setExperienceStateOfParent={setExperienceStateOfParent}
        setEducationStateOfParent={setEducationStateOfParent}
      />
      <ShowCase information={currentInformation} />
    </main>
  );
};

export default Main;
