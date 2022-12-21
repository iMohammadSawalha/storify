import React, { useState } from 'react';
import './Dashboard.css';
import Card from "../../Components/Cards/CardItem";
import cardData from "../../Data/Dashboard/data.json";
import statisticCardData from "../../Data/Dashboard/statisticCardData.json"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatisticCard from '../../Components/Cards/StatisticCard';

const Dashboard = () => {
  //Todo:
  //Order statistics
  return (
    <>
      <Row className='dashboardBox'>
        {cardData.map((cardData)=>
          <Col lg={3} md={6} sm={9} xs={12} key={cardData.id}  className='mb-3'>
            <Card key={cardData.id} info={cardData} />
          </Col>
        )}
        {statisticCardData.map((statisticCardData)=>
          <Col key={statisticCardData.id} lg={3} md={6} sm={9} xs={12} className='mb-3'>
            <StatisticCard key={statisticCardData.id} info={statisticCardData} data={statisticCardData.data}/>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Dashboard