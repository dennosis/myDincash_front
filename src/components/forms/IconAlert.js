import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

class IconAlert extends Component {
    constructor(props){
        super(props)
        this.state={}
    }


    static getDerivedStateFromProps(nextProps) {    
        let icon
        let classState=[]

        switch(nextProps.type){
            case'success':
                icon=faCheckCircle 
                classState.push('is-success')
                break
            case'danger':
                icon=faTimesCircle
                classState.push('is-danger')
                break
            case'warning':
                icon=faExclamationCircle
                classState.push('is-warning')
                break
            default:
                icon=faInfoCircle
                classState.push('is-info')
        }

        return {
            icon:icon,
            classContainer: [...nextProps.classContainer,...nextProps.classContainerAdd],
            classIcon:[...nextProps.classIcon,...nextProps.classIconAdd,...classState],
            hasContainer: nextProps.hasContainer,
        }
    }

    render() {
        const Container=this.state.hasContainer ? 'span' :React.Fragment;
        let className=this.state.hasContainer?{className:this.state.classContainer.join(" ")}:{}
        return (
            <Container {...className}>
                <FontAwesomeIcon className={this.state.classIcon.join(" ")} icon={this.state.icon}/>
            </Container>
        );
    }
}

IconAlert.defaultProps = {

    classContainer: ['flex','flex-align-items--center'],
    classContainerAdd: [],
    classIcon: ['icon'],
    classIconAdd: [],
    
    hasContainer: false,
};
export default IconAlert