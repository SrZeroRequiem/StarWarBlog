import React, {useContext, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../store/appContext.js";

export const PlanetProfile = () => {
    const params = useParams();
    const {store, actions} = useContext(Context);
    const detailsRef = useRef(undefined);
    const [details, setDetails] = useState(detailsRef.current);
    useEffect(() => {
            setDetails(actions.getPlanet(params.theid));
            detailsRef.current = details;
        },
        [actions, details, params.theid]);
    return details !== "404" ?
        <div className="container-fluid px-4">
            <section className="d-flex justify-content-center mt-5 p-0">
                <main className="single-card col-12 row px-0">
                    <figure className="col-lg-8 col-12 p-0 m-0 d-flex">
                        <img
                            src={`https://raw.github
							usercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${(Number(params.theid)).toString()}.jpg`}
                            className="img-card"
                            onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"}
                            alt={"Image of " + (details !== undefined ? details.name : "Loading")}/>
                    </figure>
                    <article className="col-lg-4 col-12 menu p-4 h-100">
                        <h1 className="text-start h4 card-text-title">{details !== undefined ? details.name : "Loading"}</h1>
                        <p className="text-start mt-4 card-text">
                            {details !== undefined ? (details.description !== null ? details.description : "A planet.") : "Loading"}
                        </p>
                    </article>
                </main>
            </section>
            <section className="d-flex justify-content-center mt-5 p-0">
                {details !== undefined ?
                    <article className="row w-100 stats-tab">
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Residents</div>
                            <div className="d-flex flex-wrap">
                                {store.characters.map((char) => {
                                    if (char.homeworld === details.pk) {
                                        return (
                                            <span className="ms-1 mb-1">
                                            <Link to={"/films/"}>{char.name}</Link>
                                            ,
                                        </span>
                                        );
                                    } else return "";
                                })}
                            </div>
                        </div>
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Appearances</div>
                            <div className="d-flex flex-lg-column flex-wrap">
                                {store.films.map((film) => {
                                    const filmInPlanet = film.planets.filter((planet) => planet === details.pk);
                                    console.log(film);
                                    if (filmInPlanet.length === 1) {
                                        return <span className="ms-1 mb-1">
                                        <Link to={"/films/"}>{film.title}</Link>
                                        ,
                                    </span>;
                                    } else return null;

                                })}
                            </div>
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Details</div>
                            <span className="ms-1 mb-1">{`Orbital Period: ${details["orbital_period"]} days`}</span>
                            <span className="ms-1 mb-1">{`Terrain Type: ${actions.stringFormat(details["terrain"])}`}</span>
                            <span className="ms-1 mb-1">{`Gravity: ${details["gravity"]} G`}</span>
                            <span className="ms-1 mb-1">{`Rotation Period:  ${details["rotation_period"]} Hours`} </span>
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Population</div>
                            <span className="ms-1 mb-1">{new Intl.NumberFormat().format(details["population"])}</span>
                        </div>
                    </article> : "Loading"}
            </section>
        </div> :
        <div className="text-center mt-5 container rounded p-0 border-0 h-50">
            <h1>404</h1>
            <p>Page not found</p>
        </div>;

};

PlanetProfile.propTypes = {
    match: PropTypes.object
};