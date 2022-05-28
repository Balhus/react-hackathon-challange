import './Header.css'
import { BsGear } from 'react-icons/bs'

//Header of the web page, depending if the screen is mobile or PC shows different information
export default function Header() {
    return (
        <>
            <div className="headerBox">
                <header className="header">
                    <img className='mainLogo' src='/imgs/neo-logo.svg'></img>
                    <h1 className='mainLogo-banks'>BANKS</h1>
                </header>
                <div className='headerGear'>
                    <BsGear />
                </div>

                {/* MOBILE */}
                <div className='headerSubtitleBox'>
                    <h1>Transactions history</h1>
                    <p>These are your monthly and daily actions📊</p>
                </div>
            </div>
            <div className="dashboardRow">
                <p>Dashboard</p>
            </div>
        </>
    )
}