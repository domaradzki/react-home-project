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
    name:'',
    surname:'',
    phone:''
  };

  changeFavorite = e => {
    this.setState({
      users: this.state.users.map(user =>
        user.id !== e ? user : { ...user, isFavorite: !user.isFavorite }
      )
    });
  };
  handleInputChange = (event) => {
    const value =  event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}/><br/>
          <label htmlFor="surname">Surname</label>
          <input name="surname" type="text" value={this.state.surname} onChange={this.handleInputChange}/><br/>
          <label htmlFor="phone">Phone</label>
          <input name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange}/><br />
          <button>Add user</button>
        </form>
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
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => this.changeFavorite(user.id)}>
                    Toggle favorite
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
