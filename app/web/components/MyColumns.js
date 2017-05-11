import React, { Component } from 'react';

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

import Heading from '../components/Heading';


export default class MyColumns extends Component {
  render() {
    return (
      <div className="overflow-scrolling columns-custom-wrapper">
      <div className="columns columns-custom">
        <div className="column skew">
          <Heading title="Education" icon={<MdSchool />} />
          <p>I am a&nbsp;<b>
            <abbr title="Upper bachelor degree">specialist</abbr> in Computer science</b>,
            graduated from&nbsp;
            <a
              className="silent"
              href="//english.mirea.ru"
              rel="noopener noreferrer"
              target="_blank"
            >
            Moscow Technological University
          </a> with a GPA of <nobr>4.98 out of 5</nobr>.
          </p>
          <p className="silent small">Apart from that I have published
          several scientific papers and a textbook with a study guide for internal use.
      I have alose participated in organization of academic conferences in the University.</p>
        </div>
        <div className="column skew">
          <Heading title="Work Experience" icon={<MdBusinessCenter />} />
          <p>I started in the distant 2010,
            so I have <b className="accent">more than&nbsp;
            {new Date().getFullYear() - 2010 - 1} years</b>.
            I have about 3 years of freelance work experience.
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
          <p>Since 2015 I have been working at MTU developing Information-analytical
            systems (GIS, FAIP, Universities Data Bank)
            for <b className="accent">Ministry of Education and Science</b> of Russia
          </p>
        </div>
        <div className="column skew">
          <Heading title="Make me happy" icon={<MdFavorite />} />
          <p>Exploring new business ideas and opportunities</p>
          <ul>
            <li>Design and Front-end <MdInsertEmoticon /></li>
            <li>Espresso <MdFreeBreakfast /></li>
            <li>Cycling <MdDirectionsBike /></li>
            <li>Music <MdMusicNote /></li>
            <li>Eggs and bacon <MdLocalRestaurant /></li>
            <li>Gadgets and DIY <MdDevicesOther /></li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}
