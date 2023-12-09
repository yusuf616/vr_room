import { useEffect, useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

export const MyModal = ({
    isOpen = false,
    toggle = () => { },
    size = '',
    title = 'My Modal',
    children
}) => {

    const toggleModal = () => {
        toggle();
    }
    useEffect(() => {

    }, [isOpen]);
    return (<Modal
        isOpen={isOpen}
        toggle={toggleModal}
        size={size}
    >
        <ModalHeader toggle={toggleModal}>
            {title}
        </ModalHeader>
        {children}

    </Modal>)
}