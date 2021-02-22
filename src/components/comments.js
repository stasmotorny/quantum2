import left from './img/leftarrow.svg';
import right from './img/rightarrow.svg';
import ava from './img/ava.svg';
import parences from './img/parences.svg';
import '../styles/comments.css';

const Comments = () => {
    return (
        <section className='commentsContainer'>
            <div className='widescreencontainer'>
                <div className='header-navigation--block'>
                    <h1 className='comments--header'>People love Big Invest</h1>
                    <div className='comment-navigation'>
                        <div className='arrowcontainer'>
                            <img src={left} className='nav-left' alt=""/>
                        </div>
                        <div className='arrowcontainer'>
                            <img src={right} className='nav-right' alt=""/>
                        </div>
                    </div>
                </div>
                <div className='account-comment'>
                    <div className='person'>
                        <img src={ava} className='person__avatar' alt=""/>
                        <div className='person--info'>
                            <p className='person--info__name'><b>Albert Abello</b></p>
                            <p className='person--info__position'>Director of Growth</p>
                        </div>
                    </div>
                    <div className='comment'>
                        <img src={parences} className='parences' alt=""/>
                        <p className='comment-text'>This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.</p>
                    </div>
                    <p className='date'>01 / 04</p>
                </div>
            </div>

            <div className='smallscreencontainer'>
                <div className='header-navigation--block'>
                    <h1 className='comments--header'>People love Big Invest</h1>
                </div>
                <div className='account-comment'>
                    <div className='arrowcontainer leftarrow'>
                        <img src={left} className='nav-left' alt=""/>
                    </div>
                    <div className='personandcomment'>
                        <div className='person'>
                            <img src={ava} className='person__avatar' alt=""/>
                            <div className='person--info'>
                                <p className='person--info__name'><b>Albert Abello</b></p>
                                <p className='person--info__position'>Director of Growth</p>
                            </div>
                        </div>
                        <div className='comment'>
                            <img src={parences} className='parences' alt=""/>
                            <p className='comment-text'>This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.</p>
                        </div>
                        <p className='date'>01 / 04</p>
                    </div>
                    <div className='arrowcontainer rightarrow'>
                        <img src={right} className='nav-right' alt=""/>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Comments;