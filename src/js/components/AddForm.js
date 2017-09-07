import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddForm extends React.Component {  
  constructor (props) {
    super(props);  

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    // render to dom   className="center-block"
    return (
      <form onSubmit={this.handleSubmit} id="editForm" className="form-inline">
        <table className="table   " id="editTable">
          <tbody >
            <tr id="cont">
              <td className="form-group" id="col1">
                <input type="text" ref="name" className="form-control"
                  placeholder="Enter Name*" required/>
              </td>
              <td className="form-group" id="col2">
                <input type="number" className="form-control" ref="age"
                  min="0" max="99" step="1" defaultvalue="22"/>
              </td>
              <td className="form-group" id="col3">
                <input type="text" ref="nickname"
                  className="form-control" placeholder="Enter Nickaname" />
              </td>
            </tr>
            <tr id="cont">
              <td className="form-group" colSpan="4" id="col1">
                <button type="submit" className="btn btn-primary"> Add </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  };

  handleSubmit (e) {
    e.preventDefault()
    var contact = {
      name: this.refs.name.value.trim(),
      age: this.refs.age.value.trim(),
      nickname: this.refs.nickname.value.trim()
    }

    if (contact.name === '') {
      alert('please enter name') 
    } else {
      var contacts = JSON.parse(localStorage.users);
      var cl = contacts.length;
      contact.id = String(cl);
      // pushing the new user to end of contacts array and injecting the user id
      contacts.push(contact);
      this.setState({data : JSON.stringify(contacts)});
      localStorage.users = JSON.stringify(contacts);
      window.location.reload();
      document.getElementById('editForm').reset();
    }
  }
}
