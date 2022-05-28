import './Navbar.css'
import {AiFillSignal} from 'react-icons/ai'
import {BsFillCompassFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

//NavBar for the mobile version, it shows 3 icons to navigate
export default function NavBar() {

    return (
        <div className='navBarContainer'>
            <div className='navBarBox'>
                <AiFillSignal className='navbar-active'/>
                <BsFillCompassFill />
                <FaUserAlt />
            </div>
        </div>
    );
}