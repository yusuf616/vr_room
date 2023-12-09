import { Router } from "pages/Router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const router = createBrowserRouter(Router);


export const App = () => {
    return (<div className="app">
        <RouterProvider router={router} />
        <ToastContainer
            position='top-right'
        />
    </div>);
}