import React from 'react'
import logo from "./FT__logo.svg"
import img from "./FT__img.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="" className="logo" />
            <img src={img} alt=""  className="image" />
        </div>
    )
}

export default Sidebar
