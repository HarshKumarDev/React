import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData}= props;
    return(
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
         }}>
            <img className="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId} />
            <h3 className="res-name">{resData.info.name}</h3>
            <h4 className="res-name">⭐ {`${resData.info.avgRating} ${',  '} ${resData.info.sla.slaString}`} </h4>
            <h4 style={{color:'rgba(2, 6, 12, 0.6)'}} className="res-name">{resData.info.cuisines.join(", ")}</h4>
            <h4 style={{color:'rgba(2, 6, 12, 0.6)'}} className="res-name">{resData.info.areaName}</h4>
        </div>
    )

 }
export default RestaurantCard;