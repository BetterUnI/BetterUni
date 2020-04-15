// in index.js - make sure to `yarn add axios`in this directory - you can use `amplify invoke functionname` to test function running
const awsServerlessExpress = require("./node_modules/aws-serverless-express");
const app = require("./app");
const axios = require("axios");
const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  awsServerlessExpress.proxy(server, event, context);
  const html = await axios.get("https://events.temple.edu/");

  return html.statusText;
};
