import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import './card.css';

export default function CardItem({info}) {

  return (
    <Card>
      <Card.Body>
        <div className=''>
          <Card.Title>{info.title}</Card.Title>
          <div> Percentage </div>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{info.subTitle}</Card.Subtitle>
        <Card.Text>{info.text}</Card.Text>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
  );
}