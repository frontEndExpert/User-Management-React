import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddForm from './AddForm.js';
import EditForm from './EditForm.js';
import Contacts from './Contact.js';


export default class App extends React.Component {
	constructor() {
		super();
		var contacts = [];
		if ( JSON.parse(localStorage.users == null)){
			contacts = [{name:"Name", age:"0", nickname:"Nickname", id: 0}];
			localStorage.users = JSON.stringify(contacts);
		}
		contacts = JSON.parse(localStorage.users);
		this.state = { data: contacts, user2edit: 'A'};
	};
    // parent function to communicate with children, EditForm
	EditButton = (userid) => {
		this.setState({user2edit: userid});
		var form = (this.state.user2edit == 'A') ? `<AddForm data={JSON.stringify(this.state.data)} />` : `<EditForm user2edit={JSON.stringify(this.state.data[this.state.user2edit])} userid={this.state.user2edit} />` ;
	}

	render() {
	        var form = (this.state.user2edit == 'A') ? <AddForm data={JSON.stringify(this.state.data)} /> : <EditForm userArr={JSON.stringify(this.state.data[this.state.user2edit])} userid={this.state.user2edit} /> ;
			// main App render to dom function. 
			// passing data and function to children
			return (
			<div className="container" >
			<nav className="breadcrumb"><h5>Aylon Spigel</h5></nav>
			<div className="row">
			<Contacts data={JSON.stringify(this.state.data)} 
				      CEditButton={this.EditButton} />
			</div>
			<div className="row" id="myform">
				{form}
			</div>
			</div>
		);
	};

}
