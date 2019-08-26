import React, { Component } from 'react';
import IconAlert from './IconAlert'
class Input extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    static getDerivedStateFromProps(nextProps) {    
        let stateField
        let classStateField=[]
        switch(nextProps.state){
            case'success':
                stateField='success'
                classStateField.push('is-success')
                break
            case'danger':
                stateField='danger'
                classStateField.push('is-danger')
                break
            case'warning':
                stateField='warning'
                classStateField.push('is-warning')
                break
            default:
                stateField=''
        }

        return{
            dafaultValue: nextProps.dafaultValue,
            label:nextProps.label,
            stateField:stateField,
            classContainer: [...nextProps.classContainer,...nextProps.classContainerAdd],
            classLabel:[...nextProps.classLabel,...nextProps.classLabelAdd,...classStateField],
            classInput:[...nextProps.classInput,...nextProps.classInputAdd,...classStateField],
            classIcon:[...nextProps.classIcon,...nextProps.classIconAdd,...classStateField],
            
            classMessage:[...nextProps.classMessage,...nextProps.classMessageAdd,...classStateField],
            message:nextProps.message,

            hasMessage: nextProps.message>""?true:false,
            hasContainer: nextProps.hasContainer,
            hasLabel:nextProps.label>""?true:false,    
            hasIcon:nextProps.hasIcon && stateField > ""
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
        const Container=this.state.hasContainer ? 'label' :React.Fragment;
        let className=this.state.hasContainer?{className:this.state.classContainer.join(" ")}:{}
        return (
                <Container {...className}>
                    {
                        this.state.hasLabel &&
                        <span className={this.state.classLabel.join(" ")}>{this.state.label}</span>
                    }
                    
                    <input className={this.state.classInput.join(" ")} type="text" onChange={this.handleChange} defaultValue={this.state.defaultValue}/>
                    
                    { 
                        this.state.hasIcon && 
                        <IconAlert type={this.state.stateField}/>
                    }
                    { 
                        this.state.hasMessage && 
                        <span className={this.state.classMessage.join(" ")}>{this.state.message}</span>
                    }
                </Container>
        );
    }
}
 
Input.defaultProps = {
    dafaultValue:"",
    label:"",

    classContainer: ['flex','flex-align-items--center'],
    classContainerAdd: [],
    classLabel: ['label'],
    classLabelAdd: [],
    classInput: ['input','shadow--inset--small'],
    classInputAdd: [],
    classIcon: ['flex','flex-align-items--center'],
    classIconAdd: [],
    classMessage: ['message'],
    classMessageAdd: [],

    isVerified: false,
    isError: false,
    hasIcon:false,
    hasContainer: true,

};

export default Input