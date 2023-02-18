import React, { Component } from 'react';
import styles from '../styles.module.css';
import sampleImg from './sampleImg.jpg';
import ExperienceShowCase from './ExperienceShowCase';
import EducationShowCase from './EducationShowCase';

class ShowCase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fName,
      lName,
      address,
      email,
      description,
      phoneNum,
      photo,
      title,
    } = this.props.information.personalInformation;
    return (
      <div className={styles.cvShowCase}>
        <div className={styles.firstRow}>
          <h1 className="name">
            {fName} {lName}
          </h1>
          <h3 className="title">{title}</h3>
        </div>

        <div className={styles.secondRow}>
          <div className={styles.leftColumn}>
            <div className="description-container">
              <h4>Description</h4>
              <div>
                <p>{description}</p>
              </div>
            </div>

            <div className="experience-container">
              <h4>Experience</h4>

              <ExperienceShowCase information={this.props.information} />
            </div>

            <div className="education-container">
              <h4>Education</h4>

              <EducationShowCase information={this.props.information} />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className="img">
              <img src={photo} alt="profile-pic" />
            </div>
            <div className="personalDetails">
              <h4>Personal Details</h4>
              <h6>Address</h6>
              <p>{address}</p>
              <h6>Phone Number</h6>
              <p>{phoneNum}</p>
              <h6>Email</h6>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCase;
