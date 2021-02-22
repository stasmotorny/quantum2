import React, {useState} from 'react';
import plus from './img/plus.svg';
import cross from './img/cross.svg';
import '../styles/collapsedBlock.css'

let CollapsedBlock = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    let onClick = () => {
        if (collapsed) {
            setCollapsed(false);
        }else{
            setCollapsed(true);
        }
    };

    return (
        <div className='collapse-block'>
            <div className='text-block'>
                <p className='block-header'>{props.blockName}</p>
                {collapsed ? <p className='block-text'>{props.text}</p> : null}
            </div>
            {collapsed ? <img src={plus} className='plus' alt="" style={{transform: 'rotate(45deg)'}} onClick={onClick} /> : <img src={plus} className='plus' alt="" onClick={onClick} />}
        </div>
    )
};

export default CollapsedBlock;