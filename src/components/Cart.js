import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    // const store=useSelector((store)=>store)
    // const cartItems=store.cart.items;
    //above one also works fine but is not EFFICIENT
    //because u subscribed to the whole store whenever there is changes occur in other slices it affects this 
    //component which we don't want 
    //so always subscribe to the specific part

    const dispatch=useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }


    return(
        <div className="ml-40  w-9/12 p-4 m-2 ">
            <h1 className="font-bold text-2xl text-center p-2">Cart</h1>
             <div className="text-center">
            <button className="bg-black text-white font-bold rounded p-2 m-2"
            onClick={handleClearCart}>Clear</button>
            { cartItems.length==0 && <h3>cart is empty Add items to the cart</h3>}
            </div>
            <ItemList items={cartItems}/>

        </div>

    );
}
export default Cart;