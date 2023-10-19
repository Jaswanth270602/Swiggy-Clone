import {RestrauntList} from "../constants";
import RestrauntCard from "./RestuarantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText,allRestraunts)
{
    return allRestraunts.filter((element)=>
     element.info.name.toLowerCase().includes(searchText.toLowerCase()))

}
const BodyComponent=()=>
{
    const [searchText,setsearchText]=useState("");
    const [restraunts,setRestraunts]=useState([]);
    const [allRestraunts,setAllRestraunts]=useState([]);

    useEffect(()=>
    {
        getRestraunts();
    },[]);

    async function getRestraunts()
    {
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.823718594372178&lng=83.34554269909859&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        let i=0;
        while(!(json?.data.cards[i]?.card?.card?.id === "restaurant_grid_listing"))
        {   
            i++;
        }
        setRestraunts(json?.data.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestraunts(json?.data.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online=useOnline();
    if(!online) {return(
        <div className="internet_style">
        
            <h1 >Broo..!! It seems, You went offline, recheck your network</h1>
            <h2 >Tips to start:</h2>
            <h3>1. Refresh the page</h3>
            <h3>1. Restart your wifi/internet</h3>
            <h3>1. Contact us</h3>
        </div>
    )}
   return (allRestraunts?.length===0) ? <Shimmer/> : ( 
    <>
    <div className="searching">
    <div >
        <input type="text"
        placeholder="search"
        className="searchbar"
        value={searchText}
        onKeyPress={()=>
            {
                const datas=filterData(searchText,allRestraunts);
                (datas.length===0)? <h1>No Results Found</h1> :
            setRestraunts(datas);
            }}
        onKeyUp={()=>
            {
                const datas=filterData(searchText,allRestraunts);
                (datas.length===0)? <h1>No Results Found</h1> :
            setRestraunts(datas);
            }}    
        onChange={(e)=>
        setsearchText(e.target.value)}
        ></input>

<button className="search-btn"
    onClick={()=>
    {
        const datas=filterData(searchText,allRestraunts);
        (datas.length===0)? <h1>No Results Found</h1> :
    setRestraunts(datas);
    }}>Search</button>
    </div>
    </div>
    
    

    <div className="body">
        {
        restraunts.map((element,index)=>
        {
            return( <Link className="cards_link" to={"/restraunt/"+element.info.id} key={index}><RestrauntCard {...element.info}  /></Link>)
        })
        }
        
    </div>
    </>
    
   );
};

export default BodyComponent;