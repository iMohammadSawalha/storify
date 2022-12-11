import React, { useState } from 'react';
import './Home.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Home/data.json";

const Home = () => {
  const [cardData,setCardData] = useState(data);
  return (
    <>
      <div className='row'>
        <div className='col-6 mb-3'>
          <Card key={cardData.id} info={cardData} />
        </div>
        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-lg-2 mb-3'>
          <Card key={cardData.id} info={cardData} />
        </div>
        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-lg-2 mb-3'>
          <Card key={cardData.id} info={cardData} />
        </div>
      </div>
    </>
  )
}

export default Home