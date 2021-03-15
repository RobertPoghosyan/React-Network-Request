import React from 'react';
import { Modal,Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import './PostModal.scss';

const PostModal = ({
    isOpen,
    titleValue,
    bodyValue,
    changeValue,
    action,
    onClose,
    buttonTitle
}) => {

    return (
        <Modal 
            open={isOpen}
            onClose={onClose} 
            className = "app-postModal__modal"
        >
            <div className = "app-postModal__edit">
                <input 
                    name = "titleValue"
                    value = {titleValue} 
                    onChange = {changeValue} 
                    className = "app-postModal__edit__input"
                />
                <input 
                    name = "bodyValue"
                    value = {bodyValue} 
                    onChange = {changeValue} 
                    className = "app-postModal__edit__input"
                />
                <Button variant="contained" color="primary" onClick = {action} title = {buttonTitle}> {buttonTitle} </Button>
            </div>
        </Modal>
    )
}

PostModal.propTypes = {
    isOpen:PropTypes.bool.isRequired,
    titleValue:PropTypes.string.isRequired,
    bodyValue:PropTypes.string.isRequired,
    changeValue:PropTypes.func.isRequired,
    action:PropTypes.func.isRequired,
    onClose:PropTypes.func.isRequired,
    buttonTitle:PropTypes.string.isRequired
}

export default PostModal;
