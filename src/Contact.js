import React from 'react';
import ContactInfo from './ContactInfo'
import ContactDetails from './ContactDetail'
import Contacts from './Contact.json'
import update from 'react-addons-update'
import ContactCreate from './contactCreate'
import Template from './Template'

export default class Contact extends React.Component {
	// state 초기화
	constructor(props) {
		super(props)
		this.state = {
			selectedKey: -1,
			keyword: '',
			ContactData: [{
					name: "pitch",
					phone: "010-2345-2314" },
				{
					name: "egg",
					phone: "010-3424-2433" },
				{
					name: "tree",
					phone: "010-3425-3423"
				}]
		}
	}
	
	// input에 글 입력시 발생
	handleChange= (e) => {	// e는 이벤트 객체
		this.setState({
			keyword: e.target.value	// e.target: event가 전달한 객체에 대한 참조
		})
		console.log(e.target.value,' is entered')
	}
	// 이름 클릭시 발생하는 메소드
	handleSelect = (key) => {
		this.setState({
			selectedKey : key
		})
		console.log(key,' is selected')
		//console.log(this.state.selectedKey, ' :selected KEY')
	}

	// 주소록 추가
	handleCreate = (contact) => {
		this.setState({
			ContactData: update(this.state.ContactData, { $push: [contact] })
		})
	}

	// 주소록 삭제
	handelRemove= () => {
		if(this.state.selectedKey === -1) {	// 아무것도 누르지 않으면 함수 실행x
			return
		}
		this.setState({
			ContactData: update(this.state.ContactData,
				{ $splice: [[this.state.selectedKey,1]]} // 선택한 셀렉트키(index)값 삭제 ex) $splice [0,1]: 배열의 0번째 삭제
				),
				selectedKey: -1 // 다시 초기화
		})
	}

	// 주소록 수정
	handleEdit = (name, phone) => {
		this.setState({
			ContactData: update(this.state.ContactData,
				{	
						// 몇 번째 배열의 값을 수정하겠다
						[this.state.selectedKey]: {
							name: { $set: name },
							phone: { $set: phone }
						}}
			)})
	}

	render() {

		// data는 ContactData 배열
		const varmap = (data) => {
			// 알파벳 순서대로 정렬
			data.sort((a,b) => {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0})
			data = data.filter(
				(contact) => {
					// indexOf(): 주어진 값과 일치하는 첫 번째 인덱스를 반환
					// 일치하는 값이 없으면 -1을 반환
					return contact.name.toLowerCase()
					.indexOf(this.state.keyword.toLowerCase()) > -1
				}
			)
			return data.map((Contact, i) => {
				// ContactInfo 렌더링
				return (<ContactInfo contact = {Contact} 
								key = {i}	// index
								// onclick 함수가 ContactInfo에게 props로 전달
								onClick = {()=> this.handleSelect(i)}	// css 문법은 렌더링의 return, <div> 안에서만 사용 가능
						/>)
					})
				}

		return (
			<div>
				<Template>
				<h1>Contact</h1>
				<input 
					name = "keyword"
					placeholder = "search"
					value = {this.state.keyword}
					onChange = {this.handleChange}	// input의 텍스트 값이 바뀔 때마다 발생하는 이벤트
				/> 
				{varmap(this.state.ContactData)}

				{/* 선택 되었을 시 디테일한 정보 보여줌*/}
				<ContactDetails
					// ContactDetail에 isSelected 라는 porps 전달, 
					// 선택이 되었으면 -1이 아니므로 isSelected에 참을 전달
					// selectedKey에는 key값(index)이 들어감
					isSelected = {this.state.selectedKey !== -1} 
					// contact에 ContactData[i] 데이터가 저장
					contact = {this.state.ContactData[this.state.selectedKey]}
					onRemove = {this.handelRemove}
					onEdit = {this.handleEdit}
					/>
					<ContactCreate onCreate = {this.handleCreate}
					/>
					</Template>
			</div>
		)
	}
}
