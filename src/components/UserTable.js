import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import {
  getPerson,
  updatePerson,
  deletePerson,
  addPerson,
  sortPerson
} from "../actions/actions";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user: {},
      order: "ASC"
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    this.props.getPerson();
  }

  handleCreatePerson = (person) => {
    this.props.addPerson(person);
  };

  handleUpdatePerson = (updates) => {
    this.setState({ user: updates });
    this.setState({ show: true });
    console.log(updates);
    this.props.updatePerson(updates);
  };
  handleSortData = (col) => {
    if (this.state.order === "ASC") {
      const sorted = this.props.personDetails.sort((a, b) => {
        if (col === "age") {
          return a[col] - b[col];
        } else {
          return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
        }
      });
      this.props.sortPerson(sorted);
      this.setState({ order: "DSC" });
    }
    if (this.state.order === "DSC") {
      const sorted = this.props.personDetails.sort((a, b) => {
        if (col === "age") {
          return b[col] - a[col];
        } else {
          return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
        }
      });
      this.props.sortPerson(sorted);
      this.setState({ order: "ASC" });
    }
  };
  handleDeletePerson = (id) => {
    this.props.deletePerson(id);
  };
  render() {
    // const { personDetails } = this.props;
    // console.log(personDetails);
    return (
      <>
        <h1>User Details</h1>
        <AddUser onSubmit={this.handleCreatePerson} />
        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th onClick={() => this.handleSortData("name")}>Name</th>
              <th onClick={() => this.handleSortData("age")}>Age</th>
              <th onClick={() => this.handleSortData("gender")}>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personDetails?.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => this.handleUpdatePerson(person)}
                    >
                      {" "}
                      Edit{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDeletePerson(person.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>EDIT USER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditUser
                onSubmit={this.handleUpdatePerson}
                person={this.state.user}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  personDetails: state.tableReducer.personDetails
});

const mapDispatchToProps = {
  getPerson,
  addPerson,
  deletePerson,
  updatePerson,
  sortPerson
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
