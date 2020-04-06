import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qtdItens:this.props.children.length || 0,
            qtdVisibility:this.props.qtdVisibility || 1,
            qtdJumps:this.props.qtdJumps || 1,
            IndexInit:this.props.IndexInit || 0,

            isMoveInit:false,

            ymin:0,
            ymax:0,
            xmin:0,
            xmax:0,
            xinit:0,
            xcur:0,


            elementStartWidth:0,
            elementStartHeight:0,
            elementEndWidth:0,
            elementEndHeight:0,
            elementWidth:0,
            elementHeight:0,

            itemStartLast :{ maxWidth: 0},
            itemStart     :{},
            itemEnd       :{},
            itemEndLast   :{ maxWidth: 0},
            
            itemStartLastInit :0,
            itemStartInit     :0,
            itemEndInit       :0,
            itemEndLastInit   :0,

            positionEnter: 0,

            container:0
        } 
       this.refContainer       = React.createRef()
       this.refItemStartLast   = React.createRef()
       this.refItemStart       = React.createRef()
       this.refItemEnd         = React.createRef()
       this.refItemEndLast     = React.createRef()
    }


    async componentDidMount() {
        await this.captureDimensions()
        await console.log(this.state)
        await console.log(this.refItemStart)

    }

    captureDimensions=()=>{
        this.setState({
            //elementStartWidth:this.refItemStart.current.offsetWidth,
            ///elementStartHeight:this.refItemStart.current.offsetHeight,
            //elementEndWidth:this.refItemEnd.current.offsetWidth,
            //elementEndHeight:this.refItemEnd.current.offsetHeight,
            elementWidth: Math.min(this.refItemStart.current.offsetWidth, this.refItemEnd.current.offsetWidth),
            elementHeight: Math.min(this.refItemStart.current.offsetHeight, this.refItemEnd.current.offsetHeight) ,

        })
    }

    cleanStyles=()=>{

        if(this.refItemStartLast.current){
            this.refItemStartLast.current.style.width = ""
            this.refItemStartLast.current.style.height= ""
            this.refItemStartLast.current.style.maxWidth = ""
            this.refItemStartLast.current.style.maxHeight= ""
            this.refItemStartLast.current.style.transform= ""

        }
        if(this.refItemStart.current){
            this.refItemStart.current.style.width = ""
            this.refItemStart.current.style.height= ""
            this.refItemStart.current.style.maxWidth = ""
            this.refItemStart.current.style.maxHeight= ""
            this.refItemStart.current.style.transform= ""

        }
        if(this.refItemEnd.current){
            this.refItemEnd.current.style.width = ""
            this.refItemEnd.current.style.height = ""
            this.refItemEnd.current.style.maxWidth = ""
            this.refItemEnd.current.style.maxHeight = ""
            this.refItemEnd.current.style.transform= ""

        }
        if(this.refItemEndLast.current){
            this.refItemEndLast.current.style.width = ""
            this.refItemEndLast.current.style.height = ""
            this.refItemEndLast.current.style.maxWidth = ""
            this.refItemEndLast.current.style.maxHeight = ""
            this.refItemEndLast.current.style.transform = ""

        }

    }




    sleep=(ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    setIndexInit=async(index)=>{
        
        if(index >= 0){
            if(index+this.state.qtdVisibility > this.state.qtdItens){
                index = this.state.qtdItens - this.state.qtdVisibility
            }
        }else{
            index=0
        }

        await this.setState({
            IndexInit: index
        })
    }

    isMoveInit= async (posX, posY)=>{
        await this.setState({
            xinit:parseInt(posX),
            yinit:parseInt(posY),
            isMoveInit:true,
        })
    }

    isMove = async (posX, posY) =>{
        if(this.state.isMoveInit){
            let distance =  posX - this.state.xinit
            console.log(distance)
            console.log(distance/this.state.elementWidth)

            if(distance > 0){
                if(this.refItemStartLast.current){
                    this.refItemEnd.current.style.maxWidth =  this.state.elementWidth - Math.abs(distance)
                    //this.refItemEnd.current.style.height  =    this.state.elementHeight * await Math.min(1, (1-(Math.abs(distance)/this.state.elementWidth)))
                    this.refItemEnd.current.style.transform  =   "scale("+ await Math.min(1, (1-(Math.abs(distance)/this.state.elementWidth)))+")"


                    this.refItemStartLast.current.style.width = await Math.abs(distance)
                    //this.refItemStartLast.current.style.height = this.state.elementHeight * await Math.min(1, (Math.abs(distance)/this.state.elementWidth))
                    this.refItemStartLast.current.style.transform = "scale("+ await Math.min(1, (Math.abs(distance)/this.state.elementWidth))+")"

                }


                this.refItemStart.current.style.maxWidth = ""
                if(this.refItemEndLast.current){
                    this.refItemEndLast.current.style.width = ""
                    this.refItemEndLast.current.style.transform = ""
                }
            }else{
                this.refItemEnd.current.style.maxWidth = ""
                if(this.refItemStartLast.current){
                    this.refItemStartLast.current.style.width = ""
                    this.refItemStartLast.current.style.transform = ""
                }


                if(this.refItemEndLast.current){
                    this.refItemStart.current.style.maxWidth =   this.state.elementWidth - Math.abs(distance)
                    //this.refItemStart.current.style.height  =    this.state.elementHeight * await Math.min(1, (1-(Math.abs(distance)/this.state.elementWidth)))
                    this.refItemStart.current.style.transform  =   "scale("+ await Math.min(1, (1-(Math.abs(distance)/this.state.elementWidth)))+")"

                    
                    this.refItemEndLast.current.style.width = await Math.abs(distance)
                    //this.refItemEndLast.current.style.height = this.state.elementHeight * await Math.min(1, (Math.abs(distance)/this.state.elementWidth))
                    this.refItemEndLast.current.style.transform = "scale("+await Math.min(1, (Math.abs(distance)/this.state.elementWidth))+")"
                }
            }




            if(await Math.abs(distance) >  this.state.elementWidth){
                await this.setState({
                    xinit: await parseInt(posX),
                })
                await this.cleanStyles()

                if(distance > 0){
                    await this.movePrev(1);
                }else{
                    await this.moveNext(1);
                }
            }

        }
    }

    isMoveFinish=async()=>{
        await this.setState({
            isMoveInit:false,
            xinit:0,
            xcur:0,
        })
        this.cleanStyles()

    }





    movePrev=async(qtd=undefined)=>{
        const moveQtd = qtd ? qtd : this.state.qtdJumps
        for(let i=0; i < moveQtd; i++){
            //await this.sleep(150)
            await this.setIndexInit(this.state.IndexInit-1)
        }
    }

    moveNext=async(qtd=undefined)=>{
        let moveQtd = qtd || this.state.qtdJumps
        for(let i=0; i < moveQtd; i++){
            //await this.sleep(150)
            await this.setIndexInit(this.state.IndexInit+1);
        }
    }









    //funções de eventos

    mouseMove = async (e)=>{
        const posX = e.pageX
        const posY = e.pageY
        await this.isMove(posX, posY)
    }

    mouseDown = async (e) =>{
        const posX = e.pageX
        const posY = e.pageY
        await this.isMoveInit(posX, posY)
    }

    mouseUp = async (e) =>{
        await this.isMoveFinish()
    }
    
    mouseLeave = async (e) =>{
        await this.isMoveFinish()
    }

    touchMove = async (e) =>{
        const posX = e.changedTouches[0].pageX
        const posY = e.changedTouches[0].pageY
        await this.isMove(posX, posY)
    }
    
    touchStart = async (e) =>{
        const posX = e.changedTouches[0].pageX
        const posY = e.changedTouches[0].pageY
        await this.isMoveInit(posX, posY)
    }
    
    touchEnd = async (e) =>{
        await this.isMoveFinish()
    }

    movePrevClick=async(e)=>{
        this.movePrev()
    }

    moveNextClick=async(e)=>{
        this.moveNext()
    }

    scroll=(e)=>{
        let init = 0
        if(init > 0)
            this.movePrev()
        else
            this.moveNext()
    }

    render() {

        return (
            <div className="carousel flex flex-align-items--stretch flex-justify-content--between">
                <div
                    onScroll={this.scroll}
                    ref={this.refContainer}
                    onMouseDown={this.mouseDown} 
                    onMouseMove={this.mouseMove} 
                    onMouseLeave={this.mouseLeave}
                    onMouseUp={this.mouseUp}
                    onTouchMove={this.touchMove}
                    onTouchEnd={this.touchEnd}
                    onTouchStart={this.touchStart}
                    className="carousel__container flex flex-align-items--stretch flex--wrap flex-justify-content--between flex__item--shrink--grow"
                >
                    <div onClick={this.movePrevClick} className="carousel__button margin--small block shadow--small border-radius--small"></div>

                    {
                        this.props.children.map((item, index)=>{
                            let hide=''
                            let ref=undefined

                            if(this.state.IndexInit-1 === index){
                                ref=this.refItemStartLast
                            }else if(this.state.IndexInit === index){
                                ref=this.refItemStart
                            }else if(this.state.IndexInit+this.state.qtdVisibility-1 === index){
                                ref=this.refItemEnd
                            }else if(this.state.IndexInit+this.state.qtdVisibility === index){
                                ref=this.refItemEndLast 
                            }

                            if((this.state.qtdVisibility + this.state.IndexInit) <= index || this.state.IndexInit > index){
                                hide='width--0 heigth--0 overflow--hidden'
                            }else{
                                hide='flex__item--shrink--grow'
                            }
                            return (
                                <div key={index} ref={ref} className={`${hide} carousel__item overflow--hidden flex flex__item `}>{item}</div>
                            )
                        })
                    }

                    <div onClick={this.moveNextClick} className="carousel__button block margin--small shadow--small border-radius--small"></div>

                </div>
            </div>
        );
    }
}
 
export default Carousel


//style={{overflow:'auto'}}
