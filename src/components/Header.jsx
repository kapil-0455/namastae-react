import { LOGO_URL } from "../utils/constants";

const Heading = ()=>{
    return (
        <div className="header-container">
            <div className="img-container">
                <img src={LOGO_URL} alt="logo" className="img-logo"/>
            </div>
            <div className="title-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Heading;