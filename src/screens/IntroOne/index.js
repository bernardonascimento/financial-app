import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/hands.json');

const IntroOne = () => (
  <Intro
    sourceOfAnimation={animation}
    title="Controle patrimonial"
    body="Fazer um controle de patrimônio de forma correta e realizar uma gestão patrimonial periodicamente, possibilita à voce: realizar uma gestão financeira eficiente e construir uma previsão de custos mais assertiva, reduzir gastos, otimizar processos de compras e mais"
  />
);

export default IntroOne;