var redux = require('redux');


console.log('Starting todo redux example');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
}

var reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
	return state;
};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subcribe to changes
store.subscribe(() => {
	var state = store.getState();

	document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'work'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'dog'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Something else'
});

console.log('searchText should be work', store.getState());