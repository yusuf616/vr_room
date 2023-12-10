import { ClickBox } from "utils/ClickBox"
import { useDispatch } from "react-redux"
import { ADD_ROOM, DELETE_ROOM } from "redux_store/Actions/Actions";
import * as VR  from "pages/VR_Room/Page";
import { useNavigate } from "react-router-dom";


export const RoomContent = ({
    room = null
}) => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const handleDelete = (e) => { dispatch({ type: DELETE_ROOM, payload: { id: e } }); };


    return (<div className='px-12 py-4'>
        <div className='flex' style={{ fontSize: '20px' }}>
            <div className='w-8'>{room?.id}</div>
            <div className='w-auto'>{room?.room_name}</div>
        </div>
        <div className='rounded border' style={{ width: '400px', height: '400px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <VR.Page id={room?.id} vrButton={false} />
        </div>


        <div className='p-4 flex justify-between'>
            <ClickBox onClick={()=>{navigate('/room/'+room?.id)}} value={room?.id} >Go Room</ClickBox><ClickBox onClick={handleDelete} value={room?.id} >Delete</ClickBox>
        </div>
    </div>)
}