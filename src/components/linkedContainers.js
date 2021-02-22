import '../styles/linkedContainers.css';
import rightLink from './img/rightLink.svg';
import leftlink from './img/leftlink.svg'

const LinkedContainers = () => {
  return (
      <section className='container'>
          <h1 className='LinkedContainers--header'>Getting Started Is Fast & Easy</h1>
          <div className='infoLine'>
              <div className='infoContainer'>
                  <p className='number'>01.</p>
                  <p className='subHeader'>Register</p>
                  <p className='text'>Complete the simple registration to get your trading credentials.</p>
              </div>
              <div className='linkContainer'>
                  <img className='link' src={rightLink} alt=""/>
              </div>
              <div className='infoContainer right'>
                  <p className='number'>02.</p>
                  <p className='subHeader'>Verification</p>
                  <p className='text'>Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.</p>
              </div>
              <div className='linkContainer leftlink'>
                  <img className='link' src={leftlink} alt=""/>
              </div>
              <div className='infoContainer'>
                  <p className='number'>03.</p>
                  <p className='subHeader'>Deposit funds</p>
                  <p className='text'>Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.</p>
              </div>
              <div className='linkContainer'>
                  <img className='link' src={rightLink} alt=""/>
              </div>
              <div className='infoContainer right'>
                  <p className='number'>04.</p>
                  <p className='subHeader'>Start Trading</p>
                  <p className='text'>Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.</p>
              </div>
          </div>
      </section>
  )
};

export default LinkedContainers;