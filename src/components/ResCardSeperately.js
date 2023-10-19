import {useParams} from "react-router-dom";
import {URL_USED} from "../constants";
import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/store/cartSlice";
import Notification from "./Notification";

const ResCardSeperately=()=>
   
{
    const [notification,setNotification] = useState("");
    const dispatch= useDispatch();
    useEffect(() => {
        
        if (notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 2000); 
            return () => clearTimeout(timer);
        }
    }, [notification]);
    const {id} =useParams();
   // const [restraunt,setRestraunt] = useState(null);
   // const [items,setItems]=useState([]);
   const [restraunt,items]=useRestraunt(id);
    const menu=[];
    const addCart=  (element)=>{
        dispatch(addItem(element));
        setNotification("Item added to cart");
    }
    const removeCart= (element)=>{
        dispatch(removeItem(element));
        setNotification("Item removed cart");
    }
    // useEffect(()=>
    // {
    //     getRestrauntData();
    // },[]);

    // async function getRestrauntData()
    // {
    //     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.823718594372178&lng=83.34554269909859&restaurantId="+id+"&submitAction=ENTER");
    //     const json_data=await data.json();
    
    //     setRestraunt(json_data.data.cards[0].card.card.info);
    //     setItems(json_data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    // }
    items.forEach((item)=>{
        item?.card?.card?.itemCards?.forEach((it)=>
        {
            menu.push(it.card.info);
        })
    })
    return (!restraunt)? <Shimmer/> : (
    <div className="res_card_sep">
    <div className="restrauntSeperately">
    <h1>{restraunt.name}</h1>
    
    <img className="RestrauntSeperatelyImage" src={URL_USED+restraunt.cloudinaryImageId}></img>
    <h3>Restraunt {id}</h3>
    <h3>{restraunt.city}</h3>
    <h4>{restraunt.areaName}</h4>
    <h3>{restraunt.id}</h3>
    </div>
    <div className="menu">
        <h2>Menu here !!</h2>
       <div className="menu_in">
       <ul className="ul_res">
            {menu.map((element,index) => (
                 <li className="itemslist">
                    <img src={URL_USED + element.imageId}></img>
                   <div><p>🥗Item :{element.name}</p> 
                <p>Price :{element.price/100} rs</p>
                <button className="add_btn" onClick={()=>addCart(element)}>Add</button>
                <button className="rmv_btn" onClick={()=>removeCart(element)}>Remove</button>
                </div></li>))}
        </ul>
       </div>
    </div>
    <div className="notification-container">
    {notification && <Notification message={notification} />}
    </div>
    </div>
    );
};

export default ResCardSeperately;