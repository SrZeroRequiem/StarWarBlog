import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useParams } from "react-router-dom";

export const FilmProfile = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const filmDetails = await actions.getEntityById(params.theid, "films");
                setDetails(filmDetails);
            } catch (error) {
                console.error("Error fetching film details:", error);
                setDetails("404");
            }
        };

        fetchFilmDetails();
    }, [actions, params.theid]);
    return (
        <div className="container-fluid px-4">
            {details !== null && details !== "404" ? (
                <>
                    <section className="d-flex justify-content-center mt-5 p-0">
                        <main className="single-card col-12 row px-0">
                            <figure className="col-lg-8 col-12 p-0 m-0 d-flex" style={{ height: "-webkit-fill-available" }}>
                                <img
                                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/films/${params.theid}.jpg`}
                                    className="img-card"
                                    onError={(e) => {
                                        e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg";
                                        e.target.style.objectPosition = "center";
                                    }}
                                    alt={"Image of " + (details !== undefined ? details.title : "Loading")}
                                />
                            </figure>
                            <article className="col-lg-4 col-12 menu p-4 h-100">
                                <h1 className="text-start h4 card-text-title">{details.title}</h1>
                                <p className="text-start mt-4 card-text">
                                    {details.opening_crawl !== null ? details.opening_crawl : "A character from Star Wars."}
                                </p>
                            </article>
                        </main>
                    </section>
                    <section className="d-flex justify-content-center mt-5 p-0">
                        {details !== undefined ? (
                            <article className="row w-100 stats-tab">
                                <div className="detail-tab-item col-12 col-lg">
                                    <div className="h5">Characters</div>
                                    <div className="d-flex flex-wrap">
                                        {details.characters.map((c) => (
                                            <span key={c} className="ms-1 mb-1">
                                                <Link to={"/character/" + c}>{store.characters.find((obj) => obj.pk === c)?.name}</Link>,
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="detail-tab-item col-12 col-lg">
                                    <div className="h5">Starships</div>
                                    <div className="d-flex flex-lg-column flex-wrap">
                                        {details.starships.map((s) => (
                                            <span  className="ms-1 mb-1">
                                                <Link to={"/starship/" + s}>{store.starships.find((obj) => obj.pk === s)?.name}</Link>,
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="detail-tab-item col-6 d-flex flex-column col-lg">
                                    <div className="h5">Details</div>
                                    <span className="ms-1 mb-1">{`Episode: ${actions.romanize(details.episode_id)}`}</span>
                                    <span className="ms-1 mb-1">{`Release Date: ${details.release_date}`}</span>
                                    <span className="ms-1 mb-1">{`Director ${details.director}`}</span>
                                    <span className="ms-1 mb-1">{`Producer ${details.producer}`}</span>
                                </div>
                                <div className="detail-tab-item col-6 col-lg">
                                    <div className="h5">Planets</div>
                                    {details.planets.map((p) => (
                                        <p className="ms-1 mb-1">
                                            <Link to={"/planet/" + p}>{store.planets.find((obj) => obj.pk === p)?.name}</Link>
                                        </p>
                                    ))}
                                </div>
                            </article>
                        ) : (
                            "Loading"
                        )}
                    </section>
                </>
            ) : (
                <div className="text-center mt-5 container rounded p-0 border-0 h-50">
                    <h1>404</h1>
                    <p>Page not found</p>
                </div>
            )}
        </div>
    );
};
