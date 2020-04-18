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

  eventData.forEach(element => {
    const description = async () => {
      const eventPage = await axios.get(
        "https://events.temple.edu" + element.link
      );
      const $$ = await cheerio.load(eventPage.data);
      return $$(".l-content-inner")
        .children("p")
        .text();
    };
    element.description = description();
  });

  /* If today - eventDate < 0 then that means the event 
    is in the future therefore add it to DB
  */
  //TODO: add DB code here

  console.log(eventData);

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};
