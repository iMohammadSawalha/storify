import './Home.css';
import Card from "../../components/Cards/CardItem";


const Home = () => {
  return (
    <>
      <div className='row cardsDiv'>
        <div className='col-3'>
          <Card info={{title:'Sales', subTitle:'This month\'s Sales', text:'\n1.\n'}} />
        </div> 
        <div className='col-3'>
          <Card info={{title:'Earnings', subTitle:'This month\'s Sales', text:'\n2.\n'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Growth Percentage', subTitle:'This month\'s Sales', text:'\n3.\n'}} />
        </div>
      </div>
      <div className='row cardsDiv'>
        <div className='col-3'>
          <Card info={{title:'Sales', subTitle:'This month\'s Sales', text:'\n1.\n'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Earnings', subTitle:'This month\'s Sales', text:'\n2.\n'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Growth Percentage', subTitle:'This month\'s Sales', text:'\n3.\n'}} />
        </div>
      </div>
      <div className='row cardsDiv'>
        <div className='col-3'>
          <Card info={{title:'Sales', subTitle:'This month\'s Sales', text:'\n1.\n'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Earnings', subTitle:'This month\'s Sales', text:'\n2.\n'}} />
        </div>
        <div className='col-3'>
          <Card info={{title:'Growth Percentage', subTitle:'This month\'s Sales', text:'\n3.\n'}} />
        </div>
      </div>
      </>
  )
}

export default Home