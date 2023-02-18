import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        university: '',
        city: '',
        degree: '',
        from: '',
        to: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <form action="" className={styles.educationForm}>
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
          min='1923'
          max='2050'
        ></input>
        <input
          type="number"
          name="to"
          placeholder="To"
          onChange={this.handleChange}
          min='1923'
          max='2050'
        ></input>
        <button>Delete</button>
      </form>
    );
  }
}
