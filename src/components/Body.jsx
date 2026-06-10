import resList from "../utils/mockData";
import ResCard from "./Restaurant";

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {resList.map((restaurant) => {
                     return <ResCard key={restaurant.info.id} resData={restaurant}/>;
                })}
            </div>
        </div>
    );
};

export default Body;