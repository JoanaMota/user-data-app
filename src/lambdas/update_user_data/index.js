// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'eu-west-2' });

// Create the DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    // Read Event Params from Query String
    let param = {
        TableName: 'Users',
        Key: {
            'userId': event["userId"],
            'name': event["name"]
        },
        UpdateExpression: "set amountCars = :c, annualExpenses=:e",
        ExpressionAttributeValues: {
            ":c": event["amountCars"],
            ":e": event["annualExpenses"]
        },
        ReturnValues: "UPDATED_NEW"
    };

    // POST - Call DynamoDB to update an item from the table
    await dynamoDB.update(param).promise();
    const response = {
        statusCode: 200,
        body: "Item updated"
    };
    return response;
};
