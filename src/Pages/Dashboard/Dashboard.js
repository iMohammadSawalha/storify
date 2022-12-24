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
        <Col xl={6} lg={{span:12}} md={{span:12}} sm={{span:10}} xs={{span:12}} className='mb-4' >
          <Card info={{title:"Hi, Mohammad" , data:"Welcome back to your admin control panel!",color:"skyblue"}} />
          <Row className='dashboardBox mt-4'>
            {statisticCardData.map((statisticCardData)=>
              <Col key={statisticCardData.id} lg={{span:6}} md={{span:6}} sm={{span:12}} xs={{span:12}} className='mb-3'>
                <StatisticCard key={statisticCardData.id} info={statisticCardData} data={statisticCardData.data}/>
              </Col>
            )}
          </Row>
        </Col>

        <Col>
          <Row className='dashboardBox'>
            {cardData.map((cardData)=>
              <Col lg={{span:6}} md={{span:6}} sm={{span:10}} xs={{span:12}} key={cardData.id}  className='mb-3'>
                <Card key={cardData.id} info={cardData} />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard