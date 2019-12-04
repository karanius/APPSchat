import React from 'react';
import './Display.css'
import ScrollJumpDown from '../ScrollJumpDown/ScrollJumpDown.js';
import ActiveUsersList from '../ActiveUsersList/ActiveUsersList.js';

class Display extends React.Component {
    constructor(){
        super();
        this.state={
            scrollDifference: 0,
            ScrolJump:false,
        }
    }

    componentDidMount(){
        const elem =  document.getElementById('comment');
        this.setState({scrollDifference: elem.scrollHeight - elem.scrollTop })
    }

    jumpDown = () => {
        const comment = document.getElementById('comment');
        comment.scrollTop = comment.scrollHeight;
        this.setState({ScrolJump:false});
    }

    render(){
        const {ScrolJump} = this.state;
        const {incoming,idd,onlineUsersToggle,activeUsers,userLeft,userOnline,setToNull} = this.props;

        if (userOnline !== null) {
            const x = new Date()
            const p =document.createElement('p');
            p.innerHTML = `${userOnline.user} is online <span id='timeStamp'> ${x.getDay()}/${x.getMonth()}/${x.getFullYear()} @${x.getHours()}:${x.getMinutes()}</span>`;
            p.id = 'welcome'
            document.getElementById('comment').appendChild(p);
            setToNull('userOnline')
        }

        if (userLeft !== null) {
            const x = new Date()
            const p =document.createElement('p');
            p.innerHTML = `${userLeft} has left <span id='timeStamp'> ${x.getDay()}/${x.getMonth()}/${x.getFullYear()} @${x.getHours()}:${x.getMinutes()}</span>`;
            p.id='bye'
            document.getElementById('comment').appendChild(p);
            setToNull('userLeft')
        }

        (()=>{ // this function renders the screens with msgs
            if (incoming.length > 0){
                let x = incoming.pop()
                const {name , says , id} = x[0];
                const comment = document.getElementById('comment');
                const span = document.createElement('span');
                span.id = 'span1'
                const span2 = document.createElement('span');
                span.innerText = `${name}:`;
                span2.innerText = ` ${says}`;
                const li = document.createElement('li');
                li.appendChild(span)
                li.appendChild(span2)
                if (id !== idd){
                    li.id = 'others'
                }
                comment.appendChild(li);
                if ((comment.scrollHeight - comment.scrollTop - this.state.scrollDifference > 150)){
                    this.setState({ScrolJump:true});
                }else{
                    comment.scrollTop = comment.scrollHeight;
                }
            }
        })()

        return(
            <div id="displayContainer"  >
                <ScrollJumpDown ScrolJump={ScrolJump} jumpDown={this.jumpDown} />
                <ul id="comment"  name="comment" aria-describedby="comment-desc">
                    <div id="ActiveUsersList">
                        <ActiveUsersList activeUsers={activeUsers}  onlineUsersToggle={onlineUsersToggle} />
                    </div>
                </ul>
            </div>
        )
    }

}

export default Display

