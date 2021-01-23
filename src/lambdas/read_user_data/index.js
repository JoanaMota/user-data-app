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
        }
    };

    // GET - Call DynamoDB to read an item from the table
    const result = await dynamoDB.get(param).promise();
    let statusCode = 200;
    if (!Object.keys(result).length) {
        statusCode = 404;
    }
    let response = {
        statusCode: statusCode,
        body: JSON.stringify(result.Item),
    };
    return response;
};