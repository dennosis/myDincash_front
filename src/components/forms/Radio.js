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

        return (
            <label className={`padding--small flex flex--column label label--medium ${verified} ${error}`} >
                {this.props.label}
                <div className={`flex flex--column`}>
                    
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
                                    <div key={index} className={`flex flex-align-items--center`}>
                                        <div  className={`radio margin--xsmall shadow--inset--small ${addClass}`} onClick={()=>this.handleChange(item.value)}></div>
                                        <span>{item.label}</span>
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