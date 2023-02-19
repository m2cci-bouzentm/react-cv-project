import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceFormNum: [0],
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    };

    this.experienceFormNum = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  handleChange(e) {
    let input = e.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [input.name]: input.value,
      },
    }));

    this.props.setStateOfParent(this.state.experience);
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

  handleDeleteBtn(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      experienceFormNum: [...prevState.experienceFormNum].slice(0, -1),
    }));
  }

  render() {
    const duplicateForm = this.state.experienceFormNum.map((formNum) => {
      return (
        <form key={formNum} action="#" className={styles.experienceForm}>
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
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
      <div className={styles.experienceForm}>
        <h3>Experience</h3>
        {duplicateForm}
        <button onClick={this.handleAddBtn}>Add</button>
      </div>
    );
  }
}
