import React, { Component } from 'react';
import Input from '../forms/Input';
import Select from '../forms/Select';
import Toggle from '../forms/Toggle';
import Radio from '../forms/Radio';
import Carousel from '../utils/Carousel';
class Content extends Component {

    constructor(props){
        super(props)
        this.state={
            value:false
        }
    }


    teste=()=>{
        this.setState({
            value:!this.state.value
        })
    }


  render() {
    return (
        <section className="l-content flex flex--column overflow--auto" >

            <section className="flex flex--column overflow--auto padding--large">
                    <span className="title title--large padding-bottom--small margin-top--medium margin-bottom--medium"> Titulo Aplicação</span>
                    <div className="flex flex--column flex--wrap"> 
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                    </div>

                    <Carousel qtdVisibility={5} qtdJumps={5}>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">1</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">2</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">3</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">4</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">5</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">6</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">7</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">8</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">9</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">10</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">11</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">12</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">13</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">14</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">15</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">16</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">17</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">18</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">19</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">20</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">21</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">22</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">23</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">24</div>
                        <div className="margin--small block shadow--small flex__item flex__item--grow frequency__item">25</div>

                    </Carousel>

                    

                    <form className="margin--small flex flex--column padding--medium flex--wrap flex--stretch--between block shadow--small">
                    <div className="flex flex-justify-content--around">
                        <Radio label={'Radio teste'}
                            classLabelAdd="flex--column" 
                            classOptionsContainerAdd="flex--column" 
                            classOptionContainerAdd=" flex"
                            classRadioAdd="margin--xsmall"
                            options={[
                                {value: 1, label: "um"},
                                {value: 2, label: "dois"},
                                {value: 3, label: "tres"},
                                {value: 4, label: "quatro"},
                                {value: 5, label: "cinco"},

                        ]}/>
                            <Radio label={'Radio teste'} 
                                classLabelAdd="flex--column" 
                                classOptionsContainer="flex--column" 
                                classOptionContainerAdd=" flex"
                                classRadioAdd="margin--xsmall"
                                isVerified 
                                options={[
                                    {value: 1, label: "um"},
                                    {value: 2, label: "dois"},
                                    {value: 3, label: "tres"},
                                    {value: 4, label: "quatro"},
                                    {value: 5, label: "cinco"},

                            ]}/>

                            <Radio 
                                classLabelAdd="flex--column" 
                                classOptionsContainer="flex--column" 
                                classOptionContainerAdd=" flex"
                                classRadioAdd="margin--xsmall"
                                label={'Radio teste'} 
                                isError 
                                options={[
                                    {value: 1, label: "um"},
                                    {value: 2, label: "dois"},
                                    {value: 3, label: "tres"},
                                    {value: 4, label: "quatro"},
                                    {value: 5, label: "cinco"},
                            ]}/>

                    </div>

                        <Toggle label="teste" isActive onChange={this.teste}/>

                        <Toggle label="teste" isActive isError/>

                        <Toggle label="teste" isActive isVerified/>

                        <Input label="teste" state={'success'} hasIcon={true} message={"test message"}/>

                        <Input label="teste" state={'success'} message={"test message"} />

                        <Input hasContainer={this.state.value} label="teste222" hasIcon={true} state={'danger'} dafaultValue={"valor teste"} message={"test message"}/>


                        <Select label={'select teste'} emptyFirst options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                        ]}/>

                        <Select label={'select teste'} isError emptyFirst options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                        ]}/>

                        <Select label={'select teste'} isVerified emptyFirst options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                        ]}/>

                        <div className="padding-top--small padding-bottom--small flex">
                                <span className="button flex__item--grow margin--small shadow--small">button</span>
                                <span className="button flex__item--grow margin--small shadow--small is-error">button</span>
                                <span className="button flex__item--grow margin--small shadow--small is-verified">button</span>
                        </div>
                    </form>
                </section>



        </section>
    );
  }
}

export default Content