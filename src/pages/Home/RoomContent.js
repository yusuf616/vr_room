import { ClickBox } from "utils/ClickBox"
import { useDispatch } from "react-redux"
import { ADD_ROOM, DELETE_ROOM } from "redux_store/Actions/Actions";


export const RoomContent = ({
    room = null
}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => { dispatch({ type: DELETE_ROOM, payload: { id: e } }); };


    return (<div className='px-12 py-4'>
        <div className='flex' style={{ fontSize: '20px' }}>
            <div className='w-8'>{room?.id}</div>
            <div className='w-auto'>{room?.room_name}</div>
        </div>
        <div className='rounded border' style={{ width: '400px', height: '400px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {room?.room_name}
        </div>


        <div className='p-4 flex justify-end'>
            <ClickBox onClick={handleDelete} value={room?.id} >Delete</ClickBox>
        </div>
    </div>)
}