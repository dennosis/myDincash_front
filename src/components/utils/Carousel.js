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
       this.container       = React.createRef()
       this.refItemStart       = React.createRef()
       this.refItemStartLast   = React.createRef()
       this.refItemEnd         = React.createRef()
       this.refItemEndLast     = React.createRef()
    }

    sleep=(ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    isMove = async (posX, posY) =>{
        if(this.state.isMoveInit){
            let xcur =  posX - this.state.xinit
            if(Math.abs(xcur) > 30){
               // await this.sleep(150)

                if(xcur > 0){
                    await this.setIndexInit(this.state.IndexInit-1);
                }else{
                    await this.setIndexInit(this.state.IndexInit+1);
                }
                await this.setState({
                    xinit:parseInt(posX),
                })

            }
        }
    }

    isMoveInit= async (posX, posY)=>{
        await this.setState({
            xinit:parseInt(posX),
            isMoveInit:true,
        })
    }
    
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

    mouseUp = async () =>{
        await this.setState({
          isMoveInit:false,
          xinit:0,
          xcur:0,
        })
    }
    
    mouseLeave = async () =>{
        await this.setState({
          isMoveInit:false,
          xinit:0,
          xcur:0,
        })
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
    
    touchEnd = async () =>{
        await this.setState({
            isMoveInit:false,
            xinit:0,
            xcur:0,
        })
    }







    moveStart=async()=>{
        for(let i=0; i < this.state.qtdJumps; i++){
            await this.setIndexInit(this.state.IndexInit-1)
            await this.sleep(150)
        }
    }

    moveEnd=async()=>{
        for(let i=0; i < this.state.qtdJumps; i++){
            await this.setIndexInit(this.state.IndexInit+1);
            await this.sleep(150)
        }
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

    scroll=()=>{
        let init = 0
        if(init > 0)
            this.moveStart()
        else
            this.moveEnd()
    }

    render() {

        return (
            <div className="carousel flex flex-align-items--stretch flex-justify-content--between">
                <div onClick={this.moveStart} className="carousel__button margin--small block shadow--small border-radius--small"></div>
                <div
                onScroll={this.scroll}
                ref={this.container}
                onMouseDown={this.mouseDown} 
                onMouseMove={this.mouseMove} 
                onMouseLeave={this.mouseLeave}
                onMouseUp={this.mouseUp}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
                onTouchStart={this.touchStart}
                className="carousel__container flex flex-align-items--stretch flex--wrap flex-justify-content--between flex__item--shrink--grow">

                 {
                    this.props.children.map((item, index)=>{
                        let hide=''
                        if((this.state.qtdVisibility + this.state.IndexInit) <= index || this.state.IndexInit > index){
                            hide='width--0 overflow--hidden'
                        }else{
                            hide='flex__item--shrink--grow'
                        }
                        return <div key={index} className={`${hide} carousel__item flex flex__item `}>{item}</div>
                    })
                 }

                </div>
                <div onClick={this.moveEnd} className="carousel__button block margin--small shadow--small border-radius--small"></div>
            </div>
        );
    }
}
 
export default Carousel


//style={{overflow:'auto'}}
