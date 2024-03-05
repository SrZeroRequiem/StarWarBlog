import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singles = () => {
    // eslint-disable-next-line no-unused-vars
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [details, setDetails] = useState({})
    const [desc, setDesc] = useState("Loading...")
    function getDetails(url) {
        return fetch(url)
            .then(res => res.json())
    }
    useEffect(() => {
        async function fetchingD() {
            const result = await getDetails(`https://www.swapi.tech/api/starships/${params.theid}`)
            await setDesc(result.result.description)
            await setDetails(result.result.properties)
        }
        fetchingD().then()
    }, [])
    return (
        <div className="jumbotron bg-black ">
            {" "}
            <div className="container">
                <div className="row justify-content-center">
                    <main className="single-card col-10 row p-0">
                        <figure className="col-7 p-0 m-0 ">
                            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${(params.theid).toString()}.jpg`} className="img-card" onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"} />
                        </figure>
                        <article className="col-5 menu p-4">
                            <h1 className="text-start h4 card-text-title">{details.name}</h1>
                            <p className="text-start mt-4 card-text">
                                {desc}
                            </p>
                        </article>
                    </main>
                </div>
            </div>
            <hr className="bg-light my-3" />
            <section className="container">
                <div className="row">
                    <div className="col-2 text-center">
                        <h3>Name</h3>
                    </div>
                    <div className="col-2 text-center">
                        <h3>Model</h3>
                    </div>
                    <div className="col-2 text-center">
                        <h3>Class</h3>
                    </div>
                    <div className="col-2 text-center">
                        <h3>Crew</h3>
                    </div>
                    <div className="col-2 text-center">
                        <h3>Manufacturer</h3>
                    </div>
                    <div className="col-2 text-center">
                        <h3>Price</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.name}</h5>
                    </div>
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.model}</h5>
                    </div>
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.starship_class}</h5>
                    </div>
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.crew}</h5>
                    </div>
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.manufacturer}</h5>
                    </div>
                    <div className="col-2 text-center">
                        <h5 className="mt-3 text-capitalize">{details.cost_in_credits} C</h5>
                    </div>
                </div>
            </section>
        </div>
    );
};

Singles.propTypes = {
    match: PropTypes.object
};