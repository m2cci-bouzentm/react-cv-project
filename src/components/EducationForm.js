import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationFormNum: [0],
      education: {},
      educationArr: [],
    };

    this.educationFormNum = this.state.educationFormNum[0];

    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    if (!Object.keys(this.state.education).length) {
      const inputsArr = [...e.target.parentElement.children].slice(0, -2);
      inputsArr.forEach((input) => {
        input.textContent = '';
        input.value = '';
      });
    }
  }
  handleChange(e) {
    let input = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [input.name]: input.value,
        form: e.target.parentElement,
      },
    }));
  }
  handleAddBtn(e) {
    e.preventDefault();
    this.educationFormNum++;
    this.setState((prevState) => ({
      educationFormNum: [...prevState.educationFormNum, this.educationFormNum],
    }));
  }
  async handleDeleteBtn(e) {
    e.preventDefault();
    let targetedForm = e.target.parentElement;

    await this.setState((prevState) => ({
      educationArr: prevState.educationArr.filter(
        (educ) => educ.form !== targetedForm
      ),
    }));

    targetedForm.style.display = 'none';
    this.props.setEducationStateOfParent(this.state.educationArr);
  }
  async handleSubmit(e) {
    e.preventDefault();

    // filter the array so it can have only one object per form, the last form submission
    let filteredEducArr = this.state.educationArr.filter((educ) => {
      return this.state.education.form !== educ.form;
    });

    // set the filtered array as the new educationArr
    this.setState({
      educationArr: filteredEducArr,
    });

    await this.setState((prevState) => ({
      educationArr: [...prevState.educationArr, this.state.education],
      education: {},
    }));

    this.props.setEducationStateOfParent(this.state.educationArr);
  }

  render() {
    const duplicateForm = this.state.educationFormNum.map((num) => {
      return (
        <form key={num} action="" className={`form  ${styles.educationForm}`}>
          <input
            type="text"
            name="university"
            placeholder="University Name"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <input
            type="number"
            name="from"
            placeholder="From"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <input
            type="number"
            name="to"
            placeholder="To"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <button onClick={this.handleSubmit}>Add education</button>
          <button onClick={this.handleDeleteBtn}>Delete education</button>
        </form>
      );
    });
    return (
      <div className={styles.educationForm}>
        <h3>Education</h3>
        {duplicateForm}
        <button onClick={this.handleAddBtn}>Add more education</button>
      </div>
    );
  }
}
