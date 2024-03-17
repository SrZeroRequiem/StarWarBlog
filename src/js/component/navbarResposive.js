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
                <div className="collapse navbar-collapse" id="navbarFavorite">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i className="fa-solid fa-film"> Films</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesFilms.length>0?store.favoritesFilms.map((item, index) => {
                                    return (
                                        <div key={index}
                                              className="d-flex justify-content-between">
                                            <Link  to={"/film/" + store.favoritesFilms[index].index} className="m-0 favoriteItem">{item.title}</Link>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesFilms(item.index);
                                               }}/>
                                        </div>
                                    );
                                }): <span>No films added</span>}
                            </div>
                        </li>
                        <li className="nav-item">
                            <i className="fa-solid fa-earth-oceania"> Planets</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesPlanets.length>0?store.favoritesPlanets.map((item, index) => {
                                    return (
                                        <div key={index}
                                             className="d-flex justify-content-between">
                                            <Link to={"/planet/" + store.favoritesPlanets[index].index}  className="m-0 favoriteItem">{item.title}</Link>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </div>
                                    );
                                }):<span>No planets added</span>}
                            </div>
                        </li>
                        <li className="nav-item mt-2">
                            <i className="fa-solid fa-user"> Characters</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesCharacters.length>0?store.favoritesCharacters.map((item, index) => {
                                    return (
                                        <div  key={index}
                                              className="d-flex justify-content-between">
                                            <Link to={"/character/" + store.favoritesCharacters[index].index} className="m-0 favoriteItem">{item.title}</Link>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </div>
                                    );
                                }):<span>No characters added</span>}
                            </div>
                        </li>
                        <li className="nav-item mt-2">
                            <i className="fa-solid fa-rocket"> Starships</i>
                            <hr className="bg-light h1"/>
                            <div>
                                {store.favoritesStarships.length>0?store.favoritesStarships.map((item, index) => {
                                    return (
                                        <div key={index}
                                              className="d-flex justify-content-between">
                                            <Link to={"/starship/" + store.favoritesStarships[index].index} className="m-0 favoriteItem">{item.title}</Link>
                                            <i className="fas fa-circle-minus delete-button d-flex align-items-center"
                                               onClick={() => {
                                                   actions.lessFavorites();
                                                   actions.removelistFavoritesPlanets(item.index);
                                               }}/>
                                        </div>
                                    );
                                }):<span>No starships added</span>}
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