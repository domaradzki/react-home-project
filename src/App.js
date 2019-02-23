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
    ]
  };
  render() {
    return (
      <div className="App">
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
              <tr key={user.id} className={user.isFavorite && "Favorite"}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.phone}</td>
                <td><button>Toggle favorite</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
