import { Component } from "react";

class AddUser extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 100),
      name: this.userName.value,
      age: this.userAge.value,
      gender: this.userGender.value
    };

    this.props.onSubmit(formData);

    this.userName.value = "";
    this.userAge.value = "";
    this.userGender.value = "";
  };

  render() {
    return (
      <form className="text-left container" onSubmit={this.handleSubmit}>
        <input
          required
          name="userName"
          type="text"
          placeholder="Name"
          className="form-control"
          ref={(name) => (this.userName = name)}
        />
        <br />
        <input
          required
          name="age"
          type="number"
          placeholder="Age"
          className="form-control"
          ref={(age) => (this.userAge = age)}
        />
        <br />
        <input
          required
          name="gender"
          type="text"
          placeholder="Gender"
          className="form-control"
          ref={(gender) => (this.userGender = gender)}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Add User
        </button>
      </form>
    );
  }
}
export default AddUser;
