

export const ADD_ROOM=({
    state={},
    payload=null
})=>{

    const room = payload;
    room['id'] = state?.rooms?.length ? (state?.rooms[state?.rooms?.length - 1]?.id + 1) : 1;
    console.log(state)
    const rooms=[...state?.rooms, room]
    localStorage.setItem('rooms',JSON.stringify(rooms));
    return {
        ...state,
        rooms: rooms
    }

}