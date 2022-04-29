import React from 'react'
import ProjectSeed from './ProjectSeed.png'
import './Friend.css'

const Friend = () => {
    return (
        <div>
            <div className="title-friend">
                <div className="outline-text friends-text">
                    OUR
                </div><div className="fill-text friends-text">
                    FRIENDS
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                </div>
                <div className="col">
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                </div>
                <div className="col">
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                </div>
                <div className="col">
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                </div>
                <div className="col">
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                    <img src={ProjectSeed} alt="" />
                </div>


            </div>
        </div>
    )
}

export default Friend
