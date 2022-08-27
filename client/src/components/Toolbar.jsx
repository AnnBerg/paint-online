import React, { useEffect } from 'react';
import '../style/toolbar.sass'
import canvasState from '../store/canvasState';
import Brush from '../tools/Brush';

const Toolbar = () => {

    const handelBruchClick = (e) => {
        const brush = new Brush(canvasState.canvas)
        brush.eventListener()

    }

    return (
        <div className="toolbar">
            <div className="tools">
                <button className="toolbar__btn brush" onClick={(e) => handelBruchClick(e)} />
                <button className="toolbar__btn rect" />
                <button className="toolbar__btn circle" />
                <button className="toolbar__btn eraser" />
                <button className="toolbar__btn line" />
                <input style={{ marginLeft: 10 }} type="color" />
            </div>
            <div className="henlper">
                <button className="toolbar__btn undo" />
                <button className="toolbar__btn redo" />
                <button className="toolbar__btn save" />
            </div>
        </div>
    );
};

export default Toolbar;