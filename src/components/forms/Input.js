import React, { Component } from 'react';
import IconAlert from './IconAlert'
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

        let classInput=""
        let classLabel=""
        let classContainer=""

        if(this.props.classInput){
            classInput=this.props.classInput
        }else{
            classInput=`input shadow--inset--small ${this.props.classInputAdd || ''}`
        }

        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`label label--medium ${this.props.classLabelAdd || ''}`
        }

        if(this.props.classContainer){
            classContainer=this.props.classContainer
        }else{
            classContainer=`flex flex-align-items--center${this.props.classContainerAdd || ''}`
        }

        return (
            <label className={`${classContainer}`}>
                <span className={`${classLabel} ${verified} ${error}`}>{this.props.label}</span>
                <input className={`${classInput}  ${verified} ${error}`} type="text" onChange={this.handleChange} defaultValue={this.state.value}/>
                <IconAlert type="error"/>
            </label>
        );
    }
}
 
export default Input