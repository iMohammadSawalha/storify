import GridTable from '../../Components/Shared/GridTable';
import columns from '../../Data/Coupons/columns.json';
import data from '../../Data/Coupons/data.json';

const Coupons = () => {
  return (
    <>
        <GridTable tableTitle={'Coupons'} data={data} cols={columns}/>
    </>
  );
}

export default Coupons;
