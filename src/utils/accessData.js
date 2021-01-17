import { API } from 'aws-amplify';

export async function getNameHandler() {

    const response = await API.get('getNameAPI', '/name');
    alert(JSON.stringify(response));
}

export async function getMusicHandler() {

    const response = await API.get('MusicsAPI', '/getmusic');
    alert(JSON.stringify(response));
}

export async function getUserData() {
    const apiName = 'AccessUserDataAPI';
    const path = '/get-user-data';
    const myInit = {
        'queryStringParameters': {
            "userID": "1",
            "name": "Joana Mota"
        },
    };

    const response = await API.get(apiName, path, myInit);
    alert(JSON.stringify(response));
}

export async function addUserData() {
    const apiName = 'AccessUserDataAPI';
    const path = '/add-user-data';
    const myInit = {
        body: {
            "amountCars": 1,
            "userID": "11",
            "gender": "Female",
            "annualExpenses": 500,
            "carIndex": 1,
            "name": "Xaroca"
        },
    };
    const response = await API.put(apiName, path, myInit);
    alert(JSON.stringify(response));
}
export async function updateUserData() {
    const apiName = 'AccessUserDataAPI';
    const path = '/update-user-data';
    const myInit = {
        body: {
            "userID": "1",
            "name": "Joana Mota",
            "amountCars": 8,
            "annualExpenses": 555
        },
    };
    const response = await API.post(apiName, path, myInit);
    alert(JSON.stringify(response));
}