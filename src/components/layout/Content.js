import React, { Component } from 'react';
import Input from '../forms/Input';
import Select from '../forms/Select';
import Toggle from '../forms/Toggle';
import Radio from '../forms/Radio';

class Content extends Component {

  render() {
    return (
        <section className="l-content flex flex--column overflow--auto" >

            <section className="flex flex--column overflow--auto padding--large">
                    <span className="title title--large padding-bottom--small margin-top--medium margin-bottom--medium"> Titulo Aplicação</span>
                    <div className="flex flex--column flex--wrap"> 
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                        <div className="register margin--small block shadow--small flex flex__item--shrink"></div>
                    </div>

                    <div className="carousel flex flex-align-items--stretch flex-justify-content--between">
                        <div className="carousel__button margin--small block shadow--small border-radius--small"></div>
                        <div className="carousel__body flex flex-align-items--stretch overflow--hidden flex-justify-content--between">
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                            <div className="carousel__item margin--small block shadow--small flex__item"></div>
                        </div>
                        <div className="carousel__button block margin--small shadow--small border-radius--small"></div>
                    </div>
                
                    <form className="margin--small flex flex--column padding--medium flex--wrap flex--stretch--between block shadow--small">
                      
                    <Radio label={'Radio teste'} options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                    ]}/>
                        <Radio label={'Radio teste'} isVerified options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                        ]}/>

                        <Radio label={'Radio teste'} isError options={[
                            {value: 1, label: "um"},
                            {value: 2, label: "dois"},
                            {value: 3, label: "tres"},
                            {value: 4, label: "quatro"},
                            {value: 5, label: "cinco"},

                        ]}/>


                        <Toggle label="teste" isActive />

                        <Toggle label="teste" isActive isError/>

                        <Toggle label="teste" isActive isVerified/>

                        <Input label="teste" isVerified />

                        <Input label="teste" isVerified />

                        <Input label="teste222" isError initValue={"valor teste"} />


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