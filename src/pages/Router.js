import * as Home from './Home/Exports';
import * as VRRoom  from './VR_Room/Exports'
export const Router=[
    {
        path:'/',
        element:<Home.Page/>,
        childrenElement:Home.Router
    },
    {
        path:'/room/:id',
        element:<VRRoom.Page/>,
        childrenElement:VRRoom.Router
    }
]