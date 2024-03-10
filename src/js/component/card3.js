import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";

export function Card3(props) {
    const [iconColor, setIconColor] = useState("white");
    const {actions} = useContext(Context);
    const [isFavorite, setFavorite] = useState(false)
    const index = props.index;
    const details= props.details
    useEffect(() => {
        setFavorite(actions.isFavoriteS(index))
        if (isFavorite === true) {
            setIconColor("white");
        } else {
            setIconColor("rgb(90,92,93)");
        }
    }, [actions, index, isFavorite])

    let color = {
        color: `${iconColor}`
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0">
                <img src={props.image} className="img-card-mini" height="200px" onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"} alt={"Image of "+details.name}/>
                <div className="card-body menu" style={{aspectRatio: 273.83/141}}>
                    <h5 className="card-title" style={{aspectRatio: 241.83/48}}>{details.name}</h5>
                    {details["cost_in_credits"] !== undefined ? <div><p className="card-text mb-1"> {"Price: " + actions.stringFormat("" + details["cost_in_credits"])}</p></div> : <p className="card-text">Loading..</p>}
                    <div className="d-flex flex-row justify-content-between align-content-center">
                        <Link to={"/starships/" + (props.index)} className="mt-1">
                            Learn more!
                        </Link>
                        <button>
                            <i
                                className="fas fa-star" style={color}
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
    index: PropTypes.number
};