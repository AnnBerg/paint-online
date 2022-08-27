import Tool from "./Tool";

export default class Brush extends Tool{
    constructor(canvas){
        super(canvas)
        this.draw = false 
    }

    eventListener(){
        //слушатели канваса 
        this.canvas.onmousedown = this.mauseDown.bind(this)  // привязка контекста onmousedown метода
        this.canvas.onmousemove = this.mauseMove.bind(this)  
        this.canvas.onmouseup = this.mauseUp.bind(this)  
    }

    mauseDown(e){
        this.draw = true
        const mouseX = e.pageX - this.canvas.offsetLeft;
        const mouseY = e.pageY - this.canvas.offsetTop;
        this.ctx.beginPath();
        this.ctx.moveTo(mouseX, mouseY);
    }

    mauseMove(e){
        if (!this.draw){ return }
        const mouseX = e.pageX - this.canvas.offsetLeft;
        const mouseY = e.pageY - this.canvas.offsetTop;
        this.ctx.lineTo(mouseX, mouseY);
        this.ctx.stroke();
        
    }

    mauseUp(e){
        this.draw = false 
        this.ctx.closePath();
    }


}