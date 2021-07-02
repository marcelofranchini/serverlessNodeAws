var AWS = require('aws-sdk');
var uuid = require('uuid');
AWS.config.update({ region: 'us-east-1' });
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

exports.lambdaHandler = async (event, context) => {
    let body;

    if (event.httpMethod == 'POST') {
        body = await createEmployee(JSON.parse(event.body));

    }
    if (event.httpMethod == 'GET') {
        body = await getEmployee(event.pathParameters.id);
    }

    if (event.httpMethod == 'PUT') {
        body = await updateEmployee(event.pathParameters.id, JSON.parse(event.body));
    }

    if (event.httpMethod == 'DELETE') {
        body = await deleteEmployee(event.pathParameters.id);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    }
    return response;
};

async function getEmployee(id) {

    var params = {
        TableName: 'Employee',
        Key: { 'id': id }
    };

    let body;

    try {
        const data = await docClient.get(params).promise();

        body = data.Item

    } catch (err) {
        console.log(err);
        body = err;
    }

    return body
}

async function createEmployee(event) {

    var params = {
        TableName: 'Employee',
        Item: {
            'id': uuid.v4(),
            'name': event.name,
            'position': event.position,
            'age': event.age
        }
    };

    let body;

    try {
        const data = await docClient.put(params).promise();
        body = data.Item

    } catch (err) {
        console.log(err);
        body = err;
    }

    return body
}

async function updateEmployee(id, event) {

    var params = {
        TableName: 'Employee',
        Key: { 'id': id },
        UpdateExpression: "set name = :name, position = :position, age = :age",
        ExpressionAttributeValues: {
            ':name': event.name,
            ':position': event.position,
            ':age': event.age
        },
        ReturnValues: "UPDATED_NEW"
    };

    let body;

    try {
        const data = await docClient.update(params).promise();

        body = data.Item

    } catch (err) {
        console.log(err);
        body = err;
    }

    return body
}

async function deleteEmployee(id) {

    var params = {
        TableName: 'Employee',
        Key: { 'id': id }
    };

    let body;

    try {
        const data = await docClient.delete(params).promise();

        body = data.Item

    } catch (err) {
        console.log(err);
        body = err;
    }

    return body
}