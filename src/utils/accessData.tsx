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
    let userCopy = {} as IUser;
    alert(response.body);
    userCopy = JSON.parse(response.body);
    return userCopy;
}

export async function addUserDataAPI(user: IUser) {
    const apiName = 'AccessUserDataAPI';
    const path = '/add-user-data';
    const myInit = {
        body: {
            "amountCars": user.amountCars,
            "userId": "100",
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
            "userId": user.userId,
            "name": user.name,
            "amountCars": user.amountCars,
            "annualExpenses": user.annualExpenses
        },
    };
    const response = await API.post(apiName, path, myInit);
    alert(JSON.stringify(response));
}