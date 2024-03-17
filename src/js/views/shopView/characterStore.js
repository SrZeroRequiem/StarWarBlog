import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../store/appContext";
import {CardProfile} from "../../component/cards/cardProfile";

export const CharacterStore = () => {
    const params = useParams()
    const page = Number(params.page) -1
    const start = page*16
    const end = start + 16
    const {store,actions} = useContext(Context);
    const nPages = actions.getNumberOfPages(store.characters)

    return (
        <div className="container-flux p-lg-5 px-2 bg-black">
            <h1 className="mt-3 mb-2">Characters</h1>
            <hr className="bg-light mt-0"/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {store.characters.slice(start, end).map((item, index) => {
                    return (
                        <CardProfile
                            key={(item.pk)}
                            title={item.name}
                            details={item}
                            index={(item.pk)}
                            image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${(item.pk)}.jpg`}
                        />
                    );
                })}
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    {page >= 1 ?
                        <button type="button" className="btn btn-primary">
                            <Link to={"/characters/"+(page)}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </Link>
                        </button> :
                        <button type="button" className="btn btn-primary" style={{visibility: "hidden"}}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>}
                    {nPages.map((n) => {
                        return <button type="button" className="btn btn-primary">
                            <Link to={"/characters/"+n}>{n}</Link>
                        </button>;
                    })
                    }
                    {page +1 !== nPages[nPages.length-1] ?
                        <Link to={"/characters/" + (page+2)} className="btn btn-primary">
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link> :
                        <button type="button" className="btn btn-primary" style={{visibility: "hidden"}}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>}
                </div>
            </div>
        </div>
    );

};