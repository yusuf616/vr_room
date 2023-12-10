import { Form } from "components/Form/Form";
import { MyModal } from "components/MyModal/MyModal";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa"
import { ClickBox } from "utils/ClickBox"
import { useDispatch, useSelector } from "react-redux";
import { ADD_ROOM } from "redux_store/Actions/Actions";
import { RoomsBoxes } from "./RoomsBoxes";
import { toast } from 'react-toastify';
import { RoomContent } from "./RoomContent";
export const Content = ({
    style = {},
    className = " "
}) => {
    const componentClassName = '  w-full h-full  ' + className;
    const componentStyle = { ...style };
    const dispatch = useDispatch();
    const { rooms } = useSelector(state => state);
    const roomsLengthRef = useRef(null);
    const [openModal, setOpenModal] = useState('');
    const [selectRoom, setSelectRoom] = useState(null);
    const toggaleModal = (type) => {
        setOpenModal(type !== undefined ? type : '');
        type === undefined ? setSelectRoom(null) : <></>;
    }


    const handleSubmit = (e) => {
        dispatch({ type: ADD_ROOM, payload: e });
    }

    const handleClickRoom = (e) => {
        setSelectRoom(e);
        toggaleModal('show');
    }

    useEffect(() => {
        if(roomsLengthRef.current===null && rooms?.length )
            roomsLengthRef.current = rooms?.length
    }, [rooms]);


    useEffect(() => {
        if (roomsLengthRef.current < rooms?.length) {

            toggaleModal();
            toast.success(`The ${rooms[rooms?.length - 1]?.room_name} room added successfully`)
        }
        if (roomsLengthRef.current > rooms?.length) {

            toggaleModal();
            toast.success(`The room deleted successfully`)
        }
        roomsLengthRef.current = rooms?.length;
    }, [rooms]);

    return (<div style={componentStyle} className={componentClassName} >
        <MyModal
            isOpen={openModal?.length !== 0}
            toggle={toggaleModal}
            title={openModal + ' room'}
            size={openModal === 'show' ? 'lg' : 'xs'}
        >
            {openModal === 'add' ? <Form onSubmit={handleSubmit} submitTitle={"Add"} >
                <input type="text" name='room_name' placeholder="room name" />
            </Form> : <></>}
            {openModal === 'show' ? <RoomContent room={selectRoom} /> : <></>}
        </MyModal>

        <div className=" row p-12 ">
            <RoomsBoxes className=" col-12 col-md-6 col-lg-4 col-xl-3 h-32 my-2 " onClick={handleClickRoom} />
        </div>
        
        <ClickBox onClick={() => toggaleModal('add')} style={{ width: '200px' }} ><FaPlus size={30} color='#00f' /></ClickBox>
    
    </div >);
}