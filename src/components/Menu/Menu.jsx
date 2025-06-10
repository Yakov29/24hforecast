import React from "react";
import user from "../../images/user.svg"
import "./Menu.css"

const Menu = ({ avatar, regButtonHandler, isLoggedIn }) => {
    return (
        <div className="backdrop menu">
            <form className="menu__modal">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a className="menu__link" href="#">Who we are</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">Contacts</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">Menu</a>
                    </li>
                </ul>
                <div className="menu__profile">
                    <img className="menu__avatar" src={avatar} alt="" />
                    {!isLoggedIn && (
                        <button type="button" onClick={regButtonHandler} className="menu__button">Sign Up</button>
                    )}

                </div>
            </form>
        </div>
    )
}

export default Menu