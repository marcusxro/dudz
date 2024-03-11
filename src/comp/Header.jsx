import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
const Header = () => {
    return (
        <header>
            <div className="logo">
                Logo
            </div>
            <div className="midCon">
                <Link>
                    Inventory
                </Link>
                <Link>
                    File Maintenance
                </Link>
            </div>
            <div className="logOutCon">
                <Logout />
            </div>
        </header>
    )
}

export default Header