import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import User from "./User";
import { useSelector } from "react-redux";

const Header=() => {
    const [btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loginInfo}=useContext(UserContext);

    //subscribing to our store (here we are subscribing to only a part of our store that is items)
    const cartItems=useSelector((store)=> store.cart.items)
    console.log(cartItems)
    return(
    <div className="flex justify-between p-3 m-3 border-2">
        <div className="w-40">
             <img  className="logo" 
             alt="LOGO"
             src={LOGO_URL}
            />
        </div>
        <div className="flex items-center justify-between">
            <ul className="flex ">
                <li className="px-4">
                    Online:{onlineStatus?"✅":"🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link> 
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact us</Link> 
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold ">
                    <Link to="/cart">
                    Cart -({cartItems.length}items)
                    </Link>
                </li>
                <button className="login" onClick={()=>{
                    btnName ==="Login"?setbtnName("Logout"):setbtnName("Login")
                }}>{btnName}</button>
                 <li className="px-4 font-bold">
                    {loginInfo}
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Header;