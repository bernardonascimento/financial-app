import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/position.json');

const IntroTwo = () => (
  <Intro
    sourceOfAnimation={animation}
    title="Title Two"
    body="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />
);

export default IntroTwo;