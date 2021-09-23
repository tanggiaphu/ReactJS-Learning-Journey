import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import styles from './ErrorModal.module.css'

import Card from './Card';
import Wrapper from '../Helpers/Wrapper';
import Button from './Button';

function Backdrop(props) {
    return <div className={styles.backdrop} onClick={props.onCloseErrorModal}></div>
}

function Modal(props) {
    return (
        <Fragment>
            <Card cssClasses={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>

                <div className={styles.content}>
                    {props.content}
                </div>

                <footer className={styles.actions}>
                    <Button onClick={props.onCloseErrorModal}>Okay</Button>
                </footer>
            </Card>
        </Fragment>
    )
}

function ErrorModal(props) {
    return (
        <Fragment>
            {createPortal(<Backdrop onCloseErrorModal={props.onCloseErrorModal} />, document.body)}
            {createPortal(<Modal title={props.title} content={props.content} onCloseErrorModal={props.onCloseErrorModal} />, document.body)}
        </Fragment>
    )
}

export default ErrorModal;