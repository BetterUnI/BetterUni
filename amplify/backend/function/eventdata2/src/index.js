// in index.js - make sure to `yarn add axios`in this directory - you can use `amplify invoke functionname` to test function running
const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const html = await axios.get("https://www.google.com");
  const $ = await cheerio.load(html.statusText);

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};
