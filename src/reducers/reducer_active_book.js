// state arg is not application state, only the state this reducer is responsible for

// 'state = null' is ES6 syntax - means if action is undefined, return null
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}