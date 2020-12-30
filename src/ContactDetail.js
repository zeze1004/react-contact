import React from 'react'

export default class ContactDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEdit: false,
			name: '',
			phone: ''
		}
	}

	// Edit 버튼 누를 때 발생 이벤트
	handleToggle = () => {
		if(!this.state.isEdit) {	// Edit 버튼을 누르면
			this.setState({					// 기존 값 유지
				name: this.props.contact.name,
				phone: this.props.contact.phone
			})
		} else {
			this.handleEdit()
		}
		this.setState({
			isEdit: !this.state.isEdit
		})
	}

	handleChange = (e) => {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState)
	}

	handleEdit = () => {
		this.props.onEdit(this.state.name, this.state.phone)
	}

	// 엔터 누를 시 버튼 클릭 실행
	handleKeyPress = (e) => {
		if(e.charCode === 13) { // enter
			this.handleToggle()
		}
	}	

	render() {
		
		const edit = (
			<div>
				<p>
					<input
							type="text"
							name="name"
							placeholder="name"
							value={this.state.name}
							onChange={this.handleChange}
							onKeyPress = {this.handleKeyPress}
					/>
				</p>
				<p>
					<input
							type="text"
							name="phone"
							placeholder="phone"
							value={this.state.phone}
							onChange={this.handleChange}
							onKeyPress = {this.handleKeyPress}
					/>
			</p>
			</div>
		)
		
		const details = (
			<div>
				<p>{this.props.contact.name}</p>
				<p>{this.props.contact.phone}</p>
			</div>
		)
		const view = this.state.isEdit ? edit : details
		const blank = (<div>Not Selected</div>)
		return(
			<div>
				<h2>Details</h2>
				{this.props.isSelected ? view : blank}
				<p>
					<button onClick = {this.handleToggle}>
						{this.state.isEdit ? 'OK' : 'Edit'}
					</button>
					<button onClick = {this.props.onRemove} >Remove</button>
				</p>
			</div>
		)
	}
}

ContactDetail.defaultProps = {
	contact: {
		name: '',
		phone: ''
	},
	onRemove: () => {console.error('onRemove not defined')},
	onEdit: () => {console.error('onEdit not defined')}
}