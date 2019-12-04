import React from 'react';
import './ScrollJump.css'

const ScrollJumpDown = ({ScrolJump,jumpDown}) => {
    const showOrNot = (() =>{
        return ScrolJump ? 1 : 0;
    })()

    return(
        <div onClick={jumpDown} style={{opacity:`${showOrNot}`}} className="shadow-5" id="scroll"></div>
    )
}

export default ScrollJumpDown;