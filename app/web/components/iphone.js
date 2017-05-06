import React from 'react';

const Iphone = ({ children }) => (
  <div className="marvel-device iphone6 silver">
    <div className="top-bar" />
    <div className="sleep" />
    <div className="volume" />
    <div className="camera" />
    <div className="sensor" />
    <div className="speaker" />
    <div className="screen">
        {children}
    </div>
    <div className="home" />
    <div className="bottom-bar" />
  </div>
);

export default Iphone;
