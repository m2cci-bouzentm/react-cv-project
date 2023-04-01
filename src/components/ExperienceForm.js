import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceFormNum: [0],
      experience: {},
      experienceArr: [],
    };

    this.experienceFormNum = this.state.experienceFormNum[0];

    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    if (!Object.keys(this.state.experience).length) {
      const inputsArr = [...e.target.parentElement.children].slice(0, -2);
      inputsArr.forEach(input => {
        input.textContent = '';
        input.value = '';
      });
    }
  }
  handleChange(e) {
    let input = e.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [input.name]: input.value,
        form: e.target.parentElement,
      },
    }));
  }
  handleAddBtn(e) {
    e.preventDefault();
    this.experienceFormNum++;
    this.setState((prevState) => ({
      experienceFormNum: [
        ...prevState.experienceFormNum,
        this.experienceFormNum,
      ],
    }));
  }
  async handleDeleteBtn(e) {
    e.preventDefault();
    let targetedForm = e.target.parentElement;

    await this.setState((prevState) => ({
      experienceArr: prevState.experienceArr.filter(
        (exp) => exp.form !== targetedForm
      ),
    }));

    targetedForm.style.display = 'none';
    this.props.setExperienceStateOfParent(this.state.experienceArr);
  }
  async handleSubmit(e) {
    e.preventDefault();

    // filter the array so it can have only one object per form, the last form submission
    let filteredExpArr = this.state.experienceArr.filter((exp) => {
      return this.state.experience.form !== exp.form;
    });

    // set the filtered array as the new experienceArr
    await this.setState({
      experienceArr: filteredExpArr,
    });

    await this.setState((prevState) => ({
      experienceArr: [...prevState.experienceArr, this.state.experience],
      experience: {},
    }));

    this.props.setExperienceStateOfParent(this.state.experienceArr);
  }

  render() {
    const duplicateForm = this.state.experienceFormNum.map((num) => {
      return (
        <form key={num} action="#" className={styles.experienceForm}>
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="Company"
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
          <button onClick={this.handleSubmit}>Add experience</button>
          <button onClick={this.handleDeleteBtn}>Delete experience</button>
        </form>
      );
    });
    return (
      <div className={styles.experienceForm}>
        <h3>Experience</h3>
        {duplicateForm}
        <button onClick={this.handleAddBtn}> Add more experience</button>
      </div>
    );
  }
}
