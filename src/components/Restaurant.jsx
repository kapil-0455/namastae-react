import { CLOUDINARY_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
        sla
    } = resData?.info || {};

    return (
        <div className="card">
            <img src={CLOUDINARY_URL + cloudinaryImageId} alt="food" className="res-logo"/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{costForTwo}</h5>
            <p>{sla?.slaString || (sla?.deliveryTime ? `${sla.deliveryTime} mins` : "")}</p>
        </div>
    );
};

export default ResCard;