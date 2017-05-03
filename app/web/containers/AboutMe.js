import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutMe extends Component {
  render() {
    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
    const currentMonthDaysCount = daysInMonth(new Date().getFullYear(), new Date().getMonth());
    const dateOfBirth = new Date(1992, 7, 31, 7).getTime();
    const now = new Date().getTime();
    const deltaInDays = (now - dateOfBirth) / (1000 * 60 * 60 * 24);
    const months = ((deltaInDays / 365.083) - Math.floor(deltaInDays / 365.083)) * 12;
    const days = (months - Math.floor(months)) * currentMonthDaysCount;
    const age = {
      years: Math.floor(deltaInDays / 365.083),
      months: Math.floor(months),
      days: Math.floor(days) - 3 // wtf
    };
    return (
      <div className="about-me">
        <header className="centered">
          <h1>Hey, I{"'"}m Pavel</h1>
          <h3>Front-end developer and UI&nbsp;designer</h3>
          <div className="avatar">
            <img alt="me" src="https://pp.userapi.com/c836325/v836325135/37642/0288gCa4VI0.jpg" />
          </div>
          <div className="text">
          <p className="full-name">Full name:&nbsp;
          <b>Pavel</b> Shchegolev
          </p>
          <p className="age">Age:&nbsp;
          <b>{age.years} years</b>, {age.months} months and {age.days} days
          </p>
          </div>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = ({ me }) => ({ me });

export default connect(({ me }) => ({ me }))(AboutMe);
