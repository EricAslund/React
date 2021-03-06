import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import './style.css';
import { Creators as RepositoryActions } from "../../store/ducks/repositores";
import { connect } from 'react-redux';

// import { Container } from './styles';

class addRepositories extends Component {
    state = {
        input: '',
        shown: true,

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.clearRepositor();
        if (this.state.input.length === 0) {
            this.setState({ shown: !this.state.shown })
            setTimeout(() => {
                this.setState({ shown: !this.state.shown });
            }, 3000);
            return;
        } else {

            this.props.submitRepositor(this.state.input);
        }
    }



    render() {

        const { shown } = this.state;

        return (
            <div className='Add'>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group widths="equal">
                        <div className="field">
                            <p className="pMassage"><strong>
                                {console.log('input', this.props.state)}
                                {!shown ?
                                    <span className="inputNull">&nbsp;&nbsp;&nbsp; Por favor digite um repositorio &nbsp;&nbsp;&nbsp; </span>
                                    : null}
                                {!this.props.state.repositores.emptyRepo ?
                                    <span className="inputNull">&nbsp;&nbsp;&nbsp; O repositorio não existe &nbsp;&nbsp;&nbsp;</span>
                                    : null}
                                {!this.props.state.repositores.mess ?
                                    <span className="inputNull" >&nbsp;&nbsp;&nbsp; já tem esse repositório &nbsp;&nbsp;&nbsp;</span >
                                    : null}
                            </strong></p>
                            <div className="box___title">
                                <div className="title___first">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 53.304 52">
                                        <g id="logo" transform="translate(0 -5.365)">
                                            <path id="Caminho_1" data-name="Caminho 1" d="M49.729,18.639a26.536,26.536,0,0,0-9.7-9.7A26.068,26.068,0,0,0,26.652,5.365,26.071,26.071,0,0,0,13.274,8.939a26.533,26.533,0,0,0-9.7,9.7A26.07,26.07,0,0,0,0,32.016,25.9,25.9,0,0,0,5.084,47.684a26.1,26.1,0,0,0,13.135,9.63,1.553,1.553,0,0,0,1.388-.243,1.357,1.357,0,0,0,.451-1.041q0-.1-.018-1.874t-.017-3.088l-.8.138a10.182,10.182,0,0,1-1.926.122,14.674,14.674,0,0,1-2.412-.243,5.389,5.389,0,0,1-2.325-1.04,4.4,4.4,0,0,1-1.527-2.134l-.347-.8a8.671,8.671,0,0,0-1.093-1.77,4.188,4.188,0,0,0-1.509-1.319l-.243-.174a2.547,2.547,0,0,1-.451-.417,1.9,1.9,0,0,1-.312-.486q-.1-.243.173-.4a2.251,2.251,0,0,1,1.006-.155l.694.1a5.066,5.066,0,0,1,1.718.833,5.6,5.6,0,0,1,1.683,1.8A6.117,6.117,0,0,0,14.28,47.3a4.086,4.086,0,0,0,2.273.746,9.868,9.868,0,0,0,1.978-.173,6.9,6.9,0,0,0,1.562-.521,5.623,5.623,0,0,1,1.7-3.575,23.762,23.762,0,0,1-3.557-.625A14.163,14.163,0,0,1,14.974,41.8a9.342,9.342,0,0,1-2.794-2.325,11.173,11.173,0,0,1-1.822-3.644,17.328,17.328,0,0,1-.711-5.205,10.122,10.122,0,0,1,2.742-7.149,9.329,9.329,0,0,1,.243-7.079,4.863,4.863,0,0,1,2.984.468,20.865,20.865,0,0,1,2.9,1.336q.92.554,1.475.937a25.062,25.062,0,0,1,13.327,0l1.319-.832a18.676,18.676,0,0,1,3.192-1.527,4.548,4.548,0,0,1,2.812-.381,9.239,9.239,0,0,1,.277,7.079,10.124,10.124,0,0,1,2.742,7.149,17.521,17.521,0,0,1-.711,5.222,10.739,10.739,0,0,1-1.838,3.644A9.7,9.7,0,0,1,38.3,41.8a14.189,14.189,0,0,1-3.262,1.354,23.737,23.737,0,0,1-3.557.625q1.8,1.561,1.8,4.927V56.03a1.382,1.382,0,0,0,.434,1.041,1.507,1.507,0,0,0,1.371.242,26.1,26.1,0,0,0,13.135-9.63A25.906,25.906,0,0,0,53.3,32.015,26.091,26.091,0,0,0,49.729,18.639Z" />
                                        </g>
                                    </svg>
                                    <label>Repositórios</label><br />
                                </div>
                                <span className="counter"><strong>{this.props.state.repositores.listRepos.length}</strong> </span>
                            </div>
                            <div className="box__input">
                                <input type="text" placeholder="facebook/react" name="Nome" onChange={evento => this.setState({ input: evento.target.value })} />
                                <Button type='submit' >Add</Button>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepositoryActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(addRepositories);
