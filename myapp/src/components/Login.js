import React, {Component} from 'react';
import Button from './Button';
import Input from './Input';
class Login extends Component {
    constructor(){
        this.state = {Username : '',Password : ''};
    }
    hanDlesequence(sequence){
        this.setState({Username:sequence});
    }

    render() {
        return (
           <div>
           <p>hello</p>
           <Input typeInput = "Username"  onChange = {this.hanDlesequence}></Input>
           <Input typeInput = "Password"  onChange = {this.hanDlesequence}></Input>
           <Button> Login </Button>
           </div>
        );  
    }
}
export default Login ;

