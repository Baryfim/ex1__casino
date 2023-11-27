import React from "react";
import { Link } from "react-router-dom";
// Styles
import classes from "./Menu.module.css"
// Menu Items
import { MenuItems } from "./items";



const Menu = () => {
    return (
        <nav className={classes.MenuNav}>
            {MenuItems.map(item => (
                <Link to={item.path} key={item.Title} className={classes.MenuNav__Item}>
                    <img src={item.Icon} alt={item.Title} />
                    <span>{item.Title}</span>
                </Link>
            ))}
        </nav>
    )
}

export default Menu;