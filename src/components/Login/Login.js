import React from 'react';
import './Login.css'
import NameLogin from './NameLogin.js'
import NameDisplay from './NameDisplay.js'

class Login extends React.Component{
    
    checkStoredName () {
        const name = (localStorage.AppsChat === undefined) ? (false) : (localStorage.AppsChat) ;
        return name;
    }

    render(){
        const { onLoginAttempt , onUserNameInputChange } = this.props;
        const name = this.checkStoredName()


        if (!name) {
            return(
                <NameLogin onLoginAttempt={onLoginAttempt} onUserNameInputChange={onUserNameInputChange} />      
            )
        } else {
            return (
                <div>
                    <NameDisplay onLoginAttempt={onLoginAttempt} name={name} />
                    <NameLogin onLoginAttempt={onLoginAttempt} onUserNameInputChange={onUserNameInputChange} />
                </div>
            )
        }
    }

}

export default Login

    