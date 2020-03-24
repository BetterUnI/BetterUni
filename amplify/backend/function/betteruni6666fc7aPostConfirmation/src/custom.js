const aws = require("aws-sdk");
const docClient = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });

console.log("starting post confirmation function");
exports.handler = (event, context, callback) => {
  console.log("the postConfirmation user event request: ", event.request);
  let params = {};
  if (event.request.userAttributes.email && event.request.userAttributes.sub) {
    const userParsedSub = parseInt(event.request.userAttributes.sub);
    const userUniqueId = userParsedSub * Math.floor(Math.random() * 100000 + 1);
    params = {
      Item: {
        User_ID: userUniqueId,
        email: event.request.userAttributes.email
      },
      TableName: "Users-dillon" // this value would stay hard coded, we can change it to the Users-master table when ready for deploy
    };
  }

  docClient.put(params, function(err, data) {
    if (err) {
      context.done(err);
    } else {
      console.log("saved user to dynamo db on post confirmation", data);
      context.done(null, event);
    }
  });
};
