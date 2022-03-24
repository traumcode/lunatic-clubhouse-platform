import React from 'react';
import {ReactComponent as Tooltip1} from "../assets/svgs/utility_tooltip1.svg";

export default function Utility(props) {
    return (
        <div className='utility'>
            <h1 className='utility-title'>Utility</h1>
            <div className='utility-tooltip1'>
                <Tooltip1 className='tootltip1'/>
                <h1 className='tooltip1-title'>Decision-making in the Lunatic Council</h1>
                <p className='tooltip1-description'>A crew member can enter in the Lunatic Council where the decision making
                for the Clubhouse is taking on. The Lunatic Council is a DAO that focuses on the activities that happen inside our Clubhouse </p>
            </div>
        </div>
    );
}