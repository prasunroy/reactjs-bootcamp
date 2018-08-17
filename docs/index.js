class App extends React.Component {
  state = {
    name: "React"
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="app-style">
          <p>Hello {this.state.name}</p>
        </div>
        <div className="input-style">
          <p>What is your name?</p>
          <input className="input-field" onChange={this.handleChange}></input>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
