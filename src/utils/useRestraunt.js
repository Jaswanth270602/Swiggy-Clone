import {useState,useEffect} from "react";

const useRestraunt=(id)=>
{
    const [restraunt,setRestraunt] = useState(null);
    const [items,setItems]=useState([]);

    useEffect(()=>
    {
        getRestrauntData();
    },[]);

    async function getRestrauntData()
    {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.823718594372178&lng=83.34554269909859&restaurantId="+id+"&submitAction=ENTER");
        const json_data=await data.json();
    
        setRestraunt(json_data.data.cards[0].card.card.info);
        setItems(json_data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    }

    return [restraunt,items];
}

export default useRestraunt;