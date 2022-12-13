import React, { useState } from 'react';
import './Home.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Home/data.json";

const Home = () => {
  const [cardData,setCardData] = useState(data);
  return (
    <>
      <div className='row'>
        <div className='col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-3 mb-3'>
          <Card info={{title:"Hi, Mohammad" , data:"Welcome back to your admin control panel!"}} />
        </div>
        {cardData.map((cardData)=>
        <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-4 ps-lg-2 mb-3'>
            <Card key={cardData.id} info={cardData} />
        </div>)}
      </div>
    </>
  )
}

export default Home