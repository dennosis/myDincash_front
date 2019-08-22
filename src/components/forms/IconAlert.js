import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

class IconAlert extends Component {
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
        
        let classState=""

        let classContainer=""
        let classIcon=""
        let icon=""
        
        if(this.props.classIcon){
            classIcon=this.props.classIcon
        }else{
            classIcon=`icon ${this.props.classIconAdd || ''}`
        }

        if(this.props.classContainer){
            classContainer=this.props.classContainer
        }else{
            classContainer=`flex flex-align-items--center ${this.props.classContainerAdd || ''}`
        }


        if(this.props.type == 'error'){
            classState="is-error"
            icon = faTimesCircle
            
        }else if(this.props.type == 'verified'){
            classState="is-verified"
            icon = faCheckCircle

        }else if(this.props.type == 'alert'){
            classState="is-alert"
            icon = faExclamationCircle

        }else{
            classState="is-info"
            icon = faInfoCircle
        }



        return (
            <div className={`${classContainer}`}>
                <FontAwesomeIcon className={`${classIcon} ${classState}`} icon={icon}/>
            </div>
        );
    }
}
 
export default IconAlert