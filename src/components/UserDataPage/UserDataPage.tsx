import React from 'react';
import {
    Header,
    Button,
    Segment,
    Grid,
    Divider
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
    getUserData,
    addUserData,
    updateUserData
} from "../../utils/accessData"

// Context
import { useUserContext } from '../../context/user';

function UserDataPageContent() {
    const { user } = useUserContext();
    return (
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            User Information
                            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Some information from the current user.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider horizontal>
                    <Header as='h4'>
                        Options
                    </Header>
                </Divider>
                <Grid.Row centered columns={2}>
                    <Grid.Column textAlign="center">
                        <Button size="huge" primary onClick={() => getUserData()}>
                            Get User Data
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={{ fontSize: '1.33em' }}>
                            User Name: {user.name}
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Gender: {user.gender}
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Amount of Cars: {user.amoutCars}
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses: {user.annualExpenses}
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <p style={{ fontSize: '1.33em' }}>
                            User Name:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Gender:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Amount of Cars:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses:
                        </p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Button size="huge" primary onClick={() => updateUserData()}>
                            Update User Data
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <p style={{ fontSize: '1.33em' }}>
                            User Name:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Gender:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Amount of Cars:
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses:
                        </p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Button size="huge" primary onClick={() => addUserData()}>
                            Add User Data
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge' as={Link} to="/" >Go to Home Page</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

function UserDataPage() {
    return (
        <div>
            <UserDataPageContent />
        </div>
    );
}

export default UserDataPage;
