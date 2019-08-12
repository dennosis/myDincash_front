import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            value:false || props.initValue
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
        if(this.props.onChange)
            this.props.onChange(this.state.value)
    }

    render() {
        let error=""
        let verified=""

        if(this.props.isVerified)
            verified="is-verified"

        if(this.props.isError)
            error="is-error"

       
        
        
        return (
            <label className={`padding--small flex flex--column label label--medium ${verified} ${error}`} >
                {this.props.label}
                <input className={`input shadow--inset--small ${verified} ${error}`} type="text" onChange={this.handleChange} value={this.state.value}/>
            </label>
        );
    }
}
 


export default Input