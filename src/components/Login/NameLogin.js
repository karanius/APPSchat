import React from 'react';

const NameLogin = ({onLoginAttempt,onUserNameInputChange}) => {




 return (
    <form id='form' className="tc " onSubmit={(e)=>e.preventDefault()} >
        <fieldset className="ma3 shadow-5" >
            <legend className="f4 fw6 ph0 mh0">Enter Your Name </legend>
            <div className="ma5 ">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input onChange={onUserNameInputChange}  id='nameInput' className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" />
                <input onClick={onLoginAttempt} className="f3 tc link dim ph3 pv2 mb5 mt2 dib white bg-mid-gray" type='submit' value='Enter'  />
            </div>
        </fieldset>
        <div id="logo" className="tc f2 green ma3 ba" >
            APPSchat
        </div>
    </form> 
 )
}

export default NameLogin 