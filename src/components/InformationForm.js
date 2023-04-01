import React, { useState } from 'react';
import styles from '../styles.module.css';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';

const InformationForm = (props) => {
  const [personalInformation, setPersonalInformation] = useState({
    fName: '',
    lName: '',
    title: '',
    photo: '',
    address: '',
    phoneNum: '',
    email: '',
    description: '',
  });

  function handleImgChange(input) {
    if (!input.files) return;

    // using file reader API
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
      setPersonalInformation({
        ...personalInformation,
        [input.name]: reader.result,
      });
    };
  }

  function handleChange(e) {
    let input = e.target;
    handleImgChange(input);
    setPersonalInformation({
      ...personalInformation,
      [input.name]: input.value,
    });

    props.setInfoStateOfParent(personalInformation);
  }

  function handleReset(e) {
    e.preventDefault();
    const formContainers = [...e.target.parentElement.parentElement.childNodes];
    for (const formContainer of formContainers) {
      const form = formContainer.childNodes[1];
      if (!form) continue;
      if (!form.hasAttribute('action')) continue;
      const inputArr = [...form.childNodes];
      inputArr.forEach((input) => {
        if (!input.hasAttribute('name')) return;
        input.value = '';
        input.textContent = '';
      });
    }

    props.setInfoStateOfParent({});
    props.setExperienceStateOfParent([]);
    props.setEducationStateOfParent([]);
  }

  return (
    <div className={styles.infoSection}>
      <div className={styles.personalInformationForm}>
        <h3>Personal Information</h3>
        <form action="" className="form">
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          ></input>
          <input
            type="file"
            name="photo"
            placeholder="Photo"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          ></input>
          <input
            type="tel"
            name="phoneNum"
            placeholder="Phone Number"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
        </form>
      </div>

      <ExperienceForm
        setExperienceStateOfParent={props.setExperienceStateOfParent}
      />

      <EducationForm
        setEducationStateOfParent={props.setEducationStateOfParent}
      />

      <div className={styles.settings}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default InformationForm;
