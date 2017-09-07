import React, { Component, propTypes } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  constructor (props) {
    super(props);
    // contacts array from parent App
    var users = JSON.parse(this.props.data);
    this.state = {data: users, uid: ''};
    // Pre-bind your event handler
    this.handleRemove = this.handleRemove.bind(this);
  };

  // child parent communication to edit user
  EditUser (userid) {
    this.state.uid = userid;
    this.props.CEditButton(userid);
  };

  // function to handle delete of user
  handleRemove (userid) {
    // remove-contact
    var newData = JSON.parse(this.props.data); // copy array
    newData.splice(userid, 1); // remove element
    // console.log('R3' + JSON.stringify(newData)); // confirm data for debuging
    this.setState({
      data: JSON.stringify(newData),
      act: 'remove'
    });
    localStorage.users = JSON.stringify(newData);
    window.location.reload();
  };

  render () {
    var data = JSON.parse(this.props.data);

    function EditbuttonC (props) {
      return (<button className = "btn btn-info"
        id = {props.id}
        onClick = {props.onClick} >EDIT </button>
      );
    };

    function Contactlistbutton (props) {
      return (<button className = "btn btn-danger"
        id = {props.id}
        onClick = {props.onClick} // handleRemove 
      >DELETE </button>
      );
    };
    // rendering the array to dom + binding
    const ContactList = data.map(function (user, idx) {
      return (<tr id = {idx} key = {idx} >
        <td > {user.name} </td>
        <td > {user.age} </td>
        <td > {user.nickname} </td>
        <td id = {idx} >
          <EditbuttonC id = {idx}
            key = {55 + idx}
            onClick = {() => this.EditUser(idx)}
          /> <Contactlistbutton id = {idx}
            key = {idx + 66}
            onClick = {() => this.handleRemove(idx)}
          /> </td ></tr>
      )
    }, this)

    // main rendering to dom
    return (<table className = "table table-bordered table-striped table-responsive" id = "conts" >
      <thead className = "table-default" >
        <tr><th id="col1"> Name </th>
          <th id="col2"> Age </th>
          <th id="col3"> Nickname </th>
          <th id="col4"> Action </th>
        </tr>
      </thead>
      <tbody>{ContactList}</tbody>
    </table>)
  }
}

Contacts.propTypes = {
  data: React.PropTypes.string.isRequired,
  CEditButton: React.PropTypes.func.isRequired
}
