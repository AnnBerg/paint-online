import React from 'react';
import '../style/toolbar.sass'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="tools">
                <button className="toolbar__btn brush" />
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