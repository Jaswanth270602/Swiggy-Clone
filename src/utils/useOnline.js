import {useState,useEffect} from "react";

const useOnline=()=>
{
    const[isOnline,setIsOnline]=useState(true);
    useEffect(()=>
    {
        const handleonline=()=>
        {
            setIsOnline(true);
        };
        const handleoffline=()=>
        {
            setIsOnline(false);
        };
        window.addEventListener("online",handleonline);
        window.addEventListener("offline",handleoffline);

        return ()=>
        {
            window.removeEventListener("online",handleonline);
            window.removeEventListener("offline",handleoffline); 
        }

    },[]);

    return isOnline;
}

export default useOnline;