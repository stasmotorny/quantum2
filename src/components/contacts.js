import '../styles/contacts.css';
import React, {useState} from 'react';

let Contacts = () => {
    let [inputValue, setInputValue] = useState('');
    let validation = () => {
        if (inputValue.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
            return 'valid'
        }else{
            if (inputValue === '') {
                return 'empty'
            }else {
                return 'invalid'
            }

        }
    };

    let onChange = (event) => {
        setInputValue(event.target.value)
    };
  return (
      <section className='contacts-block'>
          <div className='contacts--text'>
              <h1 className='contacts--text__header'>Contact us!</h1>
              <p className='contact--text__paragraph'>The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.</p>
              <p className='contact--text__paragraph'>This site is owned and operated by Kode Tech Solutions LTD</p>
              <h2 className='contact--text__subheader'>Phone:</h2>
              <a className='contact--text__link' href="tel:442038857261">442038857261</a>
              <h2 className='contact--text__subheader'>Email:</h2>
              <a className='contact--text__link' href="mailto:help@google.com">help@google.com</a>
              <h2 className='contact--text__subheader'>Address:</h2>
              <address className='contact--text__paragraph'>Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960</address>
          </div>
          <form action="" className='contacts--form'>
              <input type="text" placeholder='Name' className='contacts--form__input' required />
              <input type="email" placeholder='Email' className={`contacts--form__input ${validation()}`} onChange={onChange} required />
              <textarea placeholder='Message' name="" id="" cols="30" rows="10" className='contacts--form__textarea' required></textarea>
              <input type="submit" value='SEND' className='contacts--form__submit'/>
          </form>
      </section>
  )
};

export default Contacts;