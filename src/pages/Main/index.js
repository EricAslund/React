import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import api from '../../api';
import Add from '../..//components/addRepositories';
import Repositorios from '../../components/repositories';


class Main extends Component {

    state = {
        listRepos: [{
            id: 1,
            nome: "lucas"
        },
        {
            id: 2,
            nome: "lucas"
        }]
    }

    async addRepository(event) {
        event.preventDefault();
        console.log(event);
        const repoInput = event.value;

        if (repoInput === null)
            return;
        console.log(this.state.listRepos)
        this.setState({ listRepos: [...this.state.listRepos] })
    }

    render() {
        return (
            <Fragment>
                <Add find={this.addRepository} />
                <Grid columns={6} divided>
                    {
                        this.state.listRepos.map(repo => (
                            <Repositorios key={repo.id} repositorio={repo} />
                        ))
                    }
                </Grid>
            </Fragment>
        );
    }
}

export default Main;