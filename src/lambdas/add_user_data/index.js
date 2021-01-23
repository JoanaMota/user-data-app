// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'eu-west-2' });

// Create the DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    let param = {
        TableName: "Users",
        Item: {
            "amountCars": event["amountCars"],
            "userId": event["userId"],
            "gender": event["gender"],
            "annualExpenses": event["annualExpenses"],
            "carIndex": event["carIndex"],
            "name": event["name"]
        }
    };

    // PUT - Call DynamoDB to add an item to the table
    await dynamoDB.put(param).promise();
    const response = {
        statusCode: 200,
        body: "Item added to the table"
    };
    return response;
};