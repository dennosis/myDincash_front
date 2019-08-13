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

        return (
            <label className={`padding--small flex flex--column label label--medium ${verified} ${error}`} >
                {this.props.label}
                <select className={`select shadow--inset--small ${verified} ${error}`} onChange={this.handleChange} value={this.state.value}>
                    {
                        this.props.emptyFirst &&
                        <option className="select__option" value=""></option>

                    }
                    
                    {
                        this.props.options &&
                        
                            this.props.options.map((item,index)=>{
                                
                                return <option key={index} className="select__option" value={item.value}>{item.label}</option>
                            })
                        
                    }
                </select>


            </label>
        );
    }
}
 


export default Select