import React from 'react';
import './Intercome.css'

const Intercome = ({onInputMsgChange,onSendMsgSubmit}) => {

        return (
                <form onSubmit={(e)=>e.preventDefault()} id='x' className="pa2 ">
                        <input onChange={onInputMsgChange} id="name" className="shadow-4 b pa2 input-reset ba  w-100" type="text"  placeholder="Enter Msg.." />
                        <input onClick={onSendMsgSubmit} id='submit' className="shadow-4 f5 link dim ba bw1 ph3 pv2 div " type='submit' value='Send!' />
                </form>
        )

}

export default Intercome