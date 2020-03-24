const awsServerlessExpress = require("./node_modules/aws-serverless-express");
const app = require("./app");
const axios = require("axios");

const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  awsServerlessExpress.proxy(server, event, context);

  const html = await axios.get(
    "https://bulletin.temple.edu/undergraduate/science-technology/computer-information-science/computer-science-bs/#academicplantext"
  );

  console.log(html.data);
};
