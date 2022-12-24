import DevicesIcon from '@mui/icons-material/Devices';
import ChairIcon from '@mui/icons-material/Chair';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const HomeCardIcon=({options}) => {
    const icons=[
        <DevicesIcon style={{color:(options.color)}} className='m-auto'/>,
        <CheckroomIcon style={{color:(options.color)}} className='m-auto'/>,
        <ChairIcon style={{color:(options.color)}} className='m-auto'/>,
    ];
  return (
    icons[options.id-1]
  )
}

export default HomeCardIcon;