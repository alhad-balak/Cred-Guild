import React from 'react'
import './OtherBody.css'
import item1 from './item-1.png'
import item1bg from './item-1-bg.png'
import item2 from './item-2.png'
import item3 from './item-3.webp'
import item4 from './item-4.png'
import item5 from './item-5.png'
import item6 from './item-6.png'
import cyball from './cyball.png'

const OtherBody = () => {
    return (
        <div className="main-grid">
            <div className="item-1 grid-item" id="item-1">
                <div className="text text-1" style={{alignItems:'center'}}>
                    <div className="text-3"><p className=" text-title outline-text" style={{ WebkitTextStrokeColor: 'white' }}>GET SET, PLAY,</p><p className="text-title fill-text" id="earn" style={{ color: 'white', fontWeight: '1000', zIndex: '1' }}>EARN</p></div>
                    <div className='text-des' style={{ fontWeight: '600' }}>We are a guild of gamers who are passionate about P2E. We aim to empower our guild members to enjoy all the benefits as they explore the vast emergent socialfi ecosystem.</div>
                    <a href="/" ><button className='join-guild'>JOIN OUR GUILD NOW</button></a>
                </div>
                <div className="image" >
                    <img id="item-1-pic" src={item1} alt="" />
                </div>
            </div>
            <div className="item-2 grid-item">
                <div className="image" >
                    <img src={item2} alt="" className="item-2-pic" />
                </div>
                <div className="text">
                    <div className="text-3"><p className=" text-title outline-text item-2-title" >YOUR ADVENTURE</p> <p className="item-2-title text-title outline-text"></p><p className="item-2-title text-title fill-text">STARTS NOW</p></div><div className="image" >
                        <img src={item2} alt="" className="item-22-pic" />
                    </div>

                    <div className='text-des item-2-des'>We currently owned 1000+ gaming NFTs and will add more in the future. You are free to explore each world according to your own tactics and gameplay.</div>
                    <div style={{ color: '#4e27af' }}><strong>All our members have full access to our DAO inventory of NFTs, and also a step by step guide on how to start P2E.</strong></div>
                    <div id='item-2-text-grid'>
                        <img src={cyball} alt="" className='item-2-text-grid-content' />
                        <img src={cyball} alt="" className='item-2-text-grid-content' />
                        <img src={cyball} alt="" className='item-2-text-grid-content' />
                        <img src={cyball} alt="" className='item-2-text-grid-content' />
                    </div>
                </div>
            </div>
            <div className="item-3 grid-item">
                <div className="text">
                    <div className="text-3"><p className=" text-title outline-text item-2-title" >MINT YOUR</p><p className="item-2-title text-title fill-text">GUILD BADGE</p></div><div className="image" >
                        <img src={item3} alt="" className="item-22-pic" />
                    </div>

                    <div className='text-des item-2-des item-3-des'>You can enjoy our inventory of NFTs and other boons with yout RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and beyond.</div>

                    <a href="/" ><button className='join-guild'>LEARN ABOUT $RANKER</button></a>
                </div>
                <div className="image" >
                    <img src={item3} alt="" className="item-2-pic item-3-pic" />
                </div>
            </div>
            <div className="item-4 grid-item">
                <div className="image" >
                    <img src={item4} alt="" className="item-2-pic" />
                </div>
                <div className="text">
                    <div className="text-3"><p className=" text-title outline-text item-2-title" >GET YOUR</p><p className="item-2-title text-title fill-text">RANKER</p></div><div className="image" >
                        <img src={item4} alt="" className="item-22-pic" />
                    </div>

                    <div className='text-des item-2-des'>Use $RANKER tokens to mint your guild badge and unlock access to the DAO! You can get our tokens at these following site.</div>
                    <div id='item-2-text-grid'>
                        <img src={cyball} alt="" className='item-3-text-grid-content' />
                        <img src={cyball} alt="" className='item-3-text-grid-content' />
                        <img src={cyball} alt="" className='item-3-text-grid-content' />
                        <img src={cyball} alt="" className='item-3-text-grid-content' />
                        <img src={cyball} alt="" className='item-3-text-grid-content' />
                    </div>
                </div>
            </div>
            <div className="item-5 grid-item">
                <div className="text">
                    <div className="text-3"><p className=" text-title outline-text item-2-title" >A DAO</p><p className="item-2-title text-title fill-text">COMMUNITY</p></div><div className="image" >
                        <img src={item5} alt="" className="item-22-pic" />
                    </div>

                    <div className='text-des item-2-des'>We are a collective community of crypto adopters that welcomes our guild badge owners to vote on how we grow our platform.</div>
                    <div style={{ color: '#4e27af' }}><strong>Participants of the DAO may vote on how we expand our portfolio, be it a metaverse land, sports NFTs, works of art, etc.</strong></div>
                </div>
                <div className="image" >
                    <img src={item5} alt="" className="item-5-pic" />
                </div>
            </div>
            <div className="item-6 grid-item">

                <div className="image" >
                    <img src={item6} alt="" className="item-5-pic" />
                </div>
                <div className="text">
                    <div className="text-3"><p className=" text-title outline-text item-2-title" >SOCIAL - FI</p><p className="item-2-title text-title fill-text">STRONG</p></div><div className="image" >
                        <img src={item6} alt="" className="item-22-pic" />
                    </div>

                    <div className='text-des item-2-des'>Start your adventure together! Our community is ready to strategize, practice and formulate new ideas!<br /><br />Compete in the highest level of gaming against other guilds, and fellow rankers. Good luck, have fun!</div>
                    <div style={{ color: '#4e27af' }}><strong>As we grow, we will implement more SocialFi features such as in-guild tournaments, and other exciting activities</strong></div>
                </div>
            </div>
        </div >
    )
}

export default OtherBody