import React from 'react';
import axios from 'axios';

export default class Inverse extends React.Component {
  state = {
    name: '',
    persons: []
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    console.log(user);

    const brand = user["name"];
    await axios.get(`http://127.0.0.1:5000/invm/` + brand, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }})
      .then(res => {
        const persons = res.data.matrix;
        console.log(persons);
        this.setState({ persons: persons });;
      })
  }

  render() {
    return (// in <ul> this code: <div> {this.state.persons.toString()}</div>
      <ul>
        

        <form onSubmit={this.handleSubmit}>
          <label>
            Inverse of the matrix
          </label>
          <br/>
          <textarea type="text" name="name" onChange={this.handleChange} />
          <button type="submit">Solution</button>
          <p>Your results will appear just below:</p>
        </form>

        {
          
          this.state.persons
            .map((person) =>
              (<li>{person + ","}</li>
            ))
        }
      </ul>
    )
  }
}