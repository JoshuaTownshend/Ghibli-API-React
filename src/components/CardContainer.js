import React from "react"
import Header from "./Header"
import CardContent from "./CardContent"
import axios from "axios";
import CardSelect from "./CardSelect"

class CardContainer extends React.Component {
  state = {
    display: [],
    data: []
  };

  componentDidMount = (e) => {
    axios.get("https://ghibliapi.herokuapp.com/films").then((response) =>
      this.setState({
        data: response.data,
        display: response.data[Math.floor(Math.random() * response.data.length)]
      })
    );
  };

  handleChange = (e) => {
    axios.get("https://ghibliapi.herokuapp.com/films")
      .then(response => this.setState({
        display: response.data[Math.floor(Math.random() * response.data.length)]
      }))
  }

  handleSelect = () => {
    const dropdown = document.getElementById('dropdown');
    let movieVal = (dropdown.selectedIndex);
    axios.get("https://ghibliapi.herokuapp.com/films").then((response) =>
    this.setState({
      display: response.data[movieVal]
    })
  );
    }

  render() {
    return (
      <div className="container">
        <Header />
        <CardSelect movieData={this.state.data} handleSelectProp={this.handleSelect} />
        <CardContent movieData={this.state.display} />
        <button onClick={this.handleChange}>Random Movie</button>
        <p>This page uses the <a href="https://ghibliapi.herokuapp.com/">Ghibli API</a></p>
      </div>
    )
  }
}

export default CardContainer