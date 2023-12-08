import { Form } from "components/Form/Form";
import { MyModal } from "components/MyModal/MyModal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa"
import { ClickBox } from "utils/ClickBox"


export const Content = ({
    style = {},
    className = " "
}) => {
    const [openModal, setOpenModal] = useState(false);
    const toggaleModal = () => {
        setOpenModal(!openModal);
    }
    const componentClassName = '  w-full h-full flex items-center justify-center ' + className;
    const componentStyle = { ...style };

    return (<div style={componentStyle} className={componentClassName} >
        <MyModal
            isOpen={openModal}
            toggle={toggaleModal}
        >
            <Form 
                inputs={[
                    {
                        type: 'text',
                        name:'room_name',
                        placeholder: 'room name'
                    },
                    {
                        type: 'text',
                        name:'room_name1',
                        placeholder: 'room name1'
                    },
                
                ]}
                onSubmit={(e)=>console.log(e)}
                submitTitle={"Add"}
            
            />


        </MyModal>
        <ClickBox onClick={toggaleModal} ><FaPlus size={30} color='#00f' /></ClickBox>
    </div>)
}