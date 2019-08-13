import React, { Component, Fragment } from 'react';
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
            listRepos: [],
            mess: true,
            emptyRepo: true,
        }
    }

    addRepository = async valRepo => {
        try {

            const reponse = await api.get(`/repos/${valRepo}`);

            const { id, name, owner: { login }, owner: { avatar_url }, stargazers_count, language, forks_count, full_name } = reponse.data;

            if (this.state.listRepos.find(e => e.id === reponse.data.id)) {

                this.setState({ mess: !this.state.mess })
                setTimeout(() => {
                    this.setState({ mess: !this.state.mess });
                }, 3000);
                return;
            } else {
                this.setState({
                    listRepos: [...this.state.listRepos, reponse.data]
                });
            }

        } catch (err) {
            this.setState({ emptyRepo: !this.state.emptyRepo })
            setTimeout(() => {
                this.setState({ emptyRepo: !this.state.emptyRepo });
            }, 3000);
        }
    }
    deleter = (idD) => {
        this.setState({
            listRepos: this.state.listRepos.filter(ea => ea.id !== idD)
        });

    }
    refresh = async (nameR) => {
        const reponse = await api.get(`/repos/${nameR}`);
        const { id, name, owner: { login }, owner: { avatar_url }, stargazers_count, language, forks_count, full_name } = reponse.data;
        const newArray = this.state.listRepos.map(e => (e.id === reponse.data.id) ? reponse.data : e)
        this.setState({ listRepos: newArray })
    };


    render() {
        return (
            <Fragment>
                <Add addRepository={this.addRepository} counting={this.state.listRepos.length} messRepided={this.state.mess} emptyRepo={this.state.emptyRepo} />
                <div className="flex-container" >
                    {
                        this.state.listRepos.map(repo => (
                            <Repositorios key={repo.id} repositorio={repo} deleter={this.deleter} refresh={this.refresh} />
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Main;