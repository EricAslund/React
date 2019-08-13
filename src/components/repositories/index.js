import React from 'react';
import { Card, Image, Grid, List, Icon } from 'semantic-ui-react';
import './style.css';
import Remove from '../icons/remove.svg';
import Reload from '../icons/reload.svg';


const Repositories = ({ repositorio, deleter, refresh }) => {

    return (
        <Grid.Column className="column">
            <Card >
                <Card.Content>
                    <div className="empresa">
                        <Image src={repositorio.owner.avatar_url} wrapped ui={true} width="125" height="200" />
                        <Card.Header className='cardHeader'>{repositorio.name}</Card.Header>
                        <Card.Meta className="metaCard">
                            <span className='date'>{repositorio.owner.login}</span>
                        </Card.Meta>
                    </div>
                    <List divided relaxed>
                        <List.Item>

                            <List.Content>
                                <div className="list___title">
                                    <div className="list___first">
                                        <List.Header >Starts   </List.Header></div>
                                    <span>{repositorio.stargazers_count}</span>
                                </div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <div className="list___title">
                                    <div className="list___first">
                                        <List.Header>Language </List.Header>
                                    </div>
                                    <span>{repositorio.language}</span>
                                </div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <div className="list___title">
                                    <div className="list___first">
                                        <List.Header >Forks </List.Header>
                                    </div>
                                    <span>{repositorio.forks_count}</span>
                                </div>
                            </List.Content>
                        </List.Item>
                    </List>
                    <div className="icons">
                        <a onClick={() => refresh(repositorio.full_name)}>
                            <img src={Reload} />
                        </a>
                        <a onClick={() => deleter(repositorio.id)}>
                            <img src={Remove} />
                        </a>
                    </div>
                </Card.Content>
            </Card>
        </Grid.Column>)
}





export default Repositories;
