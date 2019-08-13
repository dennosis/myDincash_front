import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props){
        super(props)
        this.state={
            value:false || props.isActive
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
            value: !this.state.value
        });
        if(this.props.onChange)
            this.props.onChange(this.state.value)
    }

    render() {
        let error=""
        let verified=""
        let active=""
        let btnLabel="off"

        if(this.props.isVerified)
            verified="is-verified"

        if(this.props.isError)
            error="is-error"

        if(this.state.value){
            active="is-active"
            btnLabel="on"
        }

        return (
            <label className={`padding--small flex flex--column label label--medium ${verified} ${error}`} >
                {this.props.label}
                <div className={`toggle shadow--inset--small ${verified} ${error} ${active}`} onClick={this.handleChange}>
                    <span className={`toggle__button  ${verified} ${error}`}>{btnLabel}</span>
                </div>
            </label>
        );
    }
}
 


export default Toggle


