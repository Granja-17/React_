import React from 'react';
import Citacao from './Citacao';
import Paragrafo from './Paragrafo';

function QuoteMaker() {
    return (
      <blockquote>

        <Paragrafo />

        <Citacao />

        <Paragrafo />
       
      </blockquote>
    );
};


export default QuoteMaker;