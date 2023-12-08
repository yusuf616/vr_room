
import * as Actions from '../Actions/Actions'


const initialState={
    rooms:[]
};


export const Reducer=(state=initialState,action)=>{
    
    switch(action.type){
        case Actions.ADD_ROOM:
            return{
                ...state,
                rooms:[...state.rooms,action.payload]
            }
        default:
            return state;
    }
}