import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { API, graphqlOperation } from "aws-amplify";
import { makeStyles } from "@material-ui/styles";
import Modal from "react-modal";
import { listAdvisingCategorys as ListAdvisingCategories } from "../../graphql/queries";
import { listAdvisingCategorys as ListAdvisingCategoriesAdvisors } from "../../graphql/queries";
import AdvisorList from "../../components/AdvisorList/AdvisorList";
import CategoryList from "../../components/CategoryList/CategoryList";
import SchedulerCalendarModal from "../../components/SchedulerCalendarModal/SchedulerCalendarModal";
import { SchedulePageContext } from "../../SchedulePageContext";

const useStyles = makeStyles(theme => ({
  hero: {
    borderRadius: 4,
    marginTop: 32,
    backgroundColor: "#A41F35",
    color: "#FFFFFF",
    padding: 20,
    [theme.breakpoints.up("md")]: {
      height: "100%"
    }
  },
  h3: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25
    }
  },
  content: {
    display: "flex",
    marginTop: 20,
    justifyContent: "start"
  }
}));

const advisors = [
  {
    id: 0,
    name: "Sarah Parker",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_2.png"
  },
  {
    id: 1,
    name: "Jack Doe",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_6.png"
  },
  {
    id: 3,
    name: "Michael Smith",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_5.png"
  },
  {
    id: 4,
    name: "Maria Garcia",
    advisingCategory: "Career Center",
    url: "images/avatars/avatar_9.png"
  },
  {
    id: 5,
    name: "Josh McAfee",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_7.png"
  }
];

Modal.setAppElement("#root");

export function SchedulePage() {
  /* 
    Will use UserContext to set UserContext provider data - this will update the current user's meeting data across all components
    See this video: https://youtu.be/lhMKvyLRWo0?t=265
  */
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext);

  const [advCats, setAdvCats] = useState([]);
  const [advisorList, setAdvisorList] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        const advCats = res.data.listAdvisingCategorys.items;
        setAdvCats(advCats);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategoriesAdvisors))
      .then(res => {
        const advisorList = res.data.listAdvisingCategorys.items;
        setAdvisorList(advisorList);
      })
      .catch(err => console.log(err));
  }, []);

  //console.log("Schedule Page: modal = ", modalIsOpen);
  console.log("Schedule Page: Selected category is: ", selectedCategory);
  console.log("Schedule Page: AdvisorList ", advisorList);

  return (
    <>
      <div className={classes.hero}>
        <h3 className={classes.h3}>I would like to speak to someone from...</h3>
      </div>
      <SchedulePageContext.Provider
        value={{ selectedCategory, setSelectedCategory }}
      >
        <div className={classes.content}>
          <CategoryList categories={advCats} />
          <AdvisorList advisors={advisors} />
        </div>
        <SchedulerCalendarModal />
      </SchedulePageContext.Provider>
    </>
  );
}
