
import * as Actions from '../Actions/Actions'
import { Functions } from '../Functions/Exports';

const initialState = {
    rooms: []
};

export const Reducer = (state = initialState, action) => {
    const fun=Functions[Actions[action?.type]];
    const newState=fun&&fun!==undefined ?fun({state:state,payload:action?.payload}):state;
    return newState;
}