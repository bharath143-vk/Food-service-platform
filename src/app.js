 import React, { lazy,Suspense, useEffect, useState } from "react";
 import ReactDOM from "react-dom/client"
 import { jsx } from "react/jsx-runtime";
 import Header  from "./components/Header";
 import Body from "./components/Body";
 import About from "./components/About";
 import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
 import Contact from "./components/Contact";
 import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"; 
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";//providing store from appstore
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery=lazy(()=> import("./components/Grocery"))
 //basic outline

/* Header
* - logo
* - nav items
* Body
*  -search 
* - Restaurant container
*     - food image
*     - ratings and items
* Footer
*   -links
*   - address
*   - contact
*/

const AppLayout = () => {
    const[userName,setUserName]=useState()

    useEffect(()=>{
        //make an api call and get user data
        const data={
            'name':'Bharath'
        }
        setUserName(data.name)
    })
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loginInfo:userName}}>
        <div className="app">
            <Header />
            <Outlet/>  {/* this outlet will be replaced by specific component according to the path*/}

        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
        {   
            path:"/about",
            element:<About />
        },
        {
            path:"/",
            element:<Body />
        },
        {   
            path:"/contact",
            element:<Contact />
        },
        {
             path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu />
        },
        {
            path:"/cart",
            element:<Cart />
        }
        ]
    }
    
])


const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={Approuter}/>)