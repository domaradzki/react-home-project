import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "John",
        surname: "Doe",
        phone: "123-456-789",
        isFavorite: false
      },
      {
        id: 2,
        name: "Steve",
        surname: "Stevens",
        phone: "987-654-321",
        isFavorite: true
      }
    ],
    name: "",
    surname: "",
    phone: "",
    editing: ""
  };

  addUser = () => {
    this.setState({
      users: this.state.users.concat({
        id: this.state.users[this.state.users.length - 1].id + 1,
        name: this.state.name,
        surname: this.state.surname,
        phone: this.state.phone,
        isFavorite: false
      }),
      name: "",
      surname: "",
      phone: ""
    });
  };

  changeFavorite = e => {
    this.setState({
      users: this.state.users.map(user =>
        user.id !== e ? user : { ...user, isFavorite: !user.isFavorite }
      )
    });
  };

  removeContact = e => {
    this.setState({
      users: this.state.users.filter(contact => contact.id !== e)
    });
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  editingLabel = event => {
    const id = event.target.id;
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      editing:value,
      users: this.state.users.map(user =>
        user.id !== id
          ? user
          : {
            ...user,
            [name]: value,
          }
      ),
    });
  };

  handleKeyUp = event => {
   
    if (event.key === "Enter") {
      event.target.parentElement.classList.toggle("editing");
    }
  };

  toggleClass = event => {
    event.target.parentElement.classList.toggle("editing");
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="surname">Surname</label>
        <input
          name="surname"
          type="text"
          value={this.state.surname}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={() => this.addUser()}>Add user</button>

        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id} className={user.isFavorite ? "Favorite" : ""}>
                <td onDoubleClick={this.toggleClass}>
                  <input
                    id={user.id}
                    name="name"
                    className="edit"
                    type="text"
                    defaultValue={user.name}
                    onChange={this.editingLabel}
                    onKeyUp={this.handleKeyUp}
                  />
                  <label className="view">{user.name}</label>
                </td>
                <td onDoubleClick={this.toggleClass}>
                  <input
                    id={user.id}
                    name="surname"
                    className="edit"
                    type="text"
                    defaultValue={user.surname}
                    onChange={this.editingLabel}
                    onKeyUp={this.handleKeyUp}
                  />
                  <label className="view">{user.surname}</label>
                </td>
                <td onDoubleClick={this.toggleClass}>
                  <input
                    id={user.id}
                    name="phone"
                    className="edit"
                    type="text"
                    defaultValue={user.phone}
                    onChange={this.editingLabel}
                    onKeyUp={this.handleKeyUp}
                  />
                  <label className="view">{user.phone}</label>
                </td>
                <td>
                  <button onClick={() => this.changeFavorite(user.id)}>
                    Toggle favorite
                  </button>
                  <button onClick={() => this.removeContact(user.id)}>
                    Remove contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
