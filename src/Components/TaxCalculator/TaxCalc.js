import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';

function TaxCalc() {
  const [Amount,SetAmount]=useState(500);
  const [Percentage,SetPercentage]=useState(50);
  const [minAmount,SetMinAmount]=useState(0);
  const [maxAmount,SetMaxAmount]=useState(1000);
  let total=Amount * Percentage/100;
    return(
      <>
        <Card className=''>
          <Card.Header>
            <div className='d-flex'>
            <Form.Label className='my-auto'>Tax Calculator</Form.Label><small className='ms-auto my-auto'>${total}</small>
            </div>
          </Card.Header>
          <Card.Body>
            <div className='d-flex'>
              <Form.Label className='h6' htmlFor="inputAmount">Amount</Form.Label>
              <Form.Control
                className='ms-auto py-auto'
                style={{padding:4 ,fontSize:14,width:75 , height:25}}
                type="float"
                id="inputAmount"
                value={Amount}
                onChange={({ target: { value: radius } }) => { SetAmount(radius); }}
              />
            </div>
            <div className='d-flex mt-2'>
              <Form.Control
                className='py-auto'
                style={{fontSize:12, padding:2, width:40 , height:20}}
                type="int"
                value={minAmount}
                onChange={({ target: { value: radius } }) => { SetMinAmount(radius); }}
              />
              <Form.Range 
                min={minAmount}
                max={maxAmount}
                value={Amount}
                onChange={({ target: { value: radius } }) => { SetAmount(radius); }}
              />
              <Form.Control
                className='py-auto'
                style={{fontSize:12, padding:2, width:40 , height:20}}
                type="int"
                value={maxAmount}
                onChange={({ target: { value: radius } }) => { SetMaxAmount(radius); }}
              />
            </div>
            <div className='d-flex mt-2'>
              <span className='h6'>Tax Percentage</span><small className='ms-auto'>{Percentage}%</small>
            </div>
            <Form.Range 
            onChange={({ target: { value: radius } }) => { SetPercentage(radius); }}
            />
          </Card.Body>
        </Card>
      </>
    )
}

export default TaxCalc;
