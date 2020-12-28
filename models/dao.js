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

function seedTargets(req,res) {
    console.log("Loading high priority targets...");
    var params = {
        TableName:table,
        Item:{
            "pk": "target:HIGH",
            "sk": "CONNER:JOHN",
            "dob": "1985-02-28",
            "bio":"Leader of Skynet resistance. Primary obstacle to Judgement Day.",
            "associates": "Mother - Sarah Conner, Father - Unknown, Rogue T-800"
        }
    };
    
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.json({
                message: `Targets loaded: `,
                data
            })
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

exports.getTargets = getTargets;
exports.seedTargets = seedTargets;
