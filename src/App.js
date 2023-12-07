import { Router } from "pages/Router";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router =createBrowserRouter(Router);


export const App=()=>{
    return(<div className="app">
        <RouterProvider router={router}/>
    </div>);
}