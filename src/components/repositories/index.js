import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './style.css';

// import { Container } from './styles';

const repositories = () => (
    <div className="card">
        <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

        />
    </div>
);

export default repositories;
