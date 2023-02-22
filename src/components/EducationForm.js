import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationFormNum: [1],
      education: {},
      educationArr: [],
    };

    this.educationFormNum = 1;

    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleDeleteBtn(e) {
    e.preventDefault();
    this.educationFormNum--;
    this.setState((prevState) => ({
      educationFormNum: [...prevState.educationFormNum].slice(0, -1),
      educationArr: [...prevState.educationArr].slice(0, -1),
    }));

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
    const duplicateForm = this.state.educationFormNum.map((formNum) => {
      return (
        <form key={formNum} action="" className={`form  ${styles.educationForm}`}>
          <input
            type="text"
            name="university"
            placeholder="University Name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={this.handleChange}
          ></input>
          <input
            type="number"
            name="from"
            placeholder="From"
            onChange={this.handleChange}
            min="1923"
            max="2050"
          ></input>
          <input
            type="number"
            name="to"
            placeholder="To"
            onChange={this.handleChange}
            min="1923"
            max="2050"
          ></input>
          <button onClick={this.handleSubmit}>Add education</button>
        </form>
      );
    });
    return (
      <div className={styles.educationForm}>
        <h3>Education</h3>
        {duplicateForm}
        <button onClick={this.handleAddBtn}>Add more education</button>
        <button onClick={this.handleDeleteBtn}>
          Delete the last education
        </button>
      </div>
    );
  }
}
