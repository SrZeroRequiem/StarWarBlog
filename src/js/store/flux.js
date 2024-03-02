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
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));

				fetch("https://swapi.dev/api/people/")
					.then(res2 => res2.json())
					.then(data2 => setStore({ characters: data2.results }))
					.catch(err2 => console.error(err2));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			setlistFavoritesPlanets(val) {
				const store = getStore();
				let newfavoritelist = [...store.favoritesplanets, val];
				setStore({ favoritesplanets: [...store.favoritesplanets, val] });
			},

			setlistFavoritesCharacters(val) {
				const store = getStore();
				setStore({ favoritescharacters: [...store.favoritescharacters, val] });
			},

			removelistFavoritesPlanets(val) {
				const store = getStore();
				setStore({
					favoritesplanets: store.favoritesplanets.filter(item => {
						return item !== val.toString();
					})
				});
			},

			removelistFavoritesCharacters(val) {
				const store = getStore();
				setStore({
					favoritescharacters: store.favoritescharacters.filter(item => {
						return item !== val.toString();
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
			},

			setplanetindex(val) {
				const store = getStore();
				setStore({ planetsindex: [...store.planetsindex, val] });
			},

			removePlanetsindex(val) {
				const store = getStore();
				setStore({
					planetsindex: store.planetsindex.filter(item => {
						return item !== val;
					})
				});
			},

			setcharacterindex(val) {
				const store = getStore();
				setStore({ characterindex: [...store.characterindex, val] });
			},

			removecharacterindex(val) {
				const store = getStore();
				setStore({
					characterindex: store.characterindex.filter(item => {
						return item !== val;
					})
				});
			}
		}
	};
};

export default getState;