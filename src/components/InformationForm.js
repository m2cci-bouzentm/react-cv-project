import React, { Component } from 'react';
import styles from '../styles.module.css';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
class InformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInformation: {
        fName: '',
        lName: '',
        title: '',
        photo: '',
        address: '',
        phoneNum: '',
        email: '',
        description: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleImgChange(input) {
    if (!input.files) return;

    // using file reader API
    const reader = new FileReader();
    let img;
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
      img = reader.result;
      this.setState((prevState) => ({
        personalInformation: {
          ...prevState.personalInformation,
          [input.name]: img,
        },
      }));
    };
  }

  async handleChange(e) {
    let input = e.target;
    await this.handleImgChange(input);
    await this.setState((prevState) => ({
      personalInformation: {
        ...prevState.personalInformation,
        [input.name]: input.value,
      },
    }));

    this.props.setInfoStateOfParent(this.state.personalInformation);
  }

  handleReset(e) {
    e.preventDefault();
    const formContainers = [...e.target.parentElement.parentElement.childNodes];
    for (const formContainer of formContainers) {
      const form = [...formContainer.childNodes][1];
      const inputArr = [...form.childNodes];
      if (!form.hasAttribute("action")) continue;
      inputArr.forEach((input) => {
        if (!input.hasAttribute("name")) return;
        input.value = '';
      });
    }

    this.props.setInfoStateOfParent({});
    this.props.setExperienceStateOfParent([]);
    this.props.setEducationStateOfParent([]);
  }

  render() {
    return (
      <div className={styles.infoSection}>
        <div className={styles.personalInformationForm}>
          <h3>Personal Information</h3>
          <form action="" className="form">
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            ></input>
            <input
              type="file"
              name="photo"
              placeholder="Photo"
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
            ></input>
            <input
              type="tel"
              name="phoneNum"
              placeholder="Phone Number"
              onChange={this.handleChange}
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            ></input>
            <textarea
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            ></textarea>
          </form>
        </div>

        <ExperienceForm
          setExperienceStateOfParent={this.props.setExperienceStateOfParent}
        />

        <EducationForm
          setEducationStateOfParent={this.props.setEducationStateOfParent}
        />

        <div className={styles.settings}>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default InformationForm;
