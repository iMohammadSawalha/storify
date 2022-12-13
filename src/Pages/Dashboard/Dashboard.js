import React, { useState } from 'react';
import './Dashboard.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Dashboard/data.json";

const Dashboard = () => {
  const [cardData,setCardData] = useState(data);
  return (
    <>
      <div className='row dashboardBox'>
        {cardData.map((cardData)=>
          <div className='col-lg-3 col-md-6 col-sm-9 col-xs-12 ps-lg-2 mb-3'>
            <Card key={cardData.id} info={cardData} />
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard