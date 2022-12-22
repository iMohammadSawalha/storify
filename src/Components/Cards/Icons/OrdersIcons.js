import DevicesIcon from '@mui/icons-material/Devices';
import ChairIcon from '@mui/icons-material/Chair';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const HomeCardIcon=({options}) => {
    const icons=[
        <DevicesIcon className='ms-2 me-auto mt-auto mb-auto'/>,
        <CheckroomIcon className='ms-2 me-auto mt-auto mb-auto'/>,
        <ChairIcon className='ms-2 me-auto mt-auto mb-auto'/>,
    ];
  return (
    icons[options.id-1]
  )
}

export default HomeCardIcon;