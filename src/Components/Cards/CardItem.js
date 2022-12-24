import Card from 'react-bootstrap/Card';
import React from "react";
import './card.css';
import DashboardCardIcon from './Icons/DashboardCardIcon';

const CardItem=({info}) => {
  return (
    <Card style={{borderLeft:"5px solid "+(info.border)}}>
      <Card.Body className='d-flex ms-2'>
        <div>
          <h5 style={{color:(info.color)}} className='cardTitle'>{info.title}</h5>
          <Card.Title style={{ fontWeight: '600' }}>{info.data}</Card.Title>
        </div>
        <DashboardCardIcon options={{ color:info.color ,id: info.id }}/>
      </Card.Body>
    </Card>
  );
}

export default CardItem;