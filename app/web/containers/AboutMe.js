import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAttachFile from 'react-icons/lib/md/attach-file';
import Button from '../common/Button';
import Heading from '../components/Heading';

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
    // const grayScaleImg = 'https://pp.userapi.com/c836325/v836325135/37642/0288gCa4VI0.jpg';
    const coloredImg = 'https://pp.userapi.com/c837130/v837130013/2d76b/j93H1raEAng.jpg';
    return (
      <div className="about-me">
        <header className="centered">
          <h1>Hey, I{"'"}m Pavel!</h1>
          <h3>Front-end developer and UI&nbsp;designer</h3>
          <div className="row">
            <div className="col-sm-1 mobile-hide" />
            <div className="col-sm-3 mobile-hide">
              <Heading title="Social Networks" />
              <div className="nav-list">
                <div className="nav-item nav-item-link">
                  <a className="label" href="//github.com/Carduelis" target="_blank">Github</a>
                </div>
                <div className="nav-item nav-item-link">
                  <a className="label" href="//vk.com/pavepy" target="_blank">Vk.com</a>

                </div>
                <div className="nav-item nav-item-link">
                  <a className="label" href="//instagram.com/Carduelis_first" target="_blank">Instagram</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mobile-center">
              <div className="avatar">
                <img alt="me" src={coloredImg} />
              </div>
              <div className="text">
                <p className="full-name">Full name:&nbsp;
                <b>Pavel</b> Shchegolev
                </p>
                <p className="age">Age:&nbsp;
                <b>{age.years} years</b>, {age.months} months and {age.days < 1 ? 2 : age.days} days
                </p>
              </div>
            </div>
            <div className="col-sm-3 mobile-hide">
              <Heading title="Curriculum Vitae" />
              <div className="btn-group">
                <a className="btn btn-bordered" download href="/assets/files/en.pdf">
                  <span className="label">CV <small>(en)</small></span>
                </a>
                <a className="btn btn-bordered" download href="/assets/files/ru.pdf">
                  <span className="label">По-русски</span>
                </a>
              </div>
            </div>
            <div className="col-sm-1 mobile-hide" />
          </div>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = ({ me }) => ({ me });

export default connect(({ me }) => ({ me }))(AboutMe);
