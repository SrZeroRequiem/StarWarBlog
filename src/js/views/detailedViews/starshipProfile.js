import React, {useState, useEffect, useContext, useRef} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../store/appContext";

export const StarshipProfile = () => {
    const params = useParams();
    const {store, actions} = useContext(Context);
    const detailsRef = useRef(undefined);
    const [details, setDetails] = useState(detailsRef.current);

    function getPilots(pilots){
        if (pilots[0]!== undefined){
            return(pilots.map((p) => {
                    let pilot = store.characters.filter((obj) => Number(obj.pk) === Number(p));
                    if (pilot.length>0){
                        return <span className="ms-1 mb-1">
                                                <Link to={"/characters/" + p}>{pilot[0].name}</Link>
                                                ,
                                                </span>;
                    }
                    else return null
                }

            ))
        }else return (<span className="ms-1 mb-1">Unknown</span>)
    }

    useEffect(() => {
            setDetails(actions.getStarship(params.theid));
            detailsRef.current = details;
        },
        [actions, details, params.theid]);

    return details !== "404" ?
        <div className="container-fluid px-4">
            <section className="d-flex justify-content-center mt-5 p-0">
                <main className="single-card col-12 row px-0">
                    <figure className="col-lg-8 col-12 p-0 m-0 d-flex" style={{height: "-webkit-fill-available"}}>
                        <img
                            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${(params.theid).toString()}.jpg`}
                            className="img-card"
                            onError={(e) => {
                                e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg";
                            }}
                            alt={"Image of " + (details !== undefined ? details.name : "Loading")}/>
                    </figure>
                    <article className="col-lg-4 col-12 menu p-4 h-100">
                        <h1 className="text-start h4 card-text-title">{details !== undefined ? details.name : "Loading"}</h1>
                        <p className="text-start mt-4 card-text">
                            {details !== undefined ? (details.description !== null ? details.description : "A starship from Star Wars.") : "Loading"}
                        </p>
                    </article>
                </main>
            </section>
            <section className="d-flex justify-content-center mt-5 p-0">
                {details !== undefined ?
                    <article className="row w-100 stats-tab">
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Appearances</div>
                            <div className="d-flex flex-lg-column flex-wrap">
                                {store.films.map((film) => {
                                    const starshipFilms = film["starships"].filter((starship) => starship === details.pk);
                                    if (starshipFilms.length === 1) {
                                        return <span className="ms-1 mb-1">
                                            <Link
                                                to={"/films/" + film.pk}>{"Star Wars: " + film.title + ` (Episode ${actions.romanize(film.episode_id)})`}</Link>
                                            ,
                                        </span>;
                                    } else return null;
                                })}
                            </div>
                        </div>
                        <div className="detail-tab-item col-12 col-lg">
                            <div className="h5">Pilots</div>
                            <div className="d-flex flex-wrap">
                                {
                                    getPilots(details["pilots"])
                                }
                            </div>
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Details</div>
                            <span
                                className="ms-1 mb-1">{`Cost: ${actions.stringFormat(details.cost_in_credits)} C`}</span>
                            <span className="ms-1 mb-1">{`Model: ${details["model"]}`}</span>
                            <span
                                className="ms-1 mb-1">{`Class: ${actions.stringFormat(details["starship_class"])}`}</span>
                            <span className="ms-1 mb-1">{`Length: ${details["length"]}m`}</span>
                        </div>
                        <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                            <div className="h5">Manufacturer</div>
                            <span className="ms-1 mb-1">{`${details["manufacturer"]}`}</span>
                        </div>

                    </article> : "Loading"}
            </section>
        </div> :
        <div className="text-center mt-5 container rounded p-0 border-0 h-50">
            <h1>404</h1>
            <p>Page not found</p>
        </div>;
};