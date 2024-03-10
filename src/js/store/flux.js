const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            planets: [],
            characters: [],
            starships: [],
            films: [],
            favoritesStarships: [],
            favoritesPlanets: [],
            favoritesCharacters: [],
            numberFavorites: 0,
            planetsIndex: [],
            characterIndex: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                const store = getStore();
                let planets = store.planets;
                let characters = store.characters
                let starships = store.starships
                let films = store.films
                function fetchPlanets(url) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            data.map(async (planet) => {
                                planets.push(planet);
                            });
                            setStore({planets: planets});
                            // For Swapi.dev (data.next !== null) ? fetchPlanets(data.next) : console.log("All planets fetched");
                        })
                        .catch(err => console.error(err));
                }

                fetchPlanets("http://localhost:3001/planets");

                function fetchCharacters(url) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            data.map(async (character) => {
                                characters.push(character);
                            });
                            setStore({characters: characters});
                            //(data.next !== null) ? fetchCharacters(data.next) : console.log("All characters fetched");
                        })
                        .catch(err => console.error(err));
                }
                fetchCharacters("http://localhost:3001/people")
                function fetchStarships(url) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            data.map(async (starship) => {
                                starships.push(starship);
                            });
                            setStore({starships: starships});
                            //(data.next !== null) ? fetchStarships(data.next) : console.log("All starships fetched");
                        })
                        .catch(err => console.error(err));
                }
                fetchStarships("http://localhost:3001/starships")

                function fetchFilms(url) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            data.map(async (film) => {
                                films.push(film);
                            });
                            setStore({films: films});
                            //(data.next !== null) ? fetchFilms(data.next) : console.log("All starships fetched");
                        })
                        .catch(err => console.error(err));
                }
                fetchFilms("http://localhost:3001/films")

            },
            getFilm: (id)=>{
                const store = getStore()
                const data = store.films
                const item = data.filter((obj)=>{
                    return obj.pk === id
                })
                return item[0]
            },
            getCharacter:(id)=>{
                const store = getStore()
                const data = store.characters
                const item = data.filter((obj)=>{
                    return obj.pk === id
                })
                return item[0]
            },
            getPlanet: (id)=>{
                const store = getStore()
                const data = store.planets
                let item = data.filter((obj) => {
                    return obj.pk === Number(id)
                })
                console.log(item)
                return item[0]
            },
            getStarship: (id)=>{
                const store = getStore()
                const data = store.starships
                const item = data.filter((obj)=>{
                    return obj.pk === id
                })
                return item[0]
            }
            ,
            isFavoriteP: (index) => {
                const store = getStore();
                const favorites = store.favoritesPlanets.findIndex(obj => obj.index === index);
                return favorites !== -1;
            }
            ,
            isFavoriteC: (index) => {
                const store = getStore();
                const favorites = store.favoritesCharacters.findIndex(obj => obj.index === index);
                return favorites !== -1;
            }
            ,
            isFavoriteS: (index) => {
                const store = getStore();
                const favorites = store.favoritesStarships.findIndex(obj => obj.index === index);
                return favorites !== -1;
            }
            ,
            stringFormat: (string) => {
                if (string === "n/a") {
                    return "Undefined";
                } else if (string === undefined) {
                    return "Loading...";
                } else {
                    let coma = string.indexOf(",");
                    if (coma === -1) {
                        return string[0].toUpperCase() + string.slice(1);
                    } else {
                        return string[0].toUpperCase() + string.slice(1, coma + 1) + string[coma + 2].toUpperCase() + string.slice(coma + 3);
                    }
                }
            },
            setlistFavoritesPlanets(name, uid) {
                const store = getStore();
                setStore({favoritesPlanets: [...store.favoritesPlanets, {title: name, index: uid}]});
            },

            setlistFavoritesCharacters(name, uid) {
                const store = getStore();
                setStore({favoritesCharacters: [...store.favoritesCharacters, {title: name, index: uid}]});
            },
            setlistFavoritesStarships(name, uid) {
                const store = getStore();
                setStore({favoritesStarships: [...store.favoritesStarships, {title: name, index: uid}]});
            },

            removelistFavoritesPlanets(index) {
                const store = getStore();
                setStore({
                    favoritesPlanets: store.favoritesPlanets.filter(item => {
                        return item.index !== index;
                    })
                });
            },

            removelistFavoritesCharacters(index) {
                const store = getStore();
                setStore({
                    favoritesCharacters: store.favoritesCharacters.filter(item => {
                        return item.index !== index;
                    })
                });
            },
            removelistFavoritesStarships(index) {
                const store = getStore();
                setStore({
                    favoritesStarships: store.favoritesStarships.filter(item => {
                        return item.index !== index;
                    })
                });
            },
            sumFavorites() {
                const store = getStore();
                setStore({numberFavorites: store.numberFavorites + 1});
            },

            lessFavorites() {
                const store = getStore();
                setStore({numberFavorites: store.numberFavorites - 1});
            }
        }
    };
};

export default getState;