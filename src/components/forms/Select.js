import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

class Select extends Component {
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

        
        
        let classSelect=""
        let classLabel=""
        let classOption=""
        let classContainer=""

        if(this.props.classInput){
            classSelect=this.props.classSelect
        }else{
            classSelect=`select shadow--inset--small ${this.props.classSelectAdd || ''}`
        }
    
        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`label label--medium flex ${this.props.classLabelAdd || ''}`
        }
    
        if(this.props.classOption){
            classOption=this.props.classOption
        }else{
            classOption=`select__option ${this.props.classOptionAdd || ''}`
        }

        if(this.props.classContainer){
            classContainer=this.props.classContainer
        }else{
            classContainer=`flex flex-align-items--center ${this.props.classContainerAdd || ''}`
        }

        return (
            <label className={`${classContainer}`}>
                <span className={`${classLabel} ${verified} ${error}`} >{this.props.label}</span>
                <div className="select-container flex">
                    <select className={`${classSelect} ${verified} ${error}`} onChange={this.handleChange} value={this.state.value}>
                        {
                            this.props.emptyFirst &&
                            <option className={`${classOption}`} value=""></option>
                        }
                        
                        {
                            this.props.options &&
                                this.props.options.map((item,index)=>{
                                    return <option key={index} className={`${classOption}`} value={item.value}>{item.label}</option>
                                })
                        }
                    </select>
                    <div className={`select-ico ${verified} ${error} flex flex-align-items--center flex-justify-content--center`}>
                        <FontAwesomeIcon icon={faAngleDown} size="1x"/>
                    </div>
                </div>

            </label>
        );
    }
}
 


export default Select