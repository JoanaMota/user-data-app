import { API } from 'aws-amplify';

// Context
import { IUser } from '../context/user';

export async function getUserDataAPI(user: IUser): Promise<IUser> {
    const apiName = 'AccessUserDataAPI';
    const path = '/get-user-data';
    const myInit = {
        'queryStringParameters': {
            "userId": "1",
            "name": "Joana"
        },
    };
    const response = await API.get(apiName, path, myInit);
    alert(JSON.stringify(response));
    console.log(response);
    // let userCopy = JSON.parse(JSON.stringify(user));
    // userCopy = response;
    // // userCopy.name = response.body.Name;
    // // userCopy.gender = response.body.Gender;
    // // userCopy.amountCars = response.body.AmountCars;
    // // userCopy.annualExpenses = response.body.AnnualExpenses;
    // console.log(userCopy);
    return response.body;
}

export async function addUserDataAPI(user: IUser) {
    const apiName = 'AccessUserDataAPI';
    const path = '/add-user-data';
    const myInit = {
        body: {
            "amountCars": user.amountCars,
            "userId": "1001",
            "gender": user.gender,
            "annualExpenses": user.annualExpenses,
            "carIndex": 1,
            "name": user.name
        },
    };
    const response = await API.put(apiName, path, myInit);
    alert(JSON.stringify(response));
}
export async function updateUserDataAPI(user: IUser) {
    const apiName = 'AccessUserDataAPI';
    const path = '/update-user-data';
    const myInit = {
        body: {
            "userId": user.userId?.toString(),
            "name": user.name,
            "amountCars": user.amountCars,
            "annualExpenses": user.annualExpenses
        },
    };
    const response = await API.post(apiName, path, myInit);
    alert(JSON.stringify(response));
}