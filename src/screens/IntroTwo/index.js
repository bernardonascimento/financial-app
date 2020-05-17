import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/position.json');

const IntroTwo = () => (
  <Intro
    sourceOfAnimation={animation}
    title="Posição Financeira"
    body="Relação de ativos, passivos e patrimônio da entidade na forma em que estão divulgados no balanço patrimonial. É interessante quando se pretende realizar alguma compra ou fazer algum planejamento de gastos, entre outros, para que, ao gerir sua vida, todas as decisões tomadas sejam muito bem pensadas e baseadas em dados"
  />
);

export default IntroTwo;