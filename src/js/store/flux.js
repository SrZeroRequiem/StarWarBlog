const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                { title: "FIRST", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" }
            ],
            planets: [],
            characters: [],
            starships: [],
            films: [],
            favorites: {
                starships: [],
                planets: [],
                characters: [],
                films: []
            },
            numberFavorites: 0
        },
        actions: {
            stringFormat: (string) => {
                if (string === "n/a") {
                    return "Undefined";
                } else if (string === undefined) {
                    return "Loading...";
                } else {
                    // Capitalizar la primera letra de la cadena
                    const capitalizeFirstLetter = (str) => {
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    };

                    // Dividir la cadena en partes separadas por coma (',')
                    const parts = string.split(',');

                    // Capitalizar la primera letra de cada parte y unirlas nuevamente con coma
                    const formattedString = parts.map(part => capitalizeFirstLetter(part.trim())).join(', ');

                    return formattedString;
                }
            },
            getNumberOfPages: (array) => {
                let arrayPages = [];
                let pageNumber = 1;
                for (let i = 0; i < array.length; i += 16) {
                    arrayPages.push(pageNumber);
                    pageNumber++;
                }
                return arrayPages;
            },
            fetchData: async (url, type) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    setStore({ [type]: data });
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            },
            loadData: async () => {
                const { fetchData } = getActions();
                const endpoints = {
                    planets: "https://swapi-express-ezccmwhyd-srzerorequiems-projects.vercel.app/api/planets",
                    characters: "https://swapi-express-ezccmwhyd-srzerorequiems-projects.vercel.app/api/people",
                    starships: "https://swapi-express-ezccmwhyd-srzerorequiems-projects.vercel.app/api/starships",
                    films: "https://swapi-express-ezccmwhyd-srzerorequiems-projects.vercel.app/api/films"
                };
                for (const [type, url] of Object.entries(endpoints)) {
                    await fetchData(url, type);
                }
            },
            getEntityById: (id, entity) => {
                const store = getStore();
                const data = store[entity];
                return data.find(item => item.pk === Number(id)) || "404";
            },
            toggleFavorite: (entity, name, id) => {
                const store = getStore();
                const favorites = store.favorites[entity];
                const index = favorites.findIndex(item => item.index === id);
                if (index !== -1) {
                    console.log("Ya no es favorito" + id)
                    setStore({ favorites: { ...store.favorites, [entity]: favorites.filter(item => item.index !== id) } });
                } else {
                    console.log("Ahora sera favorito" + id)
                    setStore({ favorites: { ...store.favorites, [entity]: [...favorites, { title: name, index: id }] } });
                }
            },
            isFavorite: (entity, id) => {
                const store = getStore();
                const favorites = store.favorites[entity];
                return favorites.some(item => item.index === id);
            },
            updateNumberFavorites: (value) => {
                const store = getStore();
                setStore({ numberFavorites: store.numberFavorites+value});
            },
            romanize: (num) => {
                const key = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                return key[num] || num.toString();
            }
        }
    };
};

export default getState;
