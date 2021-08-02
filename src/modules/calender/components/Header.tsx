import React from 'react';
import '../css/Header.css';
import errorIcon from '../img/error-circle.png';
import errorIcon2x from '../img/error-circle@2x.png';

interface Props {
  verified: boolean;
  nickname: string;
  logoutHandler: () => void;
}

const Header = (props: Props) => {
  return (
    <header>
      <div className="header-logo-background">
        <div className="header-simple-logo" />
      </div>
      <div className="header-contents">
        <div className="header-button-wrapper">
          <div className="header-gray-button-wrapper">
            <button className="header-button-gray">Help</button>
            <button className="header-button-gray">About</button>
          </div>
          <div className="header-black-button-wrapper">
            <button className="header-button-black">My Page</button>
            <button
              className="header-button-black"
              onClick={props.logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="header-message">
          {!props.verified && (
            <img
              className="icon-error"
              alt="error_icon"
              src={errorIcon}
              srcSet={`${errorIcon} 1x, ${errorIcon2x} 2x`}
            />
          )}
          {props.verified
            ? `Hi, ${props.nickname}. Welcome to Position. Get your Position!`
            : `Hi, ${props.nickname}. Welcome to Position. Please verify your e-mail.`}
        </div>
      </div>
    </header>
  );
};

export default Header;
