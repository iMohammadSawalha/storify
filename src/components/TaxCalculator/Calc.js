import './Calc.css'
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


function Range() {
    const [value1,SetValue1]=useState(0);
    const [value2,SetValue2]=useState(0);

    return(
<>
        <Card className='sliderCard'>
        <Card.Header>
          <h1 className='sliderLabel'>Tax Calculator</h1>
        </Card.Header>

        <Card.Body>
    <label className='sliderLabel'> Income : </label>
    <div className='flex2'></div>
    <div className="slider-parent">
    <span className='c'>$</span>
    <input className='sliderValue' type="text" value={value1} />
    <div className='flex2'></div>
         <div>
         <input  type="range" min="0" max="1000000" 
         onChange={({ target: { value: radius } }) => { SetValue1(radius); }} />
         </div>
      </div>

      <div className='flex'></div>

      <label className='sliderLabel'> Tax percentage: </label>
      <div className='flex2'></div>
      <div className="slider-parent">
      <span className='c'>%</span>
    <input className='sliderValue' type="text" value={value2} />
    <div className='flex2'></div>
        <div>
         <input type="range" min="0" max="100" 
         onChange={({ target: { value: radius } }) => { SetValue2(radius);   }}/>
         </div>
      </div>
    
      <div className='flex'></div>
      <h5 className='sliderLabel'> Total :</h5>
      <span> {total} </span>





      </Card.Body>


  </Card>
  </>
    )
}

export default Range;