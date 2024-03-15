const swapiURL = process.env.REACT_APP_SWAPI
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
            favoritesFilms: [],
            numberFavorites: 0,
            planetsIndex: [],
            characterIndex: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            getNumberOfPages(array){
                let arrayPages = []
                let pageNumber = 1
                for (let i = 0; i < array.length; i = i +16) {
                    arrayPages.push(pageNumber)
                    pageNumber++
                }
                return arrayPages
            }
            ,
            loadSomeData: () => {
                const store = getStore();
                let planets = store.planets;
                let characters = store.characters;
                let starships = store.starships;
                let films = store.films;

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

                fetchPlanets(`${swapiURL}/planets`);

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

                fetchCharacters(`${swapiURL}/people`);

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
                fetchStarships(`${swapiURL}/starships`);

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
                fetchFilms(`${swapiURL}/films`)

            },
            getFilm: (id) => {
                const store = getStore();
                const data = store.films;
                const item = data.filter((obj) => {
                    return obj.pk === Number(id);
                });
                return item[0] !== undefined ? item[0] : "404";
            },
            getCharacter: (id) => {
                const store = getStore();
                const data = store.characters;
                const item = data.filter((obj) => {
                    return obj.pk === Number(id);
                });
                return item[0] !== undefined ? item[0] : "404";
            },
            getPlanet: (id) => {
                const store = getStore();
                const data = store.planets;
                let item = data.filter((obj) => {
                    return obj.pk === Number(id);
                });
                return item[0] !== undefined ? item[0] : "404";
            },
            getStarship: (id) => {
                const store = getStore();
                const data = store.starships;
                const item = data.filter((obj) => {
                    return obj.pk === Number(id);
                });
                console.log(item[0].pilots)
                return item[0] !== undefined ? item[0] : "404";
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
            },
            isFavoriteF: (index) => {
                const store = getStore();
                const favorites = store.favoritesFilms.findIndex(obj => obj.index === index);
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
            setlistFavoritesFilms(name, uid) {
                const store = getStore();
                setStore({favoritesFilms: [...store.favoritesFilms, {title: name, index: uid}]});
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
            removelistFavoritesFilms(index) {
                const store = getStore();
                setStore({
                    favoritesFilms: store.favoritesFilms.filter(item => {
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
            },
            romanize(num) {
                var digits = String(+num).split(""),
                    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                    roman = "",
                    i = 3;
                while (i--)
                    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
                return Array(+digits.join("") + 1).join("M") + roman;
            }
        }
    };
};

export default getState;