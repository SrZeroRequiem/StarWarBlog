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
                        aria-expanded="false" aria-label="Toggle navigation">
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
                        aria-expanded="false" aria-label="Toggle favorites">
                    <span className="navbar-toggler-icon">
                        <i className="fa-solid fa-heart"></i>
                    </span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarFavorite">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i className="fa-solid fa-film"> Films</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesFilms.map((item, index) => {
                                    return (
                                        <Link to={"/planets/" + store.favoritesFilms[index].index} key={index}
                                              className="d-flex justify-content-between">
                                            <p className="m-0 favoriteItem">{item.title}</p>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesFilms(item.index);
                                               }}/>
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                        <li className="nav-item">
                            <i className="fa-solid fa-earth-oceania"> Planets</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesPlanets.map((item, index) => {
                                    return (
                                        <Link to={"/planets/" + store.favoritesPlanets[index].index} key={index}
                                              className="d-flex justify-content-between">
                                            <p className="m-0 favoriteItem">{item.title}</p>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                        <li className="nav-item mt-2">
                            <i className="fa-solid fa-user"> Characters</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesCharacters.map((item, index) => {
                                    return (
                                        <Link to={"/characters/" + store.favoritesCharacters[index].index} key={index}
                                              className="d-flex justify-content-between">
                                            <p className="m-0 favoriteItem">{item.title}</p>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                        <li className="nav-item mt-2">
                            <i className="fa-solid fa-rocket"> Starships</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesStarships.map((item, index) => {
                                    return (
                                        <Link to={"/starships/" + store.favoritesStarships[index].index} key={index}
                                              className="d-flex justify-content-between">
                                            <p className="m-0 favoriteItem">{item.title}</p>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                    </ul>
                </div>
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