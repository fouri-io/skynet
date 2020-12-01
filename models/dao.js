var AWS = require("aws-sdk");


AWS.config.update({
  region: "us-east-1",
  //endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();
var table = "skynet";

function getTargets(req,res) {
    console.log("Seeking high priority targets...");
    var params = {
        TableName: table,
        KeyConditionExpression: "#pk = :key",
        ExpressionAttributeNames: {
            "#pk": "pk",
        },
        ExpressionAttributeValues: {
            ":key": "target:HIGH"
        }
    };
    
    docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.json({
                message: `Targets retrieved: `,
                data
            })
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

exports.getTargets = getTargets;
