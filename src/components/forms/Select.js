import React, { Component } from 'react';

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

        if(this.props.classInput){
            classSelect=this.props.classSelect
        }else{
            classSelect=`select shadow--inset--small ${this.props.classSelectAdd || ''}`
        }
    
        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`label label--medium ${this.props.classLabelAdd || ''}`
        }
    
        if(this.props.classOption){
            classOption=this.props.classOption
        }else{
            classOption=`select__option ${this.props.classOptionAdd || ''}`
        }
    

        return (
            <label className={`${classLabel} ${verified} ${error}`} >
                {this.props.label}
                <div className="select-container">
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
                    <div class="select-ico">></div>
                </div>

            </label>
        );
    }
}
 


export default Select