import RestaurantCard,{WithPromotedLabel} from "./RestaurantCard"
import reslist from "../utils/mockData"
import { useState,useEffect} from "react"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=() => {
    
    const [listOfRestaurants,setListOfRestaurants]= useState([])//for mock data from your source code pass data as an argument => useState(reslist)
    const [filteredRestaurants,setFilteredRestaurants]= useState([])
    const[searchText,setSearchText]=useState("")
    const RestaurantCardPromoted=WithPromotedLabel(RestaurantCard);

    async function fetchData() {
        const data = await fetch("http://localhost:5000/api/restaurants");
        const json = await data.json();

        const cards = json?.data?.cards || [];
        const restaurantCard = cards.find(
        (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log(restaurants)
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
        }
    useEffect(() => {
        fetchData();
    }, []); // ✅ empty dependency array so it runs once



    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return <h1>Looks like your offline! Check internet connection</h1>


    //Conditional Rendering
    if(listOfRestaurants.length===0){
        return <Shimmer />
    }

    
    return (
      
        <div className="body">
            <div className="flex">
                <div className="">
                    <input data-testid="searchInput" type="text" value={searchText} className="border-2" onChange={(e)=>{
                        
                        setSearchText(e.target.value)
                    }}/>
                    <button className="m-2 p-2 bg-green-200 rounded-lg"
                    onClick={()=>{
                        let filter_res=listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        console.log(searchText)

                        setFilteredRestaurants(filter_res);
                    }}>Search</button>

                </div>
                <button className="m-2 p-2 bg-blue-300 rounded-lg" onClick={()=>{
                    let filtered_restaurant=listOfRestaurants.filter((res)=>
                    res.info.avgRating > 4.5
                    );
                    setFilteredRestaurants(filtered_restaurant);//the filtered res will passed and updated in ui
                    // console.log('filtered')
                }}
                >
                    Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
                {/* <RestaurantCard resdata={reslist[0]}/>
                <RestaurantCard resdata={reslist[1]}/>
                <RestaurantCard resdata={reslist[2]}/> */}
             
                { 
                   filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                        {/* <RestaurantCard resdata={restaurant} /> */}
                    { restaurant.info.isOpen?(
                        <RestaurantCardPromoted resdata={restaurant}/>
                        ):(
                         <RestaurantCard resdata={restaurant} />
                        )
                    }
                    
                    </Link>
                    ))

                }
               
               
            </div>

        </div>
     )
}
export default Body