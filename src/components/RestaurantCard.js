import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resdata}=props;
    console.log(resdata)
    const {cloudinaryImageId,name,cuisines,avgRating}=resdata?.info
    const {deliveryTime}=resdata?.info?.sla
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg" 
            src={CDN_URL+ cloudinaryImageId}
            alt="res img"/>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(',')} </h4>
            <h4>{avgRating}stars</h4>
            <h4>{deliveryTime}minutes</h4>
        
        </div>
    )
};

//higher order components  takes component enhance it and returns it
export const WithPromotedLabel=(RestaurantCard)=>{
    return (props)=> {
        return (
            <div>
                <label className=" absolute ml-8 p-1  bg-green-300">Opened</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }

}

export default RestaurantCard;
