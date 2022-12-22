import AreaLineChart from '../../Components/Analysis/AreaLineChart';
import ArrowUp from '../../Components/Analysis/ArrowUp';
import DoughnutChart from '../../Components/Analysis/DoughnutChart';
import GridTable from '../../Components/Analysis/GridTables/GridTable';
import LargeCard from '../../Components/Analysis/LDashCards';
import LineChart from '../../Components/Analysis/LineChart';
import MiniCards from "../../Components/Analysis/MiniDashCards";
import PieChart from '../../Components/Analysis/PieChart';
import PolarChart from '../../Components/Analysis/PolarChart';
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
                    <div className='col-lg-4 col-md-4 order-1'>
                      <div className='row'>
                          <div className='col-lg-6 col-md-12 col-6 mb-4'>
                            <MiniCards title={"Profit"} data={"$12,689"} subdata={<ArrowUp Percentage={71.20}/>} img={"https://mardizu.co.id/assets/asset_admin/img/illustration/success.png"} imgw={"60"} imgh={"30"}/>
                          </div>
                          <div className='col-lg-6 col-md-12 col-6 mb-4'>
                          <MiniCards title={"Sales"} data={"$2,209"} subdata={<ArrowUp Percentage={13.42}/>} img={"https://banner2.cleanpng.com/20180713/ll/kisspng-online-wallet-bitcoin-cryptocurrency-wallet-money-petai-5b48cb6a0b0fa2.1447918415314973220453.jpg"} imgw={"30"} imgh={"30"}/>
                          </div>
                      </div>
                    </div>
                    <div className='col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4 card p-1'>
                    <span className="h4 fw-semibold d-block">Total Revenue</span>
                    <div className="Wrapper">
                          <AreaLineChart/>
                    </div>
                    </div>
                    <div className='col-12 col-md-8 col-lg-4 order-3 order-md-2 mb-4'>
                      <div className='row'>
                        <div className='col-6 mb-4'>
                        <MiniCards title={"Payments"} data={"$2,193"} subdata={<ArrowUp Percentage={10.62}/>} img={"https://banner2.cleanpng.com/20180330/qxq/kisspng-paypal-logo-computer-icons-payment-paypal-5abe1f99ca9d72.9892264015224093698299.jpg"} imgw={"36"} imgh={"20"}/>
                        </div>
                        <div className='col-6 mb-4'>
                        <MiniCards title={"Transactions"} data={"$13,813"} subdata={<ArrowUp Percentage={21.93}/>} img={"https://img.favpng.com/0/5/18/computer-icons-credit-card-png-favpng-DyPKKiNGxPkpeBLHDdXsfcYJV.jpg"} imgw={"35"} imgh={"25"}/>
                        </div>
                        <div className='col-12'>
                        <LargeCard title={"Order Statistics"} subtitle={"42.82k Total Sales"} data={"8,258"} datatitle={"Total Orders"} chart={<div className='wrapper mt-reduce'><LineChart/></div>}/>
                        </div>
                      </div>
                    </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-5 col-sm-8 col-xl-4 order-0 mb-4'>
          <LargeCard title={"Order Statistics"} subtitle={"42.82k Total Sales"} data={"8,258"} datatitle={"Total Orders"} chart={<div className='wrapper'><DoughnutChart/></div>}/>
          </div>
          <div className='col-md-6 col-lg-5 col-sm-8 col-xl-4 order-1 mb-4'>
          <LargeCard title={"Traffic Source"} subtitle={"3.2k Visits last month"} data={"143"} datatitle={"Today"} chart={<div className='wrapper'><PolarChart/></div>}/>
          </div>
          <div className='col-md-6 col-lg-5 col-sm-8 col-xl-4 order-2 mb-4'>
          <LargeCard title={"Most Sold"} subtitle={"Electronic 82.5k"} data={"155.4k"} datatitle={"Total Sold"} chart={<div className='wrapper'><PieChart /></div>}/>
          </div>
        </div>
        <div className='row'>
          <GridTable tableTitle={"Latest Orders"} cols={DataGridCol} data={Orders}/> 
        </div>
      </div>
      </div>
)}
export default Analysis;