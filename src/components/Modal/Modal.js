import { useEffect, useState } from 'react';
import 'styles/modal.css'

export const Modal=({
    isOpen=false,
    toggle=()=>{},
    size='',
    title='My Modal',
    children
})=>{
    const [content,setContent]=useState(<></>);
    const toggleModal=()=>{
        toggle();        
    }
    useEffect(()=>{
        setContent(isOpen?<>
            <div className='background' onClick={toggleModal}>

            </div>
            <dev 
                isOpen={isOpen}
                toggle={toggleModal}
                size={size}
            >
                {/* <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter></ModalFooter> */}
            </dev>
        </>:<></>)
    },[isOpen]);
    console.log(children);
    return(content)
}