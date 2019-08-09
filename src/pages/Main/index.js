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
            deleter: '',
            input: '',
            listRepos: []
        }
    }

    addRepository = async valRepo => {
        try {

            const reponse = await api.get(`/repos/${valRepo}`);

            const { id, name, owner: { login }, owner: { avatar_url }, stargazers_count, language, forks_count } = reponse.data;

            if (this.state.listRepos.find(e => e.id === reponse.data.id)) {
                alert("já tem esse repositorio");
                return;
            } else {
                this.setState({
                    listRepos: [...this.state.listRepos, reponse.data]
                });
            }

        } catch (err) {

        }
    }
    deleter = (idD) => {
        console.log(idD);
        this.setState({
            listRepos: this.state.listRepos.filter(ea => ea.id != idD)
        });

    }

    render() {
        return (
            <Fragment>
                <Add addRepository={this.addRepository} counting={this.state.listRepos.length} />
                <div className="flex-container" >
                    {
                        this.state.listRepos.map(repo => (
                            <Repositorios key={repo.id} repositorio={repo} deleter={this.deleter} />
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Main;