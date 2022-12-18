import AreaLineChart from '../../Components/Analysis/AreaLineChart';
import DoughnutChart from '../../Components/Analysis/DoughnutChart';
import GridTable from '../../Components/Analysis/GridTables/GridTable';
import MiniCards from "../../Components/Analysis/MiniDashCards";
import RadarChart from '../../Components/Analysis/RadarChart';
import VerticalCards from '../../Components/Analysis/VDashCards';
import CardItem from "../../Components/Cards/CardItem";
import './Analysis.css';
import DataGridCol from "./DataGridColumn";
import Orders from './Orders-Latest.json';
const Analysis = () => {
  return (
    <div className='content-wrapper'>
      <div className='container-xxl flex-grow-1 container-p-y'>
        <div className='row'>
                    <div className='col-lg-8 mb-4 order-0'>
                      <CardItem info={{title:"Good Morning Obada",data:<div className='h4'>Guess What ! , Today you made 81% More Sales.</div>}}/>
                    </div>
                    <div className='col-lg-4 col-md-4 mb-4 order-1'>
                      <div className='row'>
                          <div className='col-lg-6 col-md-12 col-6'>
                            <MiniCards title={"Profit"} data={"$12,689"} subdata={<li className='no-dot'><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-512.png" width="20" height="20"/>+71.20%</li>} img={"https://mardizu.co.id/assets/asset_admin/img/illustration/success.png"} imgw={"60"} imgh={"30"}/>
                          </div>
                          <div className='col-lg-6 col-md-12 col-6'>
                          <MiniCards title={"Sales"} data={"$2,209"} subdata={<li className='no-dot'><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-512.png" width="20" height="20"/>+10.62%</li>} img={"https://banner2.cleanpng.com/20180713/ll/kisspng-online-wallet-bitcoin-cryptocurrency-wallet-money-petai-5b48cb6a0b0fa2.1447918415314973220453.jpg"} imgw={"30"} imgh={"30"}/>
                          </div>
                      </div>
                    </div>
                    <div className='col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4'>
                          <AreaLineChart/>
                    </div>
                    <div className='col-12 col-md-8 col-lg-4 order-3 order-md-2'>
                      <div className='row'>
                        <div className='col-6 mb-4'>
                        <MiniCards title={"Payments"} data={"$2,193"} subdata={<li className='no-dot'><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-512.png" width="20" height="20"/>+10.62%</li>} img={"https://banner2.cleanpng.com/20180330/qxq/kisspng-paypal-logo-computer-icons-payment-paypal-5abe1f99ca9d72.9892264015224093698299.jpg"} imgw={"36"} imgh={"20"}/>
                        </div>
                        <div className='col-6 mb-4'>
                        <MiniCards title={"Transactions"} data={"$13,813"} subdata={<li className='no-dot'><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-512.png" width="20" height="20"/>+23.49%</li>} img={"https://img.favpng.com/0/5/18/computer-icons-credit-card-png-favpng-DyPKKiNGxPkpeBLHDdXsfcYJV.jpg"} imgw={"35"} imgh={"25"}/>
                        </div>
                        <div className='col-12 mb-4'>
                        EMPTY COLUMN
                        </div>
                      </div>
                    </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4 col-xl-4 order-0 mb-4'>
          <VerticalCards title={"Order Statistics"} subtitle={"42.82k Total Sales"} data={"8,258"} datatitle={"Total Orders"} chart={<div className='wrapper'><DoughnutChart/></div>}/>
          </div>
          <div className='col-md-6 col-lg-4 order-1 mb-4'>
          <VerticalCards title={"Traffic Source"} subtitle={"3.2k Visits last month"} data={"143"} datatitle={"Today"} chart={<div className='wrapper'><RadarChart/></div>}/>
          </div>
          <div className='col-md-6 col-lg-4 order-2 mb-4'>
          <VerticalCards title={"Order Statistics"} subtitle={"42.82k Total Sales"} data={"8,258"} datatitle={"Total Orders"} chart={<div className='wrapper'><DoughnutChart/></div>}/>
          </div>
        </div>
        <div className='row'>
          <GridTable tableTitle={<div className='h4'>Latest Orders</div>} cols={DataGridCol} data={Orders}/> 
        </div>
      </div>
      </div>
)}
export default Analysis;