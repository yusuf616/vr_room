

import { useSelector } from "react-redux";
import { ClickBox } from "utils/ClickBox";


export const RoomsBoxes = ({
    className = "",
    onClick = () => { }
}) => {
    const { rooms } = useSelector(state => state);


    const handleClick = (e) => {
        onClick(e);
    }

    return (<>
        {rooms?.map((room, index) => <div className={className} key={index} ><ClickBox className='h-full' value={room} onClick={handleClick}>
            {room?.room_name}
        </ClickBox></div>)}
    </>)
}