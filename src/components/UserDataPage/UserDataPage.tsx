import React from 'react';
import {
    Header,
    Button,
    Segment,
    Grid,
    Divider,
    Input
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
    getUserDataAPI,
    addUserDataAPI,
    updateUserDataAPI
} from "../../utils/accessData"

// Context
import { useUserContext, IUser } from '../../context/user';

function UserDataPageContent() {
    const { user, setUserData } = useUserContext();

    const [name, setName] = React.useState<string>(" ");
    const [gender, setGender] = React.useState<string>(" ");
    const [amountCars, setAmountCars] = React.useState<number>(0);
    const [annualExpenses, setAnnualExpenses] = React.useState<number>(0);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };
    const onAmountCarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountCars(parseFloat(e.target.value));
    };
    const onAnnualExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnnualExpenses(parseFloat(e.target.value));
    };
    //
    async function getUserData(user: IUser) {
        let userCopy = JSON.parse(JSON.stringify(user));
        userCopy = await getUserDataAPI(user);
        // console.log(userCopy);
        // console.log(userCopy.gender);
        setUserData(userCopy);
    }
    async function updateContextAndUserData() {
        let userCopy = JSON.parse(JSON.stringify(user));
        userCopy.name = name;
        userCopy.gender = gender;
        userCopy.amountCars = amountCars;
        userCopy.annualExpenses = annualExpenses;
        userCopy.userId = 1;
        await updateUserDataAPI(userCopy);
        setUserData(user);
    };
    async function addUserData() {
        let userCopy = JSON.parse(JSON.stringify(user));
        userCopy.name = name;
        userCopy.gender = gender;
        userCopy.amountCars = amountCars;
        userCopy.annualExpenses = annualExpenses;
        await addUserDataAPI(userCopy);
    }
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
                        <Button size="huge" primary onClick={() => getUserData(user)}>
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
                            User Amount of Cars: {user.amountCars}
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses: {user.annualExpenses}
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <p style={{ fontSize: '1.33em' }}>
                            User Name: <Input type='string' value={name} placeholder="Maria" onChange={onNameChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Gender: <Input type='string' value={gender} placeholder="Female" onChange={onGenderChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Amount of Cars: <Input type='number' value={amountCars} placeholder="2" onChange={onAmountCarsChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses: <Input type='number' value={annualExpenses} placeholder="500" onChange={onAnnualExpensesChange} />
                        </p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Button size="huge" primary onClick={() => updateContextAndUserData()}>
                            Update User Data
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <p style={{ fontSize: '1.33em' }}>
                            User Name: <Input type='string' value={name} placeholder="Maria" onChange={onNameChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Gender: <Input type='string' value={gender} placeholder="Female" onChange={onGenderChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Amount of Cars: <Input type='number' value={amountCars} placeholder="2" onChange={onAmountCarsChange} />
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            User Annual Expenses: <Input type='number' value={annualExpenses} placeholder="500" onChange={onAnnualExpensesChange} />
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
