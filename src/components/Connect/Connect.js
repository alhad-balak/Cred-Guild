import React from 'react'
import './Connect.css'
import cred from './cred.png'

const Connect = () => {
    return (
        <div className='connect'>
            <div className="container">
                <div id="col-1">
                    <div id="logo"><img src={cred} alt="" /></div>
                    <div id="rights">© RankerDao. All Rights Reserved 2022</div>
                </div>
                <div id="col-2">
                    <a href="/">TELEGRAM</a>
                    <a href="/">TWITTER</a>
                    <a href="/">DISCORD</a>
                    <a href="/">INSTAGRAM</a>
                    <a href="/">INVENTORY</a>
                    <a href="/">$RANKER</a>
                    <a href="/">MINT BADGE</a>
                    <a href="/">LITE PAPER</a>
                </div>
            </div>
        </div>
    )
}

export default Connect