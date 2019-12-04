import React from 'react';

const NameDisplay = ({name , onLoginAttempt}) => {
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
            <span style={{border:"1px solid black",padding:"10px", marginBottom:"10px"}} >Current Name:
                <span style={{fontWeight:"800"}}> {name}</span>
            </span>
            <div onClick={()=>onLoginAttempt(name)} className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" >Login?</div>
        </div>
    )
}

export default NameDisplay