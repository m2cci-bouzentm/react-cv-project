import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';

const ExperienceForm = (props) => {
  const [experienceFormNum, setExperienceFormNum] = useState([1]);
  const [experience, setExperience] = useState({});
  const [experienceArr, setExperienceArr] = useState([]);

  function handleChange(e) {
    let input = e.target;
    setExperience({
      ...experience,
      [input.name]: input.value,
      form: e.target.parentElement,
    });
  }

  function handleAddBtn(e) {
    e.preventDefault();
    if (!experienceFormNum.length) {
      setExperienceFormNum([1]);
    }
    else {
      setExperienceFormNum([...experienceFormNum, (experienceFormNum.at(-1) + 1)]);
    }
  }

  function handleDeleteBtn(e) {
    e.preventDefault();
    setExperienceFormNum([...experienceFormNum].slice(0, -1)); // deleting last form and its last object
    setExperienceArr([...experienceArr].slice(0, -1)); // and its last object
    props.setExperienceStateOfParent(experienceArr);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // filter the array so it can have only one object per form, the last form submission
    let filteredExpArr = experienceArr.filter((exp) => {
      return experience.form !== exp.form;
    });

    // set the filtered array as the new experienceArr
    setExperienceArr([...filteredExpArr, experience]);
    setExperience({});
  }

  /* setExperienceArr is asynchronous operation so we 
   must setStateOfParent later on when the operation is completed */
  useEffect(() => {
    props.setExperienceStateOfParent(experienceArr);
  }, [experienceArr]);

  const duplicateForm = experienceFormNum.map((formNum) => {
    return (
      <form key={formNum} action="#" className={styles.experienceForm}>
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="from"
          placeholder="From"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="to"
          placeholder="To"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Add experience</button>
      </form>
    );
  });

  return (
    <div className={styles.experienceForm}>
      <h3>Experience</h3>
      {duplicateForm}
      <button onClick={handleAddBtn}>Add more experience</button>
      <button onClick={handleDeleteBtn}>Delete the last experience</button>
    </div>
  );
};

export default ExperienceForm;
