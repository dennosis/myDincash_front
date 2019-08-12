import React, { Component } from 'react';
import Input from '../forms/Input';

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
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <div className="radio shadow--inset--small"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <div className="radio shadow--inset--small is-active"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <div className="radio shadow--inset--small is-error"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <div className="radio shadow--inset--small is-verified"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <div className="radio shadow--inset--small is-active is-error"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <div className="radio shadow--inset--small is-active is-verified"></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <div className="toggle shadow--inset--small"><span className="toggle__button">off</span></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <div className="toggle shadow--inset--small is-active"><span className="toggle__button is-active">on</span></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <div className="toggle shadow--inset--small is-error"><span className="toggle__button is-error">off</span></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <div className="toggle shadow--inset--small is-verified"><span className="toggle__button is-verified">off</span></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <div className="toggle shadow--inset--small is-active is-error"><span className="toggle__button is-error">off</span></div>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <div className="toggle shadow--inset--small is-active is-verified"><span className="toggle__button is-verified">off</span></div>
                        </div>

                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <input className="input shadow--inset--small" type="text"/>
                        </div>


                        <Input label="teste" />

                        <Input label="teste222" isError initValue={"valor teste"} />

                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <input className="input shadow--inset--small is-error" type="text"/>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <input className="input shadow--inset--small is-verified" type="text"/>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium">Label</label>
                            <select className="select shadow--inset--small" name="" id="">
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                            </select>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-error">Label</label>
                            <select className="select is-error shadow--inset--small" name="" id="">
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                            </select>
                        </div>
                        <div className="padding--small flex flex--column">
                            <label className="label label--medium is-verified">Label</label>
                            <select className="select is-verified shadow--inset--small" name="" id="">
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                                <option className="select__option" value="">teste</option>
                            </select>
                        </div>

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