import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';

const EducationForm = (props) => {
  const [educationFormNum, setEducationFormNum] = useState([1]);
  const [education, setEducation] = useState({});
  const [educationArr, setEducationArr] = useState([]);

  function handleChange(e) {
    let input = e.target;
    setEducation({
      ...education,
      [input.name]: input.value,
      form: e.target.parentElement,
    });
  }

  function handleAddBtn(e) {
    e.preventDefault();
    if (!educationFormNum.length) {
      setEducationFormNum([1]);
    }
    else {
      setEducationFormNum([...educationFormNum, (educationFormNum.at(-1) + 1)]);
    }
  }

  function handleDeleteBtn(e) {
    e.preventDefault();

    /* deleting last form and its last object
      and its last object */
    setEducationFormNum([...educationFormNum].slice(0, -1));
    setEducationArr([...educationArr].slice(0, -1));
    props.setEducationStateOfParent(educationArr);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // filter the array so it can have only one object per form, the last form submission
    let filteredExpArr = educationArr.filter((exp) => {
      return education.form !== exp.form;
    });

    // set the filtered array as the new educationArr
    setEducationArr([...filteredExpArr, education]);
    setEducation({});
  }

  /* setEducationArr is asynchronous operation so we 
 must setStateOfParent later on when the operation is completed */
  useEffect(() => {
    props.setEducationStateOfParent(educationArr);
  }, [educationArr]);

  const duplicateForm = educationFormNum.map((formNum) => {
    return (
      <form key={formNum} action="" className={`form  ${styles.educationForm}`}>
        <input
          type="text"
          name="university"
          placeholder="University Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="from"
          placeholder="From"
          onChange={handleChange}
          min="1923"
          max="2050"
        ></input>
        <input
          type="number"
          name="to"
          placeholder="To"
          onChange={handleChange}
          min="1923"
          max="2050"
        ></input>
        <button onClick={handleSubmit}>Add education</button>
      </form>
    );
  });

  return (
    <div className={styles.educationForm}>
      <h3>Education</h3>
      {duplicateForm}
      <button onClick={handleAddBtn}>Add more education</button>
      <button onClick={handleDeleteBtn}>
        Delete the last education
      </button>
    </div>
  );
}

export default EducationForm