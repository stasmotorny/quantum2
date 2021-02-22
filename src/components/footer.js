import '../styles/footer.css'

let Footer = () => {
  return (
      <section className='site-footer'>
          <div className='footer--top'>
              <h1 className='footer--top__logo'>LOGO</h1>
              <div className='textblocks-wrapper'>
                  <div className='footer--top__textblock'>
                      <h1 className='footer--top__header'>Information and high risk warning:</h1>
                      <p className='footer--top__paragraph'>Trading with foreign exchange (FX), contract for differences (CFDs) and precious metals carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade foreign exchange or contract for differences, carefully consider your investment objectives, experience level, and risk tolerance.</p>
                  </div>
                  <div className='footer--top__textblock'>
                      <h1 className='footer--top__header'>Legal disclaimer:</h1>
                      <p className='footer--top__paragraph'>Forex trading entails significant risks and is not appropriate for all investors. The possibility of incurring substantial losses should be taken into account. It is therefore important to understand the possible consequences of investing. Traders should weigh their earning potential against the risks involved and act accordingly. Interactive Trade Ltd operating under brand and using domenLink domain within the European Economic Area.</p>
                  </div>
              </div>
              <nav className='footer--navigation'>
                  <ul className='footer--navigation__list'>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>About us</a>
                      </li>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>Instructions</a>
                      </li>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>Platforms</a>
                      </li>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>Contact Us</a>
                      </li>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>Sign in</a>
                      </li>
                      <li className='footer--navigation__item'>
                          <a href="#" className='footer--navigation__link'>Sign up for free</a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div className='footer-bottom'>
              <p className='copyright'>Copyright 2020, All Right Reserved</p>
              <div className='footer-botom--linksblock'>
                  <ul className='additionalinfo'>
                      <li className='additionalinfo--item'><a href="#" className='additionalinfo--item__link'>Terms and Conditions</a></li>
                      <li className='additionalinfo--item'><a href="#" className='additionalinfo--item__link'>Privacy Policy</a></li>
                      <li className='additionalinfo--item'><a href="#" className='additionalinfo--item__link'>Risk Warnings</a></li>
                      <li className='additionalinfo--item'><a href="#" className='additionalinfo--item__link'>Anti-Money Laundering</a></li>
                  </ul>
              </div>
          </div>
      </section>
  )
};

export default Footer;