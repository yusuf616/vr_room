import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa"
import { ClickBox } from "utils/ClickBox"


export const Content=({
    style={},
    className=" "
})=>{
    const [openModal,setOpenModal]=useState(false);
    const toggaleModal=()=>{
        setOpenModal(!openModal);
    }
    const componentClassName='  w-full h-full flex items-center justify-center '+className;
    const componentStyle={...style};

    return(<div style={componentStyle} className={componentClassName} >
        <Modal
            isOpen={openModal}
            toggle={toggaleModal}
        >
            <div key={'body'}>

            </div>
            <div key={'footer'}>

            </div>
        </Modal>
        <ClickBox onClick={toggaleModal} ><FaPlus size={30} color='#00f'/></ClickBox>
    </div>)
}