import GridTable from '../../Components/Analysis/GridTables/GridTable';
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
