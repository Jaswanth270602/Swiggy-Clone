import {URL_USED} from "../constants";

const RestrauntCard=({name,cuisines,lastMileTravel,cloudinaryImageId,avgRating,areaName})=>
{
    return(
        <div className="cards">
            <img alt="Image_Card_here" src={URL_USED+cloudinaryImageId}></img>
            <div className="inside_container">
            <h3>{name}</h3>
            {/* <h4>{cuisines.join(", ")}</h4> */}
             <p className="rating">⭐{avgRating}</p>
                <p>{cuisines.join(", ").length > 32 ? cuisines.join(", ").slice(0, 33) + "...": cuisines.join(", ")}</p>
                <p>{areaName}</p> 
            <h5> 1.5 kms </h5>
            </div>
        </div>
    )
}

export default RestrauntCard;