import React, { useState } from 'react';
import './Home.css';
import Card from "../../Components/Cards/CardItem";
import data from "../../Data/Dashboard/data.json";

const Home = () => {
  const [cardData,setCardData] = useState(data);
  let counter =0;
  // setCardData({data});
  // const [first, setfirst] = useState({});
  return (
    <>
      <div className='dashboardBox'>
        {cardData.map((cardData)=>
          <Card key={cardData.id} info={cardData} />
        )}
      </div>
    </>
  )
}

export default Home