

export const DELETE_ROOM=({
    state={},
    payload=null
})=>{
    const tempRooms = state.rooms.filter(r => r?.id !==payload?.id);
    localStorage.setItem('rooms',JSON.stringify(tempRooms));
    return {
        ...state,
        rooms: tempRooms
    }
}