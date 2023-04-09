import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { Form, SubmitButton, List, ErrorAlert, DeleteButton } from "./styles";
import Container from "../../components/Container";

export default class Main extends Component {
  state = {
    newRep: "",
    repositories: [],
    load: false,
    error: false,
    eMessage: "",
  };

  componentDidMount() {
    const repositories = localStorage.getItem("repositories");

    if (repositories) this.setState({ repositories: JSON.parse(repositories) });
  }

    componentDidUpdate(_, prevState) {
      if (prevState.repositories !== this.state.repositories) {
        localStorage.setItem(
          "repositories",
          JSON.stringify(this.state.repositories)
        );
      }
    }

  handleInputChange = (e) => {
    this.setState({ newRep: e.target.value, error: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ load: true });

    const { newRep, repositories } = this.state;

    try {
      if (newRep === "") throw Error("Please enter a valid repository");

      const hasRep = repositories.find((rep) => rep.name === newRep);
      if (hasRep) throw Error("Repository is a duplicate.");

      const response = await api.get(`repos/${newRep}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRep: "",
        load: false,
      });
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST")
        error.message = "Repository not found.";
      this.setState({ error: true, eMessage: error.message });
    } finally {
      this.setState({ load: false });
    }
  };

  handleDeleteButton = (repository) => {
    const resp = window.confirm("Are you sure you want to delete this repository?");
    if (resp) this.setState({repositories: this.state.repositories.filter(rep => rep.name !== repository)});
  }

  render() {
    const { newRep, repositories, load, error, eMessage } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Add repository"
            onChange={this.handleInputChange}
            value={newRep}
          />

          <SubmitButton load={load}>
            {load ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <ErrorAlert>{error ? eMessage : ""}</ErrorAlert>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <div>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Details
                </Link>
                <DeleteButton onClick={() => this.handleDeleteButton(repository.name)}>
                  <FaTrashAlt color="#FF9494" size={14} />
                </DeleteButton>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
