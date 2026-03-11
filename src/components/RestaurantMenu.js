import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { CDN_URL, RES_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=() =>{
    const {resId}=useParams()
    const [showIndex,setShowIndex]=useState(null);

    // const[resInfo,setResInfo]=useState(null);
    // const[menuItems,setMenuItems]=useState(null);
    // useEffect(()=>{
    //    fetchMenu()
    // },[])

    // const fetchMenu=async ()=>{
    //     const data=await fetch(`${RES_URL}${resId}`);
    //     const json=await data.json();

    //     console.log(json);
    //     setResInfo(json)
    // }

    const resInfo=useRestaurantMenu(resId);
    // console.log(resInfo)

    const restaurantData=resInfo?.data?.cards?.find(
        (card)=> card?.card?.card?.info
    )?.card?.card?.info;

    if(!restaurantData) return < Shimmer/>

    const Categories = resInfo?.data?.cards?.find(
      (c) => c.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    
    // console.log(Categories)
   
     return(
        <div className="ml-90 w-[600px] bg-gray-100" >
            <h1 className="font-bold text-3xl px-30 m-5 text-center">{restaurantData.name} </h1>
            <img className="px-5 ml-20 w-[350px]"
             src={CDN_URL+restaurantData.cloudinaryImageId}/>
            <h3 className="ml-20 py-1 font-bold text-md">{restaurantData.costForTwoMessage}</h3>
            <h3 className="ml-20 p-1 font-bold text-md">{restaurantData.cuisines.join(',')}</h3>
            <h3 className="ml-20 p-1 font-bold text-md">Ratings:{restaurantData.avgRating}</h3>
            <h3 className="font-bold text-2xl py-2">Menu</h3>
            {/* controlled component */}
            { Categories.map((c,index)=>(
                 <RestaurantCategory 
                key={c.card.card.categoryId}
                data={c.card.card} 
                showItems={index===showIndex?true:false}
                setShowIndex={()=>{setShowIndex(index)}}
                
                
                    />
            ))
                }
            
        </div>
    );
}
export default RestaurantMenu;