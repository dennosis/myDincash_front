import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
          numItens:0,
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

          positionEnter: 0
        } 
       this.container       = React.createRef()
       this.refItemStart       = React.createRef()
       this.refItemStartLast   = React.createRef()
       this.refItemEnd         = React.createRef()
       this.refItemEndLast     = React.createRef()
    }


    isMove = async (posX, posY) =>{
        if(this.state.isMoveInit){



            let itemStartLast  = { maxWidth: 0}
            let itemStart      = {}
            let itemEnd        = {}
            let itemEndLast    = { maxWidth: 0}
            
            if(this.state.isMoveInit){
                if(this.state.xcur > 0){
                    itemStartLast  = { maxWidth: this.state.itemStartLastInit   + this.state.xcur       }
                    itemEnd        = { maxWidth: (this.state.itemEndInit         + this.state.xcur * -1) > 0 ? (this.state.itemEnd         + this.state.xcur * -1) : 0 }
                }else{
                    itemStart      = { maxWidth: (this.state.itemStartInit       + this.state.xcur) > 0 ? (this.state.itemStart       + this.state.xcur) : 0  }
                    itemEndLast    = { maxWidth: this.state.itemEndLastInit     + this.state.xcur * -1  }
                }
            }


            await this.setState({
                xcur: parseInt(posX) - this.state.xinit,
                itemStartLast :itemStartLast ,
                itemStart     :itemStart     ,
                itemEnd       :itemEnd       ,
                itemEndLast   :itemEndLast   ,
            })
        }
    }




    isMoveInit= async (posX, posY)=>{
        await this.setState({
            xinit:parseInt(posX),
            isMoveInit:true,
            itemStartLastInit: this.refItemStartLast.current.clientWidth  ,
            itemStartInit:     this.refItemEnd.current.clientWidth        ,
            itemEndInit:       this.refItemStart.current.clientWidth      ,
            itemEndLastInit:   this.refItemEndLast.current.clientWidth    ,

        })
        
        /*
        await this.setState({
          ymin:this.rotator.current.offsetTop,
          ymax:this.rotator.current.offsetTop + this.rotator.current.offsetHeight,
          xmin:this.rotator.current.offsetLeft,
          xmax:this.rotator.current.offsetLeft + this.rotator.current.offsetWidth,
          coef: this.state.numImages / this.rotator.current.offsetHeight,
          positionEnter: posX - this.rotator.current.offsetLeft,
          imgEnter: this.state.curImage,
          isMoveInit:true
        })
        */
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
          itemStartLast :{ maxWidth: 0},
          itemStart     :{},
          itemEnd       :{},
          itemEndLast   :{ maxWidth: 0},
        })
    }
    
    mouseLeave = async () =>{
        await this.setState({
          isMoveInit:false,
          xinit:0,
          xcur:0,
          itemStartLast :{ maxWidth: 0},
          itemStart     :{},
          itemEnd       :{},
          itemEndLast   :{ maxWidth: 0},
        })
    }


    render() {

        //console.log(itemStartLast)
        //console.log(itemEnd)
        //console.log(itemStart)
        //console.log(itemEndLast)



        return (
            <div className="carousel flex flex-align-items--stretch flex-justify-content--between">
                <div className="carousel__button margin--small block shadow--small border-radius--small"></div>
                <div
                ref={this.container}
                onMouseDown={this.mouseDown} 
                onMouseMove={this.mouseMove} 
                onMouseLeave={this.mouseLeave}
                onMouseUp={this.mouseUp}
                className="carousel__body flex flex-align-items--stretch overflow--hidden flex-justify-content--between flex__item--shrink--grow">
                    <div ref={this.refItemStartLast}   style={this.state.itemStartLast} className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">1</div></div>
                    <div ref={this.refItemStart}       style={this.state.itemStart} className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">2</div></div>
                    <div className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">3</div></div>
                    <div className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">4</div></div>
                    <div className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">5</div></div>
                    <div className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">6</div></div>
                    <div className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">7</div></div>
                    <div ref={this.refItemEnd}         style={this.state.itemEnd} className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">8</div></div>
                    <div ref={this.refItemEndLast}     style={this.state.itemEndLast} className="carousel__item overflow--hidden flex flex__item flex__item--shrink--grow"><div className="margin--small block shadow--small flex__item flex__item--shrink--grow">9</div></div>
                </div>
                <div className="carousel__button block margin--small shadow--small border-radius--small"></div>
            </div>
        );
    }
}
 
export default Carousel


//style={{overflow:'auto'}}
