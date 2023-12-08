import { Form } from "components/Form/Form";
import { MyModal } from "components/MyModal/MyModal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa"
import { ClickBox } from "utils/ClickBox"
import { useDispatch } from "react-redux";

export const Content = ({
    style = {},
    className = " "
}) =>{ 
    const dispatch=useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const toggaleModal = () => {
        setOpenModal(!openModal);
    }
    const componentClassName = '  w-full h-full flex items-center justify-center ' + className;
    const componentStyle = { ...style };

    const handleSubmit=(e)=>{
    
        console.log(e);
    }



    return (<div style={componentStyle} className={componentClassName} >
        <MyModal
            isOpen={openModal}
            toggle={toggaleModal}
        >
            <Form onSubmit={handleSubmit} submitTitle={"Add"} > 
                <input type="text" name='room_name' placeholder="room name"/>
            </Form>
        </MyModal>
        <ClickBox onClick={toggaleModal} ><FaPlus size={30} color='#00f' /></ClickBox>
    </div>)
}