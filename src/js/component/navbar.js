import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <header className="container-fluid p-3 border-bottom border-light pb-0 navShow" style={{ backgroundColor: "black" }}>
            <div className="row justify-content-between flex-row px-5">
                {/* Redes sociales */}
                <div className="col-4 p-0">
                    <SocialMediaLinks />
                </div>
                {/* Logo */}
                <div className="col-4 d-flex justify-content-center">
                    <Link to="/">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                            height="80px"
                            alt="Brand"
                        />
                    </Link>
                </div>
                {/* Favoritos */}
                <div className="col-4 d-flex justify-content-end p-0">
                    <FavoritesDropdown store={store} actions={actions} />
                </div>
            </div>
            {/* Navegación */}
            <nav>
                <div className="row justify-content-start flex-row px-5">
                    <div className="col p-0">
                        <Link to="/films/1" className="me-1 navHover">
                            <i className="fa-solid fa-film"> Films</i>
                        </Link>
                        <Link to="/planets/1" className="me-1 navHover">
                            <i className="fa-solid fa-earth-oceania"> Planets</i>
                        </Link>
                        <Link to="/characters/1" className="me-1 navHover">
                            <i className="fa-solid fa-user"> Characters</i>
                        </Link>
                        <Link to="/starships/1" className="me-1 navHover">
                            <i className="fa-solid fa-rocket"> Starships</i>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// Componente para mostrar enlaces a redes sociales
const SocialMediaLinks = () => {
    return (
        <>
            <a href="https://www.facebook.com/starwarsla" className="social-media-icon"><i
                className="fab fa-facebook fa-lg px-2"></i></a>
            <a href="https://www.instagram.com/starwars/?hl=es-la" className="social-media-icon"><i
                className="fab fa-instagram fa-lg px-2"></i></a>
            <a href="https://www.tumblr.com/tagged/star+wars?sort=top" className="social-media-icon"><i
                className="fab fa-tumblr fa-lg px-2"></i></a>
            <a href="https://twitter.com/starwars?lang=es" className="social-media-icon"><i className="fab fa-twitter fa-lg px-2"></i></a>
            <a href="https://www.youtube.com/user/starwars" className="social-media-icon"><i className="fab fa-youtube fa-lg px-2"></i></a>
        </>
    );
};

// Componente para el menú desplegable de favoritos
const FavoritesDropdown = ({ store, actions }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="">
                <i className="fas fa-heart"></i>
                <span> {store.numberFavorites} </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="menu">
                {Object.entries(store.favorites).map(([entity, favoritesArray]) => (
                    <FavoriteCategory key={entity} entity={entity} favoritesArray={favoritesArray} actions={actions} />
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

// Componente para una categoría de favoritos en el menú desplegable
const FavoriteCategory = ({ entity, favoritesArray, actions }) => {
    const handleRemoveFavorite = (entity,name,index) => {
        actions.updateNumberFavorites(-1);
        actions.toggleFavorite(entity,name, index);
    };
    const iconsLabel = {
        films: "film",
        planets: "earth-oceania",
        starships: "rocket",
        characters: "user"
    }
    return (
        <>
            <Link to={`/${entity}/1`} className="text-start ps-3 mb-1">
                <i className={`fa-solid fa-${iconsLabel[entity]} me-1`} />
                {actions.stringFormat(entity)}
            </Link>
            <hr className="bg-light mt-0" />
            {favoritesArray.map((item, index) => (
                <Link to={`/${entity}/${item.index}`} key={index} className="mb-1">
                    <Dropdown.Item className="d-flex justify-content-between">
                            <Link to={`/${entity.slice(0, entity.length - 1)}/${item.index}`} className="m-0 favoriteItem">
                                {item.title}
                            </Link>
                            <i
                                className="fas fa-circle-minus delete-button d-flex align-items-center"
                                onClick={() => handleRemoveFavorite(entity, item.name, item.index)}
                            />
                    </Dropdown.Item>
                </Link>
            ))}
        </>
    );
};


