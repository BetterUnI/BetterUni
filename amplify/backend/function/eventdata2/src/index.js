// in index.js - make sure to `yarn add axios`in this directory - you can use `amplify invoke functionname` to test function running
const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  var today = new Date();
  let url = "https://events.temple.edu/calendar-list?js-filter=true";
  //ONLY GETS THE FIRST PAGE
  let html = await axios.get(url);
  let $ = cheerio.load(html.data);
  //console.log($.html());
  let eventData = [];
  let pageLink = [];

  const lastPage = $(".pager__item--last")
    .find("a")
    .attr("href");
  console.log(lastPage);

  let i = 1;

  //Get the goods from one of the pages
  try {
    do {
      $(".views-row").each((i, elem) => {
        eventData.push({
          title: $(elem)
            .find(".views-field")
            .find("a")
            .children("h3")
            .text(),
          link:
            "https://events.temple.edu" +
            $(elem)
              .find(".views-field")
              .find("a")
              .attr("href"),
          date: new Date(
            $(elem)
              .find(".field--event-date-time")
              .find(".date-display-single")
              .attr("content")
          ),
          dateText: $(elem)
            .find(".date-display-single")
            .text(),
          description: $(elem)
            .find(".field--event-body")
            .children("p")
            .text()
        });
      });
      html = await axios.get(url, {
        params: {
          page: i++
        }
      });
    } while (i <= 17);
  } catch (err) {
    console.log(err);
  }

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
