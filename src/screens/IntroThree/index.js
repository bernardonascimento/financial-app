import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/hands.json');

const IntroThree = () => (
  <Intro
    sourceOfAnimation={animation}
    title="Title Three"
    body="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />
);

export default IntroThree;