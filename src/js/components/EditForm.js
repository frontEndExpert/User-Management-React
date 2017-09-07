import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ES6 style classes
export default class EditForm extends React.Component {
  constructor (props) {
    super(props);  
    this.state = {userid: this.props.userid, contacts: localStorage.users};   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myreset = this.myreset.bind(this);  
  }

  // function to cancel edit
  myreset (e) {
    e.preventDefault()

    this.setState({userid: ''})
    window.location.reload();
  }

  // fuction to save the edit
  handleSubmit (e) {
    e.preventDefault();
    // get edit info from the form
    var contact = {
      name: document.getElementById('editForm').name.value.trim(),
      age: document.getElementById('editForm').age.value.trim(),
      nickname: document.getElementById('editForm').nickname.value.trim(),
      id: document.getElementById('editForm').u2e.value.trim()
    }

    if (contact.name === '') {
      alert('please enter name');
    } else {
      // make and save the edit
      var contacts = JSON.parse(this.state.contacts);
      var u2e = this.state.userid;
      contacts[u2e]=contact;
      this.setState({contacts: JSON.stringify(contacts)});
      localStorage.users = JSON.stringify(contacts);
      document.getElementById('editForm').reset();
      window.location.reload();
    }
  }

  render () {
    // contact array from Contacts.js EditForm.props
    var contact = JSON.parse(this.props.userArr);
    return ( 
      <form onSubmit ={this.handleSubmit}
        id = "editForm" className = "form-inline" >
        <table className="table   " id="editTable">
          <tbody>
            <tr className="form-group" id="cont">
              <td  id="col1">
                <input type = "text" ref = "name" id="name"
                  className = "form-control name"
                  defaultValue ={contact.name} required />
              </td>
              <td  id = "col2" >
                <input type = "number" className = "form-control"
                  id = "age" min = "0" max = "99"
                  step = "1" defaultValue ={contact.age}
                /> </td>
              <td  id = "col3" >
                <input type = "text" id = "nickname"
                  className = "form-control"
                  defaultValue ={contact.nickname}
                />  </td>
              <td  id = "col4" >
                <input type = "hidden" className="form-control"
                  id = "u2e"
                  defaultValue ={contact.id}
                />
                <button type = "submit"
                  className = "btn btn-primary" > SAVE
                </button> <button type = "button"
                  onClick ={this.myreset}
                  className = "btn btn-primary" > CANCEL </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  };
};
