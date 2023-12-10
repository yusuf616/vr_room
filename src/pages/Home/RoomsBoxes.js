

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClickBox } from "utils/ClickBox";
import * as Actions from 'redux_store/Actions/Actions';

export const RoomsBoxes = ({
    className = "",
    onClick = () => { }
}) => {
    const { rooms } = useSelector(state => state);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch({type:Actions.GET_ROOMS})
    },[]);

    const handleClick = (e) => {
        onClick(e);
    }

    return (<>
        {rooms?.map((room, index) => <div className={className} key={index} ><ClickBox className='h-full' value={room} onClick={handleClick}>
            {room?.room_name}
        </ClickBox></div>)}
    </>)
}