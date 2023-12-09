
import * as Actions from '../Actions/Actions'


const initialState = {
    rooms: []
};


export const Reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case Actions.ADD_ROOM:
            const room = action.payload;
            room['id'] = state?.rooms?.length ? (state?.rooms[state?.rooms?.length - 1]?.id + 1) : 1;
            return {
                ...state,
                rooms: [...state.rooms, room]
            }

        case Actions.DELETE_ROOM:
            // console.log(action?.payload)
            const tempRooms = state.rooms.filter(r => r?.id !== action?.payload?.id);
            return {
                ...state,
                rooms: tempRooms
            }

        default:
            return state;
    }
}