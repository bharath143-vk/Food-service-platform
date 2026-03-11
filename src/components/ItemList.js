import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch()

    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item))//whatever you have passed here will pass inside action.payload
    }


    return (
        <div>
            {items.map((item)=>(
            <div key={item.card.info.id} className="p-3 m-2 bg-gray-100 border-b-1 flex justify-between">
                <div data-testid="foodItem" className="w-9/12">
                    <div>
                        <h2 className="font-bold">{item.card.info.name}</h2>
                        <h3 className="font-bold">₹{item.card.info.price/100}</h3>
                        <h3 className="font-bold">{item.card.info.ratings.aggregatedRating.rating}</h3>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <img src={CDN_URL+item.card.info.imageId}></img>
                    <div className="absolute ">
                        <button className="bg-green-300 rounded-lg p-2 pb-1"
                         onClick={()=>handleAddItem(item)}>
                            Add+
                        </button>
                    </div>
                </div>
            </div>
            ))}
         </div>
    );
};
export default ItemList;