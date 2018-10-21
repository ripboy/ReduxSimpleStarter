import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item" onClick={() => {this.props.selectBook()}}>
					{book.title}
				</li>
			);
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// this method returns this.props
	return {
		books: state.books
	};
}

// anything returned from this method will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed
	// to all of our reducers
	// bindActionCreators ensures that whenever the selectBook action is called, the result of it flows through all the reducers (through dispatch)
	// this will also make the selectBook action part of the props
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// connect creates a container
// this exports the container
// Promote bookList from a container to a component, it needs to know about this new
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
