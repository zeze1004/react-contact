import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';


class Codelab extends React.Component {
	render () {
		return (
			<div>
				<h1>
					{this.props.name}
					{this.props.children}
				</h1>
				<h2>
					{this.props.number}
				</h2>
			</div>
		)
	}
}

Codelab.propTypes = {
	name: propTypes.string,
	number: propTypes.number.isRequired // 꼭 입력
}

Codelab.defaultProps = {
	name: 'unknown '
}

class App extends React.Component {
	render() {
		return (
			<Codelab 
				name = {this.props.name}
				number = {this.props.number}
			> 
				{this.props.children} 
			</Codelab>
		)
	}
}

class Counter extends React.Component {
	// state 사용 위해서는 초기화 꼭 필요!
	constructor(props) {
		super(props)
		this.state = {
			value: 0
		}
	}

	plusClick = (props) => {
		this.setState({
			value: this.state.value + 1
		})
	}

	minusClick = (props) => {
		this.setState({
			value: this.state.value + -1
		})
	}

	render() {
		return (
			<div>
				<h2>
					{this.state.value}
				</h2>
				<button onClick = {this.plusClick}> + press</button>
				<button onClick = {this.minusClick}>- press</button>
			</div>
		)
	}
}

export {App, Counter}