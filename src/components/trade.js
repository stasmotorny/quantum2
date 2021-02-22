import '../styles/trade.css';
import png from './img/blocks.png'

let Trade = () => {
  return (
      <main>
          <div className='textAndBtnContainer'>
              <h1 className='header2'>Trade everywhere. Invest here!</h1>
              <p className='tradetext'>We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere.</p>
              <a href="#" className='tradebtn'>Start trading</a>
          </div>
          <div className='image'>
              <img src={png} className='chartimg' alt=""/>
          </div>
      </main>
  )
};

export default Trade;