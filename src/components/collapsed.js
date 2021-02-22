import React, {useState} from 'react';
import CollapsedBlock from './collapsedBlock';
import '../styles/collapsed.css'

let Collapsed = () => {
    let blocks = ['How do I change my details?', 'What platforms will I be able to use?', 'How do I change my details?', 'How do I change my details?', 'How do I change my details?', 'How do I change my details?', 'How do I change my details?']

    let content = ['1111111111111111111111', 'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!', '3333333333333', '44444444444444444444', '55555555555555555555555555', '666666666666666666666666666666', '77777777777777777777777777777']
    return(
        <section className='header-collapsed-wrapper'>
            <h1 className='collapsed-header'>Frequently asked questions</h1>
            <div className='collapsed-blocks-container'>
                {
                    blocks.map((element, index) => <CollapsedBlock blockName={element} text={content[index]}/>)
                }
            </div>
        </section>
    )
}

export default Collapsed;