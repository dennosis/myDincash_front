import React, { Component } from 'react';

 
export default class Toggle extends Component {
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

        let classLabel=""
    
        let classToggle=""

        let classButton=""

        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`flex flex-align-items--center label label--medium ${this.props.classLabelAdd}`
        }

        if(this.props.classToggle){
            classToggle=this.props.classToggle
        }else{
            classToggle=`toggle shadow--inset--small ${this.props.classToggleAdd || ""}`
        }

        if(this.props.classButton){
            classButton=this.props.classButton
        }else{
            classButton=`toggle__button ${this.props.classButtonAdd}`
        }

        return (
            <label className={`${classLabel} ${verified} ${error}`} >
                {this.props.label}
                <div className={`${classToggle} ${verified} ${error} ${active}`} onClick={this.handleChange}>
                    <span className={`${classButton} ${verified} ${error}`}>{btnLabel}</span>
                </div>
            </label>
        );
    }
}









export class ToggleTeste extends Component {
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

        let classLabel=""
    
        let classToggle=""

        let classButton=""

        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`flex flex-align-items--center label label--medium ${this.props.classLabelAdd}`
        }

        if(this.props.classToggle){
            classToggle=this.props.classToggle
        }else{
            classToggle=`toggle shadow--inset--small ${this.props.classToggleAdd || ""}`
        }

        if(this.props.classButton){
            classButton=this.props.classButton
        }else{
            classButton=`toggle__button ${this.props.classButtonAdd}`
        }

        return (
            <label className={`${classLabel} ${verified} ${error}`} >
                {this.props.label}
                <div className={`${classToggle} ${verified} ${error} ${active}`} onClick={this.handleChange}>
                    <span className={`${classButton} ${verified} ${error}`}>{btnLabel}</span>
                </div>
            </label>
        );
    }
}
 




