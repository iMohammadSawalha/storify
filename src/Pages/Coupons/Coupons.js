import GridTable from '../../Components/Shared/GridTable';
import columns from '../../Data/Coupons/columns.json';
import data from '../../Data/Coupons/data.json';

const Coupons = () => {
  return (
    <>
        <GridTable name={'Coupons'} data={data} columns={columns}/>
    </>
  );
}

export default Coupons;
