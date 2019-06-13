import React from 'react';


function UserGreeting(props){
return <h1>Bienvenue dans ce merveilleux site</h1>
}

function GuestGreeting(props){
    return<h1>Bienvenue merci de vous inscrire dans ce site génial</h1>
}

function Greeting(props){
const isLoggedIn = props.isLoggedIn;
if(isLoggedIn){
    return <UserGreeting/>;

}
return <GuestGreeting/>;
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
<h1>login</h1>
        </button>
    )
    
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
<h1>logout</h1>
        </button>
    )
    
}


class LoginControl extends React.component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        })
    }
handleLogoutClick(){
    this.setState({
        isLoggedIn:false
    })
}
render (){
const isLoggedIn=this.state.isLoggedIn;
let button;
if(isLoggedIn)
{
    button = <LogoutButton onClick={this.handleLogoutClick}/>
}
else{
    button = <LoginButton onClick={this.handleLoginClick}/>
}
return(
    <div>
        <Greeting isLoggedIn={isLoggedIn}/>
    </div>
);
}


    render(){
        return(

            <div>

            </div>
        );
    }
}

export default LoginControl;