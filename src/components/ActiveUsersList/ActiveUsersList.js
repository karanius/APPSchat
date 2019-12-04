import React from 'react';
import './ActiveUsersList.css'

const ActiveUsersList =({onlineUsersToggle,activeUsers})=>{
    
    const elem = document.getElementById('ActiveUsersList')
    if (elem !== null) {
        const width = elem.clientWidth
        if (onlineUsersToggle) {
            elem.style.right = `0px`
        } else if (!onlineUsersToggle){
            elem.style.right = `-${width+30}px`
        }
    }

    const onlineListRender = async () => {
        let name='';
        for (const each in activeUsers) {
            name += `<li id="activeBabes" >${activeUsers[each]}</li>`;
        }
        document.getElementById('activePeople').innerHTML = name;
    }

    if(document.getElementById('activePeople') !== null){
        onlineListRender()
    }

    return (
        <div id='activeUsersListScreen'>
            <p>Online:</p>
            <ul id='activePeople'>

            </ul>
        </div>
    )
}

export default ActiveUsersList