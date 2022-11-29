import './Home.css';
import Card from "../../Components/Cards/CardItem";

const Home = () => {
  return (
    <>
      <div className='row cardsDiv'>
        <div className='col-3'>
          <Card info={{title:'Sales', subTitle:'$27,027'}} />
        </div> 
        <div className='col-3'>
          <Card info={{title:'Earnings', subTitle:'$9,827'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Growth Percentage', subTitle:'23.3%'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'New Customers', subTitle:'129'}} />
        </div>
      </div>
      <div className='row cardsDiv'>

        <div className='col-8'>
          <Card info={{title:'Earnings Overview', subTitle:'Last 12 month\' sales'}} />
        </div>
        <div className='col-4'>
          <Card info={{title:'Growth Percentage', subTitle:'This month\'s Sales'}} />
        </div>
      </div>
      </>
  )
}

export default Home