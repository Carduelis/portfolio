import React, { Component } from 'react';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdSchool from 'react-icons/lib/md/school';
import MdDirectionsBike from 'react-icons/lib/md/directions-bike';
import MdLocalRestaurant from 'react-icons/lib/md/local-restaurant';
import MdMusicNote from 'react-icons/lib/md/music-note';
// import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdInsertEmoticon from 'react-icons/lib/md/insert-emoticon';
import MdDevicesOther from 'react-icons/lib/md/devices-other';
import MdFavorite from 'react-icons/lib/md/favorite';
import MdFreeBreakfast from 'react-icons/lib/md/free-breakfast';

import ProjectsList from '../containers/ProjectsList';
import AboutMe from '../containers/AboutMe';


class Main extends Component {
  render() {
    const separator = (
      <div className="separator">
        <div className="separator-line">
          <MdAllInclusive />
        </div>
      </div>
    );
    const Header = ({ title, children, icon }) => (
      <header className="centered">
        <h2>
          {icon && <span className="icon-lg">{icon}</span>}
          {icon && <br />}
          {title}
        </h2>
        {children}
      </header>
    );
    return (
      <div>
        <div className="content">
          <AboutMe />
        </div>
        <div className="overflow-scrolling columns-custom-wrapper">
        <div className="columns columns-custom">
          <div className="column skew">
            <Header title="Education" icon={<MdSchool />} />
            <p>I am a&nbsp;<b><abbr title="Upper bachelor degree">specialist</abbr> in Computer science</b>,
              graduated from&nbsp;
              <a
                className="silent"
                href="//english.mirea.ru"
                rel="noopener noreferrer"
                target="_blank"
              >
              Moscow Technological University
            </a>
            </p>
            <p className="silent small">During the study period (Sep&nbsp;2010 – Jul&nbsp;2015) I
 had excellent marks <nobr>4.98 out of 5</nobr>. Also I have published several scientific papers and a student book for internal use.
I had participate in organization of conferences in the University.</p>
          </div>
          <div className="column skew">
            <Header title="Work Experience" icon={<MdBusinessCenter />} />
            <p>I started in the distant 2010,
              so my experience counts <b className="accent">more than&nbsp;
              {new Date().getFullYear() - 2010 - 1} years</b>.
              It was a freelance time.
            </p>
            <p>From 2013 to 2015 I have developed more than&nbsp;
              <b className="accent">40&nbsp;mobile&nbsp;websites</b>.
              <br />Thanks to <a
                className="silent"
                href="//eski.mobi/worx"
                rel="noopener noreferrer"
                target="_blank"
              >eski.mobi</a>!
            </p>
            <p>Since 2015 I work in MTU develop different Information-analytical
              systems (GIS, FAIP, Universities Data Bank)
              for <b className="accent">Ministry of Education and Science</b> of Russia
            </p>
          </div>
          <div className="column skew">
            <Header title="Make me happy" icon={<MdFavorite />} />
            <p>Exploring new business ideas and opportunities</p>
            <ul>
              <li>Design and Front-end <MdInsertEmoticon /></li>
              <li>Espresso <MdFreeBreakfast /></li>
              <li>Cycling <MdDirectionsBike /></li>
              <li>Music <MdMusicNote /></li>
              <li>Bacon and fried eggs <MdLocalRestaurant /></li>
              <li>Gadgets and DIY <MdDevicesOther /></li>
            </ul>
          </div>
        </div>
        </div>
        {separator}
        <Header title="The projects I've created" />
        <div className="content">
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default Main;
