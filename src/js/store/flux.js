const getState = ({ getStore, getActions, setStore }) => {
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
			favoritesstarships: [],
			favoritesplanets: [],
			favoritescharacters: [],
			numberfavorites: 0,
			planetsindex: [],
			characterindex: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));

				fetch("https://www.swapi.tech/api/people?page=1&limit=100")
					.then(res2 => res2.json())
					.then(data2 => setStore({ characters: data2.results }))
					.catch(err2 => console.error(err2));
				fetch("https://www.swapi.tech/api/starships?page=1&limit=100")
					.then(res2 => res2.json())
					.then(data2 => setStore({ starships: data2.results }))
					.catch(err2 => console.error(err2));
			},
			isFavoriteP: (index) => {
				const store = getStore();
				const favorites = store.favoritesplanets.findIndex(obj => obj.index == index)
				if (favorites === -1) {
					return false
				} else {
					return true
				}
			}
			,
			isFavoriteC: (index) => {
				const store = getStore();
				const favorites = store.favoritescharacters.findIndex(obj => obj.index == index)
				if (favorites === -1) {
					return false
				} else {
					return true
				}
			}
			,
			isFavoriteS: (index) => {
				const store = getStore();
				const favorites = store.favoritesstarships.findIndex(obj => obj.index == index)
				if (favorites === -1) {
					return false
				} else {
					return true
				}
			}
			,
			stringFormat: (string) => {
				if (string === "n/a") {
					return "Undefined"
				} else if (string === undefined) {
					return "Cargando..."
				}
				else {
					let coma = string.indexOf(",")
					if (coma === -1) {
						return string[0].toUpperCase() + string.slice(1);
					} else {
						return string[0].toUpperCase() + string.slice(1, coma + 1) + string[coma + 2].toUpperCase() + string.slice(coma + 3);
					}
				}
			},
			setlistFavoritesPlanets(name, uid) {
				const store = getStore();
				setStore({ favoritesplanets: [...store.favoritesplanets, { title: name, index: uid }] });
			},

			setlistFavoritesCharacters(name, uid) {
				const store = getStore();
				setStore({ favoritescharacters: [...store.favoritescharacters, { title: name, index: uid }] });
			},
			setlistFavoritesStarships(name, uid) {
				const store = getStore();
				setStore({ favoritesstarships: [...store.favoritesstarships, { title: name, index: uid }] });
			},

			removelistFavoritesPlanets(index) {
				const store = getStore();
				setStore({
					favoritesplanets: store.favoritesplanets.filter(item => {
						return item.index !== index;
					})
				});
			},

			removelistFavoritesCharacters(index) {
				const store = getStore();
				setStore({
					favoritescharacters: store.favoritescharacters.filter(item => {
						return item.index !== index;
					})
				});
			},
			removelistFavoritesStarships(index) {
				const store = getStore();
				setStore({
					favoritesstarships: store.favoritesstarships.filter(item => {
						return item.index !== index;
					})
				});
			},
			sumFavorites() {
				const store = getStore();
				setStore({ numberfavorites: store.numberfavorites + 1 });
			},

			lessFavorites() {
				const store = getStore();
				setStore({ numberfavorites: store.numberfavorites - 1 });
			}
		}
	};
};

export default getState;