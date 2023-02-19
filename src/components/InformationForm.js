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
  }

  handleImgChange(e) {
    let input = e.target;
    let imgSrc;

    if (!input.files) return;

    // using file reader API
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
      imgSrc = reader.result;
      this.setState((prevState) => ({
        personalInformation: {
          ...prevState.personalInformation,
          [input.name]: imgSrc,
        },
      }));

      this.props.setStateOfParent(this.state.personalInformation);
    };
  }

  handleChange(e) {
    let input = e.target;
    this.setState((prevState) => ({
      personalInformation: {
        ...prevState.personalInformation,
        [input.name]: input.value,
      },
    }));

    this.props.setStateOfParent(this.state.personalInformation);
  }

  render() {
    return (
      <div className={styles.infoSection}>
        <div className={styles.personalInformationForm}>
          <h3>Personal Information</h3>
          <form action="">
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
              onChange={this.handleImgChange}
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

        <ExperienceForm setStateOfParent={this.props.setStateOfParent} />

        <EducationForm setStateOfParent={this.props.setStateOfParent} />

        <div className={styles.settings}>
          <button>Generate PDF</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default InformationForm;
