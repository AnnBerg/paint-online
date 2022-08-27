import React, { useRef, useEffect, useState } from 'react';
import '../style/canvas.sass'
import { observer } from "mobx-react-lite"
import canvasState from '../store/canvasState';
import Tool from "../store/toolState"

const Canvas = observer(() => {
    const canvasRef = useRef()
    let mouse = { x: 0, y: 0 };
    let draw = false


    useEffect(() => {
        //запись канваса в стейт
        canvasState.setCanvas(canvasRef.current)
        console.log(11, canvasState.canvas)
    }, [])

    // const hamdleonMouseDown = (e) => {
    //     let ctx = canvasRef.getContext("2d")
    //     mouse.x = e.pageX - canvasRef.current.offsetLeft;
    //     mouse.y = e.pageY - canvasRef.current.offsetTop;
    //     draw = true;
    //     ctx.beginPath();
    //     ctx.moveTo(mouse.x, mouse.y);
    // }

    // const handleonMouseMove = (e) => {
    //     if (draw) {
    //         let ctx = canvasRef.current.getContext("2d")
    //         mouse.x = e.pageX - canvasRef.current.offsetLeft;
    //         mouse.y = e.pageY - canvasRef.current.offsetTop;
    //         ctx.lineTo(mouse.x, mouse.y);
    //         ctx.stroke();
    //     }
    // }

    // const handleonMouseUp = (e) => {
    //     draw = false;
    //     let ctx = canvasRef.current.getContext("2d")
    //     ctx.stroke();
    //     ctx.closePath();
    // }

    return (
        <div className='canvas'>
            <canvas ref={canvasRef}
                // onMouseDown={(e) => hamdleonMouseDown(e)}
                // onMouseMove={(e) => handleonMouseMove(e)}
                // onMouseUp={(e) => handleonMouseUp(e)}
                height={600} width={1020}
            ></canvas>
        </div>
    );
})

export default Canvas;