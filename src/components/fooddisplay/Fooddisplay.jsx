import React, { useContext } from 'react'
import './fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem'

const Fooddisplay = ({category}) => {

   const {food_list} = useContext(Storecontext)

  return (
    <div className='food-display' id='food-diplay'>
       <h2>Top dishes near you</h2>
       <div className="food-display-list">
        {food_list.map((item,index)=>{
            // {console.log(category,item.category)}
            if (category==='All' || category===item.category){
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
       </div>
    </div>
  )
}

export default Fooddisplay