import Card from 'react-bootstrap/Card';
import React from "react";
import './card.css';
import DashboardCardIcon from './Icons/DashboardCardIcon';
import HomeCardIcon from './Icons/HomeCardIcon';

const CardItem=({info}) => {
  return (
    <Card style={{borderLeft:"5px solid skyblue"}}>
      <Card.Body className='d-flex ms-2'>
        <div>
          <h5 className='cardTitle'>{info.title}</h5>
          <Card.Title style={{ fontWeight: '600' }}>{info.data}</Card.Title>
        </div>
        {info.Dashboard ? 
        (<DashboardCardIcon options={{ id: info.id }}/> )
        :
        (<HomeCardIcon options={{ id: info.id }}/> )}
      </Card.Body>
    </Card>
  );
}

export default CardItem;