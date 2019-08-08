import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import api from '../../api';
import Add from '../..//components/addRepositories';
import Repositorios from '../../components/repositories';
import './style.css';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: '',
            listRepos: []
        }
    }

    addRepository = async valRepo => {
        try {
            const reponse = await api.get(`/repos/${valRepo}`);

            const { id, name, owner: { login }, owner: { avatar_url }, stargazers_count, language, forks_count } = reponse.data;


            this.setState({
                listRepos: [...this.state.listRepos, reponse.data]
            });
        } catch (err) {
            alert('O repositorio não existe!');
        }


    }

    render() {
        return (
            <Fragment>
                <Add addRepository={this.addRepository} />
                <div className="flex-container" >
                    {
                        this.state.listRepos.map(repo => (
                            <Repositorios key={repo.id} repositorio={repo} />
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Main;