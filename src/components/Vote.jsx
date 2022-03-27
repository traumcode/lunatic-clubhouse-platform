import React from 'react';
import {ReactComponent as VoteFrame} from "../assets/svgs/vote-frate.svg";


export default function Vote(props) {
    return (
        <div className='vote'>
            <VoteFrame className='vote-frate'/>
        </div>
    );
}
