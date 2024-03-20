import React, {useEffect, useState} from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);
const injectContext = (PassedComponent) => {
	return props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: {...state.actions}
					})
			})
		);

		useEffect(() => {
			console.log("Loading data")
			state.actions.loadData().then(r => {});

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
};

export default injectContext;
