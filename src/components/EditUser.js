import { Component } from "react";

class EditUser extends Component {
  state = {
    name: this.props.person.name,
    age: this.props.person.age,
    gender: this.props.person.gender
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      id: this.props.person.id
    });
    this.setState({
      name: "",
      age: "",
      gender: ""
    });
  };
  render() {
    return (
      <form className="text-left container" onSubmit={this.handleSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          className="form-control"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <input
          required
          name="age"
          type="number"
          placeholder="Age"
          value={this.state.age}
          className="form-control"
          onChange={(event) => this.setState({ age: event.target.value })}
        />
        <br />
        <input
          required
          name="gender"
          type="text"
          placeholder="Gender"
          value={this.state.gender}
          className="form-control"
          onChange={(event) => this.setState({ gender: event.target.value })}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Save Changes
        </button>
      </form>
    );
  }
}

export default EditUser;
