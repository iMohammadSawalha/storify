import Card from 'react-bootstrap/Card';
import React from "react";
import './card.css';
import DashboardCardIcon from './DashboardCardIcon';
import HomeCardIcon from './HomeCardIcon';

export default function CardItem({info}) {
  return (
    <Card>
      <Card.Body className='d-flex ms-2'>
        <div className='mainCardBody'>
          <h5 id='cardTitle'>{info.title}</h5>
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