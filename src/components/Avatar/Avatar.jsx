import React from "react";
import "./Avatar.css";

const Avatar = ({ avatarURL, onClose, avatarUpdate }) => {
    return (
        <div className="backdrop avatar">
            <form className="avatar__modal" >
                <button
                    type="button"
                    className="avatar__close-button"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>

                <div className="avatar__container">
                    <img className="avatar__image" src={avatarURL} alt="Avatar" />
                </div>
                <div className="avatar__change">
                    <p className="avatar__description" htmlFor="avatarInput">
                        Change Avatar
                    </p>
                    <input
                        className="avatar__input"
                        type="url"
                        id="avatarInput"
                        placeholder="Enter image URL"
                    />
                </div>
                <button className="avatar__button" type="submit" onClick={avatarUpdate}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default Avatar;
