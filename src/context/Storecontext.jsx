import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {
      
    const [cartitems,setCartitems] = useState({})

    const addtocart = (itemId) => {
         if(!cartitems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
         }
         else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
         }
    }

    const removefromcart = (itemId) => {
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
 
    const gettotalcartamount = () => {
        let totalamount = 0
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = food_list.find((product)=>product._id === item)
                totalamount += iteminfo.price*cartitems[item]
            }
        }
        return totalamount
    }


    const contextValue = {
         food_list,
         cartitems,
         setCartitems,
         addtocart,
         removefromcart,
         gettotalcartamount
    }

    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider