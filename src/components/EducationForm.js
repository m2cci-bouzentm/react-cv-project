import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationFormNum: [0],
      education: {
        university: '',
        city: '',
        degree: '',
        from: '',
        to: '',
      },
    };

    this.educationFormNum = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  handleChange(e) {
    let input = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [input.name]: input.value,
      },
    }));

    this.props.setStateOfParent(this.state.education);
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
    this.setState((prevState) => ({
      educationFormNum: [...prevState.educationFormNum].slice(0, -1),
    }));
  }

  render() {
    const duplicateForm = this.state.educationFormNum.map((formNum) => {
      return (
        <form key={formNum} action="" className={styles.educationForm}>
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
          <button onClick={this.handleDeleteBtn}>Delete</button>
        </form>
      );
    });
    return (
      <div className={styles.educationForm}>
        <h3>Education</h3>
        {duplicateForm}
        <button onClick={this.handleAddBtn}>Add</button>
      </div>
    );
  }
}
