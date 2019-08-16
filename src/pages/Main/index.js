import React, { Component, Fragment } from 'react';
import Add from '../..//components/addRepositories';
import Repositorios from '../../components/repositories';
import './style.css';
import { connect } from "react-redux";



class Main extends Component {

    render() {
        return (
            <Fragment>
                <Add />

                <div className="flex-container" >
                    {
                        this.props.repositories.map(repo => (
                            <Repositorios key={repo.id} repositores={repo} />))
                    }
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    repositories: state.repositores.listRepos
});

export default connect(mapStateToProps)(Main);