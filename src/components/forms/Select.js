import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import IconAlert from './IconAlert'

class Select extends Component {
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
                
            message:nextProps.message,
            options:nextProps.options,

            classContainer: [...nextProps.classContainer,...nextProps.classContainerAdd],
            classLabel:[...nextProps.classLabel,...nextProps.classLabelAdd,...classStateField],
            classSelect:[...nextProps.classSelect,...nextProps.classSelectAdd,...classStateField],
            classOption:[...nextProps.classOption,...nextProps.classOptionAdd,...classStateField],
            classIcon:[...nextProps.classIcon,...nextProps.classIconAdd,...classStateField],
            classMessage:[...nextProps.classMessage,...nextProps.classMessageAdd,...classStateField],
            classContainerStructure:[...nextProps.classContainerStructure,...nextProps.classContainerStructureAdd,...classStateField],
            classIconStructure:[...nextProps.classIconStructure,...nextProps.classIconStructureAdd,...classStateField],

            hasOptions: nextProps.options.length > 0?true:false,
            hasMessage: nextProps.message>""?true:false,
            hasContainer: nextProps.hasContainer,
            hasLabel:nextProps.label>""?true:false,    
            hasIcon:nextProps.hasIcon,

            hasEmptyFirstOption:nextProps.hasEmptyFirstOption,
            hasCustomizedStructure:nextProps.hasCustomizedStructure
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
        console.log(this.props.hasContainer)
        const Container=this.state.hasContainer ? 'label' :React.Fragment;
        let className=this.state.hasContainer?{className:this.state.classContainer.join(" ")}:{}
        
        const ContainerStructure=this.state.hasCustomizedStructure ? 'div' :React.Fragment;
        let classContainerStructure=this.state.hasCustomizedStructure?{className:this.state.classContainerStructure.join(" ")}:{}

        return (
            <Container {...className}>
                    {
                        this.state.hasLabel &&
                        <span className={this.state.classLabel.join(" ")}>{this.state.label}</span>
                    }

                <ContainerStructure {...classContainerStructure}>
                    <select className={this.state.classSelect.join(" ")} onChange={this.handleChange} value={this.state.defaultValue}>
                        {
                            this.state.hasEmptyFirstOption &&
                            <option className={this.state.classOption.join(" ")} value=""></option>
                        }
                        
                        {
                            this.state.hasOptions &&
                                this.state.options.map((item,index)=>{
                                    return <option key={index} className={this.state.classOption.join(" ")} value={item.value}>{item.label}</option>
                                })
                        }
                    </select>
                    {
                        this.state.hasCustomizedStructure &&
                        <div className={this.state.classIconStructure.join(" ")}>
                            <FontAwesomeIcon icon={faAngleDown} size="1x"/>
                        </div>

                    }

                </ContainerStructure>


                    
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
//
Select.defaultProps = {
    dafaultValue:"",
    label:"",

    options:[],

    classSelect: ['select','shadow--inset--small'],
    classSelectAdd: [],
    classOption: ['select__option'],
    classOptionAdd: [],
    classContainerStructure:['select-container', 'flex'],
    classContainerStructureAdd:[],
    classIconStructure:['select-ico','flex','flex-align-items--center','flex-justify-content--center'],
    classIconStructureAdd:[],

    classContainer: ['flex','flex-align-items--center'],
    classContainerAdd: [],
    classLabel: ['label'],
    classLabelAdd: [],
    classIcon: ['flex','flex-align-items--center'],
    classIconAdd: [],
    classMessage: ['message'],
    classMessageAdd: [],

    hasIcon:false,
    hasContainer: true,
    hasEmptyFirstOption:false,
    hasCustomizedStructure:true

}
export default Select