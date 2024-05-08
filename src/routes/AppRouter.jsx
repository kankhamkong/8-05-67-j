import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginFrom from "../layout/LoginFrom"
import Test from "../layout/Test"
import useAuth from "../hooks/useAuth"


const guestrouter = createBrowserRouter([
    {
        path: '/ ',
        element: <> 
            <Outlet />
    </>,
    children: [
        {index: true, element: <LoginFrom/> }
    ]
    }
])
const userRouter = createBrowserRouter([
    {
        path: '/ ',
        element: <> 
            <Outlet />
    </>,
    children: [
        {index: true, element: <Test/> }
    ]
    }
])


function AppRouter() {
 const {user} = useAuth();
 console.log(user)
 const finalrouter = user?.fullname ? userRouter : guestrouter
 return (
     <RouterProvider routes={finalrouter} />
 )
}

export default AppRouter;