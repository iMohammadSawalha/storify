import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import './card.css';
import DoughtnutChart from './DoughnutChart';
export default function LineChartCard({info}) {

  return (
    <Card>
      <Card.Body>
        <div className='cardBody'>
          <div className='parentBox'>
            <h4 id='cardTitle'>{info.title}</h4>
            <Card.Subtitle className="mb-2 text-muted">{info.subTitle}</Card.Subtitle>
            <Card.Link href="#"></Card.Link>
          </div>
          <DoughtnutChart width={320} hieght={320} />
        </div>
      </Card.Body>
    </Card>
  );
}