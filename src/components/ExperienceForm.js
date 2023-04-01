import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';

const ExperienceForm = (props) => {
  const [experienceFormNum, setExperienceFormNum] = useState([0]);
  const [experience, setExperience] = useState({});
  const [experienceArr, setExperienceArr] = useState([]);

  function handleFocus(e) {
    if (!Object.keys(experience).length) {
      const inputsArr = [...e.target.parentElement.children].slice(0, -2);
      inputsArr.forEach((input) => {
        input.textContent = '';
        input.value = '';
      });
    }
  }

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
    } else {
      setExperienceFormNum([
        ...experienceFormNum,
        experienceFormNum.at(-1) + 1,
      ]);
    }
  }

  function handleDeleteBtn(e) {
    e.preventDefault();
    let targetedForm = e.target.parentElement;
    setExperienceArr(
      [...experienceArr].filter((exp) => exp.form !== targetedForm)
    );

    targetedForm.remove();
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

  const duplicateForm = experienceFormNum.map((num) => {
    return (
      <form key={num} action="#" className={styles.experienceForm}>
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
          onFocus={handleFocus}
        ></input>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          onFocus={handleFocus}
        ></input>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          onFocus={handleFocus}
        ></input>
        <input
          type="number"
          name="from"
          placeholder="From"
          onChange={handleChange}
          onFocus={handleFocus}
        ></input>
        <input
          type="number"
          name="to"
          placeholder="To"
          onChange={handleChange}
          onFocus={handleFocus}
        ></input>
        <button onClick={handleSubmit}>Add experience</button>
        <button onClick={handleDeleteBtn}>Delete experience</button>
      </form>
    );
  });

  return (
    <div className={styles.experienceForm}>
      <h3>Experience</h3>
      {duplicateForm}
      <button onClick={handleAddBtn}>Add more experience</button>
    </div>
  );
};

export default ExperienceForm;
