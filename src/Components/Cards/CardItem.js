import Card from 'react-bootstrap/Card';
import React from "react";
import './card.css';
import CardIcon from './CardIcon';

export default function CardItem({info}) {
  return (
    <Card>
      <Card.Body className='d-flex ms-2'>
        <div className='mainCardBody'>
            <h5 id='cardTitle'>{info.title}</h5>
            <Card.Title style={{fontWeight:'600'}}>{info.data}</Card.Title>
            {/* {info.chart && (<DoughtnutChart dimension={200}/>)} */}
        </div>
        <CardIcon options={{id:info.id}}/>
      </Card.Body>
    </Card>
  );
}