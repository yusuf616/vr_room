import * as Home from './Home/Exports';

export const Router=[
    {
        path:'/',
        element:<Home.Page/>,
        childrenElement:Home.Router
    }
]