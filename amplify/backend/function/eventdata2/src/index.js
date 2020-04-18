// in index.js - make sure to `yarn add axios`in this directory - you can use `amplify invoke functionname` to test function running
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const html = await axios.get(
    "https://events.temple.edu/calendar-grid?js-filter=true"
  );
  const $ = cheerio.load(html.data);
  //console.log($.html());
  let eventLinks = [];

  $(".fullcalendar-event").each((i, elem) => {
    if (i <= 5) {
      eventLinks.push({
        // title: $(elem)
        //   .children("h3")
        //   .text(),
        link: $(elem) //gets link
          .find(".fullcalendar-instance a")
          .attr("href")
      });
    }
  });

  const singleEvent = await axios.get(
    "https://events.temple.edu" + eventLinks[0].link
  );
  const a = cheerio.load(singleEvent.data);
  console.log(a.html());
  //eventLinks.forEach();
  const title = a(".l-content-inner")
    .children("h1")
    .text();
  const date = a(".field--event-body")
    .children("p")
    .next()
    .text();
  const description = a(".field--event-body")
    .children("p")
    .text();

  console.log("TITLE: " + title);
  console.log("DATE" + date);

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};
