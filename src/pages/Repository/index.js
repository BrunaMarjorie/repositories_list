import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import withRouter from "../../withRouter";
import api from "../../services/api";
import { Loading, Owner, IssuesList, IssuesFilter, PageActions } from "./styles";
import Container from "../../components/Container";


class Repository extends Component {
    static propTypes = {
        params: PropTypes.shape({
            repository: PropTypes.string,
        }).isRequired,
    }

    state = {
        repository: {},
        issues: [],
        loading: true,
        filters: [
            { state: "all", active: true },
            { state: "open", active: false },
            { state: "closed", active: false }
        ],
        filterIndex: 0,
        page: 1,
    };

    async componentDidMount() {
        const repName = this.props.params.repository;
        const { filters } = this.state;
        
        const [repository, issues] = await Promise.all([
            api.get(`repos/${repName}`),
            api.get(`repos/${repName}/issues`, {
                params: {
                    state: filters.find(f => f.active).state,
                    per_page: 6,
                }
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });
    
    }

    loadIssues = async () => {
        const { repository, filters, page } = this.state;
        
        const issues = await api.get(`repos/${repository.full_name}/issues`, {
            params: {
                state: filters.find(f => f.active).state,
                per_page: 6,
                page,
            }
        });

        this.setState({
            issues: issues.data,
        });
    }

    handleFilter = async (index) => {
        const filters = [...this.state.filters];
        filters[this.state.filterIndex].active = false;
        filters[index].active = true;
        await this.setState({ filterIndex: index, filters: filters });
        await this.loadIssues()
    }

    handlePageChange = async action => {
        const { page } = this.state;
        await this.setState({ page: action === 'back' ?  page - 1 : page + 1 });
        await this.loadIssues();
    }

    render() {
        const { repository, issues, loading, filters, filterIndex, page } = this.state;

        if(loading) {
            return <Loading>Loading</Loading>
        }
        return (
        <Container>
            <Owner>
                <Link to="/">Go Back</Link>
                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
            </Owner>

            <IssuesList>
                <IssuesFilter active={filterIndex}>
                    {filters.map((filter, index) => (
                        <button key={filter.state} onClick={() => this.handleFilter(index)}>{filter.state}</button>
                    ))}
                </IssuesFilter>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login}/>
                        <div>
                            <strong>
                                <a href={issue.html_url}>{issue.title}</a>
                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssuesList>

            <PageActions>
                <button type="button" disabled={page < 2} onClick={() => this.handlePageChange("back")}>
                    <FaArrowLeft color="#FFF" size={14}/>
                </button>
                <span>{page}</span>
                <button type="button" onClick={() => this.handlePageChange("next")}>
                    <FaArrowRight color="#FFF" size={14}/>
                </button>
            </PageActions>
        </Container>)
        
    }
   
}

export default withRouter(Repository);
