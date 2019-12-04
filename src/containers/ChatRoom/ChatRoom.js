import React from 'react';
import io from 'socket.io-client';
import Display from '../../components/Display/Display.js';
import Intercome from  '../../components/Intercome/Intercome.js' ;
import StatusBar from '../../components/StatusBar/StatusBar.js'
import './ChatRoom.css'


class ChatRoom extends React.Component{
    constructor(){
        super();
        this.state={
            onlineUsersToggle:false,
            userLeft:null,
            userOnline:null,
            inputElem:null,
            id:"",
            inputMsg:"",
            msgRecieved:[],
            socket: null,
            activeUsers:{}
        }
    }

    componentDidMount(){
        const PORT = 8080; // this is the port to the backend. currnetly, it is set up as local server. You may alos choose your own port.
        const socketUrl = `http://localhost:${PORT}`; // this is the url of where the server is going to be
        const socket = io(socketUrl);
        this.setState({socket: socket});
                        
        socket.on('userId', (data)=>{
            this.setState({id:data});
            socket.emit('myConnectionInfo', {name:this.props.name,id:data} )
        });

        socket.on('msgRecievedFromServer', this.updateMsgsRecieved );
        
        socket.on('disconnecting', (x)=>{
            socket.emit('myDisonnectionInfo', {name:this.props.name,id:this.state.id} )
        })

        socket.on('activeUsers' , (data)=>{
            this.activeUsers(data.data)
        })

        socket.on('userOnline', (data)=>{
            this.setState({ userOnline:data })
        })
        socket.on('userLeft',(data)=>{
            this.setState({userLeft:data.user})
        })
    }

    setToNull = (x) => {
        if (x === 'userOnline') {
            this.setState({userOnline:null})
        }

        if (x === 'userLeft'){
            this.setState({userLeft:null})
        }
    }

    onClickToToggle = () => {
        (this.state.onlineUsersToggle) ? this.setState({onlineUsersToggle:false}) : this.setState({onlineUsersToggle:true})
    }

    activeUsers = (data)=>{
        this.setState({activeUsers:data})
    }

    updateMsgsRecieved = (data) => {
        let before = this.state.msgRecieved;
        before.push([data.data]);
        this.setState({msgRecieved: before});
    }

    onInputMsgChange = (e)=>{
        this.setState({inputMsg:e.target.value})
        this.setState({inputElem:e.target});
    }
    onSendMsgSubmit = () => {
        if (this.state.inputElem !== null && this.state.inputElem.value.trim() !== '') {
            const elem = this.state.inputElem;
            elem.value = '';
            const data = {
                name: this.props.name.trim(),
                says: this.state.inputMsg.trim(),
                id:this.state.id
            };
            const socket = this.state.socket;
            socket.emit('sendingMsgToServer' , data );
            this.setState({inputMsg:''})
        }
    }

    render(){
        const {name} = this.props;
        const {msgRecieved,id,onlineUsersToggle,activeUsers,userLeft,userOnline} = this.state;
        return(
            <div className="tc" id='screen' >
                <StatusBar name={name} onClickToToggle={this.onClickToToggle} />
                <Display setToNull={this.setToNull} activeUsers={activeUsers} incoming={msgRecieved} idd={id} onlineUsersToggle={onlineUsersToggle} userLeft={userLeft} userOnline={userOnline} />
                <Intercome onInputMsgChange={this.onInputMsgChange} onSendMsgSubmit={this.onSendMsgSubmit} />
            </div>
        )
    }
}

export default ChatRoom;