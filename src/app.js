
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import RestrauntCard from "./components/RestuarantCard";
import {RouterProvider,createBrowserRouter,Outlet} from "react-router-dom";
import About from "./components/About";
import ErrorCom from "./components/Error";
import ContactCom from "./components/Contact";
import ResCardSeperately from "./components/ResCardSeperately";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import EmptyCartPage from "./components/EmptyCartPage";
import CartPage from "./components/CartPage";
import Payment from "./components/Payment";

const Queries=lazy(()=> import("./components/Queries"));











const AppLayOut=()=>
{
    console.log("hello");
   return (
    <>
    <Provider store={appStore}>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </Provider>
</>
   )
};



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayOut />,
        errorElement:<ErrorCom />,
        children:[
            {
                path:"/about",
                element:<About />,
                children:[
                    {
                        path:"profile",
                        element:<Profile />
                    }

                ]
            },
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/contact",
                element:<ContactCom />
            },
            {
                path:"/restraunt/:id",
                element:<ResCardSeperately />
            },
            {
                path:"/cart",
                element:<CartPage />
            },
            {
                path:"/queries",
                element:<Suspense fallback={<h1>loading...</h1>}>
                    <Queries />
                </Suspense>
            },
            {
                path:"/payment",
                element:<Payment />
            },
        ]
        
    },
    
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);