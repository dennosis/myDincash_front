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



        let classSelect=""
        let classLabel=""
        let classOption=""

        if(this.props.classInput){
            classSelect=this.props.classSelect
        }else{
            classSelect=`select shadow--inset--small ${this.props.classSelectAdd}`
        }
    
        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`label label--medium ${this.props.classLabelAdd}`
        }
    
        if(this.props.classOption){
            classOption=this.props.classOption
        }else{
            classOption=`select__option ${this.props.classOptionAdd}`
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


