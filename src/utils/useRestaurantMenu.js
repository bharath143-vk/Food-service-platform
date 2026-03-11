import { useEffect, useState } from "react"
import { RES_URL } from "./constants"
const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState()
    console.log('body renderd')
    useEffect(()=>{
        fetchData()
       
    },[])

    const fetchData= async ()=>{
        const data=await fetch(`${RES_URL}${resId}`)
        const json=await data.json()
        console.log(json)
        setResInfo(json)
    }
    return resInfo;

}
export default useRestaurantMenu;