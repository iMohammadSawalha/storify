import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function HomeCardIcon({options}) {
    const icons=[
        <AccountBalanceWalletIcon size='30px' color='yellow' className='ms-auto me-3 mt-auto mb-auto'/>,
        <KeyboardDoubleArrowUpIcon size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>,
        <KeyboardDoubleArrowDownIcon size='30px' color='skyblue' className='ms-auto me-3 mt-auto mb-auto'/>,
    ];
  return (
    icons[options.id-1]
  )
}

export default HomeCardIcon