import './Calc.css'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';

function TaxCalc() {
  const [Amount,SetAmount]=useState(0);
  const [Percentage,SetPercentage]=useState(0);
    return(
      <>
        <Card className=''>
          <Card.Header>
            <Form.Label className='my-auto'>Tax Calculator</Form.Label>
          </Card.Header>
          <Card.Body>
            <span className='h6'>Amount {Amount}</span>
            <Form.Range 
              onChange={({ target: { value: radius } }) => { SetAmount(radius); }}
            />
            <span className='h6'>Tax Percentage {Percentage}</span>
            <Form.Range 
              onChange={({ target: { value: radius } }) => { SetPercentage(radius); }}
            />
          </Card.Body>
        </Card>
      </>
    )
}

export default TaxCalc;