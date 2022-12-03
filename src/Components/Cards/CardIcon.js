import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
import { FiArrowUp , FiPackage } from 'react-icons/fi';
import { BsReceiptCutoff } from 'react-icons/bs';
function CardIcon({options}) {
    const icons=[
        <BsReceiptCutoff size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>,
        <FaDollarSign size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>,
        <FiPackage size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>,
        <FiArrowUp size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>
    ];
  return (
    icons[options.id-1]
  )
}

export default CardIcon