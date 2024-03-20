import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterProfile = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [details, setDetails] = useState(undefined);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const characterDetails = await actions.getEntityById(params.theid, "characters");
                setDetails(characterDetails);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };

        fetchCharacterDetails()
            .then(() => console.log("Character details loaded"))
            .catch((error) => console.error("Error loading character details:", error));
    }, [actions, params.theid]);
    return details !== "404" ?
        <div className="container-fluid px-4">
            <section className="d-flex justify-content-center mt-5 p-0">
                <main className="single-card col-12 row px-0">
                    <figure className="col-lg-8 col-12 p-0 m-0 d-flex" style={{height: "-webkit-fill-available"}}>
                        <img
                            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${params.theid}.jpg`}
                            className="img-card"
                            onError={(e) => (e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg")}
                            alt={"Image of " + (details !== undefined ? details.name : "Loading")}
                        />
                    </figure>
                    <article className="col-lg-4 col-12 menu p-4 h-100">
                        <h1 className="text-start h4 card-text-title">{details !== undefined ? details.name : "Loading"}</h1>
                        <p className="text-start mt-4 card-text">
                            {details!==undefined?(details.description !== null ? details.description : "A planet."):"Loading"}
                        </p>
                    </article>
                </main>
            </section>
            <section className="d-flex justify-content-center mt-5 p-0">
                {details !== undefined ?
                    <article className="row w-100 stats-tab">
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Appearances</div>
                            <div className="d-flex flex-wrap">
                                {store.films.map((film) => {
                                    const filmInCharacter = film.planets.filter((character) => character === details.pk);
                                    if (filmInCharacter.length === 1) {
                                        return <span className="ms-1 mb-1">
                                        <Link
                                            to={"/film/" + film.pk}>{"Star Wars: " + film.title + ` (Episode ${actions.romanize(film.episode_id)})`}</Link>
                                        ,
                                    </span>;
                                    } else return null;

                                })}
                            </div>
                        </div>
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Starships</div>
                            <div className="d-flex flex-wrap">
                                {store.starships.map((starships) => {
                                    if (starships.pilots !== undefined) {
                                        const pilotStarship = starships["pilots"].filter((pilot) => pilot === details.pk);
                                        if (pilotStarship.length === 1) {
                                            return <span className="ms-1 mb-1">
                                            <Link to={"/starship/" + starships.pk}>{starships.name}</Link>
                                            ,
                                        </span>;
                                        } else return null;

                                    } else return null;
                                })}
                            </div>
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Homeworld</div>
                            {store.planets.map((planet) => {
                                if (planet.pk === details.pk) {
                                    return <span className="ms-1 mb-1"><Link
                                        to={"/planet/" + planet.pk}>{planet.name}</Link>
                                    </span>;
                                } else return null;

                            })}
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Details</div>
                            <span className="ms-1 mb-1">{`Birth Year: ${details["birth_year"]}`}</span>
                            <span className="ms-1 mb-1">{`Gender: ${actions.stringFormat(details["gender"])}`}</span>
                            <span className="ms-1 mb-1">{`Height: ${details["height"] / 100}m`}</span>
                        </div>
                    </article> : "Loading"}
            </section>
        </div> :
        <div className="text-center mt-5 container rounded p-0 border-0 h-50">
            <h1>404</h1>
            <p>Page not found</p>
        </div>;

};

CharacterProfile.propTypes = {
    match: PropTypes.object
};