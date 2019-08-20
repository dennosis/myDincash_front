import React, { Component } from 'react';

class Radio extends Component {
    constructor(props){
        super(props)
        this.state={
            value:false || props.initValue,
            options: this.props.options || []
        }
    }

    handleChange = (value) =>{
        this.setState({
            value: value
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


        let classLabel=""
        let classRadio=""
    

        let classOptionContainer=""
        let classOptionsContainer=""
        let classOptionLabel=""
        if(this.props.classLabel){
            classLabel=this.props.classLabel
        }else{
            classLabel=`flex label label--medium ${this.props.classLabelAdd || ''}`
        }

        if(this.props.classRadio){
            classRadio=this.props.classRadio
        }else{
            classRadio=`radio shadow--inset--small ${this.props.classRadioAdd || ''}`
        }

        if(this.props.classOptionsContainer){
            classOptionsContainer=this.props.classOptionsContainer
        }else{
            classOptionsContainer=`flex ${this.props.classOptionsContainerAdd || ''}`
        }

        if(this.props.classOptionContainer){
            classOptionContainer=this.props.classOptionContainer
        }else{
            classOptionContainer=`flex flex-align-items--center ${this.props.classOptionContainerAdd || ''}`
        }
        
        if(this.props.classOptionLabel){
            classOptionLabel=this.props.classOptionLabel
        }else{
            classOptionLabel=`radio__label ${this.props.classOptionLabelAdd || ''}`
        }



        return (
            <label className={`${classLabel} ${verified} ${error}`} >
                <span>{this.props.label}</span>
                <div className={`${classOptionsContainer}`}>
                    
                    {
                        this.props.options &&
                            this.props.options.map((item,index)=>{
                                let active=""
                                let addClass=""
                                if(this.state.value === item.value){
                                    active="is-active"

                                    addClass=`${verified} ${error} ${active}`
                                }

                                return(
                                    <div key={index} className={`${classOptionContainer}`}>
                                        <div  className={`${classRadio} ${addClass}`} onClick={()=>this.handleChange(item.value)}></div>
                                        <span className={`${classOptionLabel} ${addClass}`} >{item.label}</span>
                                    </div>
                                )
                            })
                    }
                </div>
            </label>
        );
    }
}

export default Radio