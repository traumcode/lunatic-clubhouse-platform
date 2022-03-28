import React from 'react';
import {FaVoteYea} from 'react-icons/fa'


export default function JoinUs(props) {
    return (
        <div className='join-us' id='joinus'>
            <h1 className='join-us-title'>Join Us</h1>
            <div className='join-us-text'><FaVoteYea/>  Join the Lunatic Clubhouse for a chance to represent your favorite NFT community on Terra!
            </div>
        </div>
    );
}
