import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import './card.css';
import DoughtnutChart from './DoughnutChart';

export default function CardItem({info}) {
  return (
    <Card>
      <Card.Body>
        <div className='cardBody'>
            <h4 id='cardTitle'>{info.title}</h4>
            {info.chart && (<DoughtnutChart dimension={200}/>)}

        </div>
      </Card.Body>
    </Card>
  );
}