import React, { useState } from 'react';
import './Dashboard.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Dashboard/data.json";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
  const [cardData,setCardData] = useState(data);
  return (
    <>
      <Row className='dashboardBox'>
        {cardData.map((cardData)=>
          <Col lg={3} md={6} sm={9} xs={12} key={cardData.id}  className='mb-3'>
            <Card key={cardData.id} info={cardData} />
          </Col>
        )}
      </Row>
    </>
  )
}

export default Dashboard