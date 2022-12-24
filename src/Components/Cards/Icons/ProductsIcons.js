import { BsEarbuds } from 'react-icons/bs';
import { FiSmartphone } from 'react-icons/fi';
import { GiHoodie } from 'react-icons/gi';

const ProductsIcon=({options}) => {
    const icons=[
        <FiSmartphone style={{color:(options.color)}} size='24px' className='m-auto'/>,
        <BsEarbuds style={{color:(options.color)}} size='24px' className='m-auto'/>,
        <GiHoodie style={{color:(options.color)}} size='24px' className='m-auto'/>,
    ];
  return (
    icons[options.id-1]
  )
}

export default ProductsIcon;