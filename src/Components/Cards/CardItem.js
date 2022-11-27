import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import './card.css';
import DoughtnutChart from './DoughnutChart';
export default function CardItem({info}) {

  return (
    <Card>
      <Card.Body>
        <div className='cardBody'>
          <div className='parentBox'>
            <h4 id='cardTitle'>{info.title}</h4>
            <h3 className="mb-2 text-muted">{info.subTitle}</h3>
            <Card.Link href="#"></Card.Link>
          </div>
          <DoughtnutChart dimension={'100px'} />
        </div>
      </Card.Body>
    </Card>
  );
}