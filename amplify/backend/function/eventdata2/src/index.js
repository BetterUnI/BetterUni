/*
If this function does not run ensure that you run 
'npm install cheerio' and 'npm install axios' in
'/betteruni/amplify/backend/function/eventdata2/src/'

To run type: 'amplify mock function eventdata2'
*/
const axios = require("axios");
const cheerio = require("cheerio");

/*
Exports.handler is the main function triggered by a cron job.
This job can be found in the parameters.json file
*/
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  // url to temple events page or page that you are attempting to scrape
  let url = "https://events.temple.edu/calendar-list?js-filter=true";
  // The two lines below only get the first page of events
  let html;
  let htmlPageData;

  try {
    html = await axios.get(url);
    htmlPageData = cheerio.load(html.data);
  } catch (err) {
    console.error("Error accessing " + url, err);
    throw err;
  }

  let eventData = [];
  let lastEventPageNumber = getLastPageNumber(htmlPageData);

  let i = 1;
  /*
    Each iteration of this loop will grab all the event data from
    a single page and push it into the eventData array. It loops
    until the last page which we find getLastPageNumber()
  */
  try {
    do {
      //eslint-disable-next-line no-loop-func
      htmlPageData(".views-row").each((i, elem) => {
        eventData.push({
          title: htmlPageData(elem)
            .find(".views-field")
            .find("a")
            .children("h3")
            .text(),
          link:
            "https://events.temple.edu" +
            htmlPageData(elem)
              .find(".views-field")
              .find("a")
              .attr("href"),
          date: new Date(
            htmlPageData(elem)
              .find(".field--event-date-time")
              .find(".date-display-single")
              .attr("content")
          ),
          dateText: htmlPageData(elem)
            .find(".date-display-single")
            .text(),
          description: htmlPageData(elem)
            .find(".field--event-body")
            .children("p")
            .text()
        });
      });
      /* We use the url and parameters to access new pages
          and load them using cheerio
      */
      try {
        html = await axios.get(url, {
          params: {
            page: i
          }
        });
        htmlPageData = await cheerio.load(html.data);
      } catch (err) {
        console.error("Error accessing" + url, err);
        throw err;
      }
    } while (i++ < lastEventPageNumber);
  } catch (err) {
    console.error("Error in main loop:", err);
    throw err;
  }

  // TODO: add DB code here
  console.log(eventData[0]);

  return {
    statusCode: 200,
    body: JSON.stringify(html.statusText)
  };
};

/*
This function will take the cheerio object and find the 
url of the last event page. This url is then scraped and
returns for the page number of the last page
*/
const getLastPageNumber = htmlPageData => {
  const lastEventPage =
    "https://events.temple.edu" +
    htmlPageData(".pager__item--last")
      .find("a")
      .attr("href");
  let indexOfPageNumber = lastEventPage.indexOf("page=");
  return lastEventPage.substring(indexOfPageNumber + 5, lastEventPage.length);
};
