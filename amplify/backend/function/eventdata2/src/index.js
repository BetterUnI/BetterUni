// in index.js - make sure to `yarn add axios`in this directory - you can use `amplify invoke functionname` to test function running
const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  var today = new Date();

  const html = await axios.get(
    "https://events.temple.edu/calendar-grid?js-filter=true"
  );
  const $ = cheerio.load(html.data);
  //console.log($.html());
  let eventData = [];

  $(".fullcalendar-event").each((i, elem) => {
    if (i <= 3) {
      eventData.push({
        title: $(elem)
          .children("h3")
          .text(),
        link:
          "https://events.temple.edu" +
          $(elem)
            .find(".fullcalendar-instance a")
            .attr("href"),
        date: new Date(
          $(elem)
            .find(".date-display-single")
            .attr("content")
        ),
        dateText: $(elem)
          .find(".date-display-single")
          .text(),
        description: ""
      });
    }
  });

  // try {
  //   eventData.forEach(async element => {
  //     console.log("ELEMENT.LINK: " + element.link + "\n");
  //     const eventpage = await axios.get(element.link);
  //     console.log("EVENT PAGE: " + eventpage + "\n");
  //     const $$ = cheerio.load(eventpage.data);
  //     console.log($$.html);

  //     element.description = $$(".field--event-body")
  //       .children("p")
  //       .text();
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  /* If today - eventDate < 0 then that means the event 
    is in the future therefore add it to DB
  */
  //TODO: add DB code here

  //sconsole.log(eventData);

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};
