import Body from "./Body";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    
    //uncontrollable 
    // const[showItems,setShowItems]=useState(false)
    // const handleClick=()=>{
    //     setShowItems(!showItems);
    // }

    const handleClick=()=>{
        setShowIndex();
    }
    
    return(
        
        <div>
            {/* // header */}
            <div className=" w-full mx-auto my-2 p-2 bg-gray-300 ">
                <div className="flex justify-between " onClick={handleClick}>
                    <span className="font-bold ">{data.title}({data.itemCards.length})</span>
                    <span>▼</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/> }
            </div>
            {/* accordian Body */}
        </div>
    
    )
}
export default RestaurantCategory;