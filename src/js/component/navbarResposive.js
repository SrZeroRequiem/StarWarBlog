import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

export const NavbarResponsive = () =>{
    const { store, actions } = useContext(Context);
    let navStyle = {
        backgroundColor: "black"
    };

    return(
        <nav className="navbar navbar-expand-lg navHide" style={navStyle}>
            <div className="container-fluid d-flex m-0 px-2">
                <div className="container-fluid d-flex flex-nowrap m-0 p-0 w-100 justify-content-between">
                    <button className="navbar-toggler ps-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarMenu" aria-controls="navbarMenu"
                            aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{
                        document.querySelector("#navbarFavorite").classList.remove('show') }}>
                    <span className="navbar-toggler-icon">
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    </button>
                    <Link to="/" className="navbar-brand m-0">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32"
                            width="100%"
                            style={{aspectRatio: 39/4}}
                            alt="Brand"/>
                    </Link>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarFavorite" aria-controls="navbarFavorite"
                            aria-expanded="false" aria-label="Toggle favorites" onClick={()=>{
                        document.querySelector("#navbarMenu").classList.remove('show')
                    }}>
                    <span className="navbar-toggler-icon">
                        <i className="fa-solid fa-heart"></i>
                    </span>
                    </button>
                </div>
                <NavbarFavorite/>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/films/1">
                                <i className="fa-solid fa-film"> Films</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/planets/1">
                                <i className="fa-solid fa-earth-oceania"> Planets</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters/1">
                                <i className="fa-solid fa-user"> Characters</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships/1">
                                <i className="fa-solid fa-rocket"> Starships</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const NavbarFavorite = () => {
    const { store, actions } = useContext(Context);
    const iconsLabel = {
        films: "film",
        planets: "earth-oceania",
        starships: "rocket",
        characters: "user"
    }

    const handleRemoveFavorite = (entity,name,index) => {
        actions.updateNumberFavorites(-1);
        actions.toggleFavorite(entity,name, index);
    };

    const renderFavoriteItems = (favorites, entity) =>
        favorites.length > 0 ? (
            favorites.map((item, index) => (
                <div key={index} className="d-flex justify-content-between">
                    <Link to={`/${entity.slice(0, entity.length - 1)}/${item.index}`} className="m-0 favoriteItem">
                        {item.title}
                    </Link>
                    <i
                        className="fas fa-circle-minus delete-button d-flex align-items-center"
                        onClick={() => handleRemoveFavorite(entity, item.name,item.index)}
                    />
                </div>
            ))
        ) : (
            <span>No {entity} added</span>
        );

    return (
        <div className="collapse navbar-collapse" id="navbarFavorite">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {Object.entries(store.favorites).map(([entity, favorites]) => (
                    <li key={entity} className="nav-item">
                        <Link to={`/${entity}/1`}>
                            <i className={`fa-solid fa-${iconsLabel[entity]} me-1`} />
                            {actions.stringFormat(entity)}
                        </Link>
                        <hr className="bg-light h1" />
                        <div>{renderFavoriteItems(favorites, entity)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
