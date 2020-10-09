import React, {Component} from 'react';
class Input extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.sequence(e.target.value) ;
    }
    render() {
        return (
           <label className = "labelLogin"  onChange =  {this.handleChange}>
               {this.props.typeInput}
           </label>
        );
    }
}
export default Input;
