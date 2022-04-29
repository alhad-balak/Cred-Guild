import React from 'react'
import './OtherBody.css'
import item1 from './item-1.png'
import item1bg from './item-1-bg.png'
import item2 from './item-2.png'
import item3 from './item-3.webp'
import item4 from './item-4.png'
import item5 from './item-5.png'
import item6 from './item-6.png'

const OtherBody = () => {
    return (
        <div className="grid">
            <div className="item-1 grid-item" id="item-1">
                <div className="text" style={{ backgroundImage: `url(${item1bg})` }}>
                    <div className="outline-text">GET SET, PLAY,</div><div className="fill-text">EARN</div>
                    <div>We are a guild of gamers who are passionate about P2E. We aim to empower our guild members to enjoy all the benefits as they explore the vast emergent socialfi ecosystem.</div>
                    <a href="/">JOIN OUR GUILD NOW</a>
                </div>
                <div className="image" style={{ backgroundImage: `url(${item1bg})`, transform: `rotate(180deg)` }}>
                    <img src={item1} alt="" style={{ transform: `rotate(180deg)` }} />
                </div>
            </div>
            <div className="item-2 grid-item">
                <div className="image">
                    <img src={item2} alt="" />
                </div>
                <div className="text">

                </div>
            </div>
            <div className="item-3 grid-item">
                <div className="image">
                    <img src={item3} alt="" />
                </div>
                <div className="text">

                </div>
            </div>
            <div className="item-4 grid-item">
                <div className="image">
                    <img src={item4} alt="" />
                </div>
                <div className="text">

                </div>
            </div>
            <div className="item-5 grid-item">
                <div className="image">
                    <img src={item5} alt="" />
                </div>
                <div className="text">

                </div>
            </div>
            <div className="item-6 grid-item">
                <div className="image">
                    <img src={item6} alt="" />

                </div>
                <div className="text">

                </div>
            </div>
        </div>
    )
}

export default OtherBody