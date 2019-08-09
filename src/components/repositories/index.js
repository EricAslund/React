import React, { Component } from 'react';
import { Card, Image, Grid, List, Icon } from 'semantic-ui-react';
import './style.css';

// class Repositories extends Component() {
//     constructor(props) {
//         super(props);
//     }

const Repositories = ({ repositorio, deleter }) => {

    // deleteHandeler = (idD) => {
    //     this.props.deleter(idD);
    // }
    // render() {

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
                        <a>
                            <svg id="Page-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32.75 32.75">
                                <g id="radial_arrows">
                                    <path id="Background-Copy-2" d="M16.375,32.75A16.375,16.375,0,1,0,0,16.375,16.375,16.375,0,0,0,16.375,32.75Z" fill="#aad8b0" fill-rule="evenodd" />
                                    <g id="Combined-Shape" transform="translate(3.521 4.913)">
                                        <path id="Caminho_8" data-name="Caminho 8" d="M44.867,74.738A11.465,11.465,0,0,0,67.2,73.1H64.712a9.009,9.009,0,0,1-17.25,1.638H48.9l-2.948-4.094L43,74.738Zm21.976-6.55a11.465,11.465,0,0,0-22.334,1.638H47a9.009,9.009,0,0,1,17.25-1.638H62.814l2.948,4.094,2.948-4.094Z" transform="translate(-43 -60)" />
                                        <path id="Caminho_9" data-name="Caminho 9" d="M44.867,74.738A11.465,11.465,0,0,0,67.2,73.1H64.712a9.009,9.009,0,0,1-17.25,1.638H48.9l-2.948-4.094L43,74.738Zm21.976-6.55a11.465,11.465,0,0,0-22.334,1.638H47a9.009,9.009,0,0,1,17.25-1.638H62.814l2.948,4.094,2.948-4.094Z" transform="translate(-43 -60)" fill="#697f9b" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a onClick={() => deleter(repositorio.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50.717 50.717">
                                <g id="remove" transform="translate(-1.5 -1.5)">
                                    <g id="Grupo_1" data-name="Grupo 1" transform="translate(20.238 10.945)">
                                        <path id="Caminho_2" data-name="Caminho 2" d="M63.121,30.49H49.385a.594.594,0,0,1-.594-.594V27.912a2.578,2.578,0,0,1,2.575-2.575H61.14a2.578,2.578,0,0,1,2.575,2.575V29.9A.594.594,0,0,1,63.121,30.49ZM49.98,29.3H62.527V27.912a1.388,1.388,0,0,0-1.387-1.387H51.366a1.388,1.388,0,0,0-1.387,1.387Z" transform="translate(-48.791 -25.337)" fill="#ee3e36" />
                                    </g>
                                    <g id="Grupo_2" data-name="Grupo 2" transform="translate(20.247 24.558)">
                                        <path id="Caminho_3" data-name="Caminho 3" d="M49.407,73.831a.594.594,0,0,1-.594-.594V60.287a.594.594,0,0,1,1.189,0V73.236A.6.6,0,0,1,49.407,73.831Z" transform="translate(-48.813 -59.693)" fill="#ee3e36" />
                                    </g>
                                    <g id="Grupo_3" data-name="Grupo 3" transform="translate(27.111 24.558)">
                                        <path id="Caminho_4" data-name="Caminho 4" d="M66.73,73.831a.594.594,0,0,1-.594-.594V60.287a.594.594,0,1,1,1.189,0V73.236A.6.6,0,0,1,66.73,73.831Z" transform="translate(-66.136 -59.693)" fill="#ee3e36" />
                                    </g>
                                    <g id="Grupo_4" data-name="Grupo 4" transform="translate(33.974 24.558)">
                                        <path id="Caminho_5" data-name="Caminho 5" d="M84.052,73.831a.594.594,0,0,1-.594-.594V60.287a.594.594,0,1,1,1.189,0V73.236A.6.6,0,0,1,84.052,73.831Z" transform="translate(-83.458 -59.693)" fill="#ee3e36" />
                                    </g>
                                    <g id="Grupo_5" data-name="Grupo 5" transform="translate(13.428 14.91)">
                                        <path id="Caminho_6" data-name="Caminho 6" d="M57.814,41.365H33.94A2.467,2.467,0,0,1,31.6,38.79v-.871a2.467,2.467,0,0,1,2.335-2.575H57.814a2.467,2.467,0,0,1,2.335,2.575v.871A2.467,2.467,0,0,1,57.814,41.365ZM33.94,36.532a1.285,1.285,0,0,0-1.146,1.387v.871a1.285,1.285,0,0,0,1.146,1.387H57.814A1.285,1.285,0,0,0,58.96,38.79v-.871a1.285,1.285,0,0,0-1.146-1.387Z" transform="translate(-31.605 -35.343)" fill="#313335" />
                                    </g>
                                    <g id="Grupo_6" data-name="Grupo 6" transform="translate(15.806 19.743)">
                                        <path id="Caminho_7" data-name="Caminho 7" d="M59,70.95H40a2.494,2.494,0,0,1-2.4-2.575V48.136a.594.594,0,0,1,.594-.594H60.8a.594.594,0,0,1,.594.594V68.375A2.494,2.494,0,0,1,59,70.95Zm-20.2-22.22V68.375A1.308,1.308,0,0,0,40,69.762H59a1.308,1.308,0,0,0,1.209-1.387V48.731Z" transform="translate(-37.606 -47.542)" fill="#313335" />
                                    </g>
                                    <rect id="_x3C_Slice_x3E__8_" width="50.717" height="50.717" transform="translate(1.5 1.5)" fill="none" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </Card.Content>
            </Card>
        </Grid.Column>)
}





export default Repositories;
