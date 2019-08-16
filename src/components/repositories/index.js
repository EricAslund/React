import React, { Component } from 'react';
import { Card, Image, Grid, List, Icon } from 'semantic-ui-react';
import './style.css';
import Remove from '../icons/remove.svg';
import Reload from '../icons/reload.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as RepositoryActions } from "../../store/ducks/repositores";


class Repositories extends Component {

    render() {
        return (
            <Grid.Column className="column">
                <Card >
                    <Card.Content>
                        {console.log('card', this.props.repositores)}
                        <div className="empresa">

                            <Image src={this.props.repositores.length !== 0 ? this.props.repositores.owner.avatar_url : null} wrapped ui={true} width="125" height="200" />
                            <Card.Header className='cardHeader'>{this.props.repositores.name}</Card.Header>
                            <Card.Meta className="metaCard">
                                <span className='date'>{this.props.repositores.length !== 0 ? this.props.repositores.owner.login : null}</span>
                            </Card.Meta>
                        </div>
                        <List divided relaxed>
                            <List.Item>

                                <List.Content>
                                    <div className="list___title">
                                        <div className="list___first">
                                            <List.Header >Starts   </List.Header></div>
                                        <span>{this.props.repositores.stargazers_count}</span>
                                    </div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <div className="list___title">
                                        <div className="list___first">
                                            <List.Header>Language </List.Header>
                                        </div>
                                        <span>{this.props.repositores.language}</span>
                                    </div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <div className="list___title">
                                        <div className="list___first">
                                            <List.Header >Forks </List.Header>
                                        </div>
                                        <span>{this.props.repositores.forks_count}</span>
                                    </div>
                                </List.Content>
                            </List.Item>
                        </List>
                        <div className="icons">
                            <a onClick={() => this.props.submitrefresh(this.props.repositores.full_name)}>
                                <img src={Reload} />
                            </a>
                            <a onClick={() => this.props.deleter(this.props.repositores.id)}>
                                <img src={Remove} />
                            </a>
                        </div>
                    </Card.Content>
                </Card>
            </Grid.Column>)
    }
}
const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepositoryActions, dispatch);




export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
