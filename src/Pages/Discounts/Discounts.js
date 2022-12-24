import GridTable from '../../Components/Shared/GridTable';
import columns from '../../Data/Discounts/columns.json';
import data from '../../Data/Discounts/data.json';

const Discounts = () => {
  return (
    <>
        <GridTable tableTitle={'Discounts'} data={data} cols={columns}/>
    </>
  );
}

export default Discounts;
