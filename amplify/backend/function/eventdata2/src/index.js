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

  const lastPage =
    "https://events.temple.edu" +
    $(".pager__item--last")
      .find("a")
      .attr("href");
  let indexOfPageNum = lastPage.indexOf("page=");
  let lastPageNum = lastPage.substring(indexOfPageNum + 5, lastPage.length);

  let i = 1;
  try {
    do {
      //Get the goods from one of the pages
      //eslint-disable-next-line no-loop-func
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
      try {
        html = await axios.get(url, {
          params: {
            page: i
          }
        });
        $ = await cheerio.load(html.data);
      } catch (err) {
        alert(err);
      }
    } while (i++ < lastPageNum);
  } catch (err) {
    alert(err);
  }

  /* If today - eventDate < 0 then that means the event 
    is in the future therefore add it to DB
  */
  //TODO: add DB code here

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};
