import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <form action="#" className={styles.experienceForm}>
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
