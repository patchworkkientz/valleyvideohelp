import React from 'react';
import classes from './Modal.module.css';

export default function Modal(props) {

    return (
        <div hidden={props.hideModal}>
            <div className={classes.Modal}>{props.children}</div>
            <div className={classes.Backdrop}></div>
        </div>
    );
}
