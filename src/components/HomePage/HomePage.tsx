import React from 'react';
import {
    Header,
    Button,
    Segment,
    Grid,
    Image,
    Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderHomePage from '../../elements/Header';
import imageHomePage from "../../images/youCan.gif"

function HomePageContent() {
    return (
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            We Can Help
                            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            No I can't, I am still learning and this is a huge world and I have a lot to learn still...
                            </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            We Make Bananas That Can Dance
                            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                            </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src={imageHomePage} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Button primary size='huge' as={Link} to="/userdata" >
                        Get Started on DynamoDB requests
                        <Icon name='arrow right' />
                    </Button>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

function HomePage() {
    return (
        <div>
            <HeaderHomePage />
            <HomePageContent />
        </div>
    );
}

export default HomePage;
