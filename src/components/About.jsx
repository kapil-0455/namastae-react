import User from './User';
import UserClass from './UserClass'
const About = ()=>{
    return (
        <div>
            <h1>About us </h1>
            <h3>What you want to Know</h3>

            <div className='user'>
                <User/>
                <UserClass name = {"Kapil"} branch = {"MBA"}/>
            </div>
        </div>
        
    )
}

export default About
