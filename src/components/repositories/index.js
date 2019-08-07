import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';


const Repositories = ({ repositorio }) => (
    <Grid.Column className="column">
        <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={true} avatar />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
             </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
);

export default Repositories;
