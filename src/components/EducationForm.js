import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';

const EducationForm = (props) => {
  const [educationFormNum, setEducationFormNum] = useState([0]);
  const [education, setEducation] = useState({});
  const [educationArr, setEducationArr] = useState([]);

  function handleFocus(e) {
    if (!Object.keys(education).length) {
      const inputsArr = [...e.target.parentElement.children].slice(0, -2);
      inputsArr.forEach((input) => {
        input.textContent = '';
        input.value = '';
      });
    }
  }

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

    let targetedForm = e.target.parentElement;
    setEducationArr([...educationArr].filter((exp) => exp.form !== targetedForm));

    targetedForm.remove();
    props.setEducationStateOfParent(educationArr);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // filter the array so it can have only one object per form, the last form submission
    let filteredEducArr = educationArr.filter((exp) => {
      return education.form !== exp.form;
    });

    // set the filtered array as the new educationArr
    setEducationArr([...filteredEducArr, education]);
    setEducation({});
  }

  /* setEducationArr is asynchronous operation so we 
 must setStateOfParent later on when the operation is completed */
  useEffect(() => {
    props.setEducationStateOfParent(educationArr);
  }, [educationArr]);

  const duplicateForm = educationFormNum.map((num) => {
    return (
      <form key={num} action="#" className={styles.educationForm}>
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
        <button onClick={handleSubmit}>Add education</button>
        <button onClick={handleDeleteBtn}>Delete education</button>
      </form>
    );
  });

  return (
    <div className={styles.educationForm}>
      <h3>Education</h3>
      {duplicateForm}
      <button onClick={handleAddBtn}>Add more education</button>
    </div>
  );
}

export default EducationForm