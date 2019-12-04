import React from 'react';
import './StatusBar.css'

class StatusBar extends React.Component {

    
    render(){
        const {name,onClickToToggle} = this.props

        return (
            <div id='StatusBar'>
                <div id="StatusBarName" >Logged in as: <span style={{fontWeight:"800"}} >{name}</span> </div>
                <div onClick={onClickToToggle} className="shadow-4" id='onlineUsersButtonDiv' ><span id="onlineUsersIcon" role='img' > 👥</span ></div>
            </div>
        )
    }
}

export default StatusBar