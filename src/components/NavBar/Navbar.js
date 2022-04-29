import React from 'react'
import './Navbar.css'
import cred from './cred.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <img className='logo' src={cred} alt=""/>
                <ul style={{fontWeight: '1000'}}>
                    <li><a className="active" href="/">MINT BADGE</a></li>
                    <li><a href="/">TELEGRAM</a></li>
                    <li><a href="/">TWITTER</a></li>
                    <li><a href="/">DISCORD</a></li>
                    <li><a href="/">$RANKER</a></li>
                    <li><a href="/">INVENTORY</a></li>
                    <li><a href="/">LITEPAPER</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar