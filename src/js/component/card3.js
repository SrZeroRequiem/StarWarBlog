import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function Card3(props) {
    const [iconcolor, seticonColor] = useState("white");
    const { store, actions } = useContext(Context);
    const [isFavorite, setFavorite] = useState(false)
    const [index, setIndex] = useState(props.index);
    const [details, setDetails] = useState({})
    function getDetails(url) {
        return fetch(url)
            .then(res => res.json())
    }
    useEffect(() => {
        async function fetchingD() {
            const result = await getDetails(props.url)
            await setDetails(result.result.properties)
        }
        fetchingD()
    }, [])
    useEffect(() => {
        setFavorite(actions.isFavoriteS(index))
        if (isFavorite === true) {
            seticonColor("white");
        } else {
            seticonColor("rgb(90,92,93)");
        }
    })
    let bodycolor = {
        backgroundColor: "rgb(29,30,31)"
    };
    let icolor = {
        color: { iconcolor }.iconcolor
    }

    return (
        <div className="col-3 ">
            <div className="card border-0">
                <img src={props.image} className="img-card-mini" height="200px" onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"} />
                <div className="card-body" style={bodycolor}>
                    <h5 className="card-title">{props.title}</h5>
                    {details.cost_in_credits !== undefined ? <div><p className="card-text mb-1"> {"Price: " + actions.stringFormat("" + details.cost_in_credits)}</p></div> : <p className="card-text">Loading..</p>}
                    <div className="d-flex flex-row justify-content-between align-content-center">
                        <Link to={"/singles/" + (props.index)} className="mt-1">
                            Learn more!
                        </Link>
                        <button>
                            <i
                                className="fas fa-star" style={icolor}
                                onClick={() => {
                                    if (!isFavorite) {
                                        actions.sumFavorites();
                                        actions.setlistFavoritesStarships(props.title, index);
                                        setFavorite(actions.isFavoriteS(index))
                                    } else {
                                        actions.lessFavorites();
                                        actions.removelistFavoritesStarships(index);
                                        setFavorite(actions.isFavoriteS(index))
                                    }
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card3.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.string,
    favorite: PropTypes.string,
    index: PropTypes.string
};