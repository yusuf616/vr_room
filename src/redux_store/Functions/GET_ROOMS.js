export const GET_ROOMS=({
    state={},
    payload=null
})=>{
    const tempRooms=JSON.parse(localStorage.getItem('rooms'))
    const rooms =tempRooms?.length ?tempRooms:[];
    return {
        ...state,
        rooms: rooms
    }
}