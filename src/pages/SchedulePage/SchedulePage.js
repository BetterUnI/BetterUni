import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { API, graphqlOperation } from "aws-amplify";
import { makeStyles } from "@material-ui/styles";
import Modal from "react-modal";
import {
  listAdvisingCategorys as ListAdvisingCategories,
  getAdvisingCategory as GetListOfAdvisors
} from "../../graphql/queries";
import AdvisorList from "../../components/AdvisorList/AdvisorList";
import CategoryList from "../../components/CategoryList/CategoryList";
import SchedulerCalendarModal from "../../components/SchedulerCalendarModal/SchedulerCalendarModal";
import SchedulerConfirmationModal from "../../components/SchedulerConfirmationModal/SchedulerConfirmationModal";
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

Modal.setAppElement("#root");

export function SchedulePage() {
  /* 
    Will use UserContext to set UserContext provider data - this will update the current user's meeting data across all components
    See this video: https://youtu.be/lhMKvyLRWo0?t=265
  */
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext);

  const [advisingCategories, setAdvisingCategories] = useState([]);
  const [advisorList, setAdvisorList] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        const advisingCategories = res.data.listAdvisingCategorys.items;
        setAdvisingCategories(advisingCategories);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCategory != null) {
      API.graphql(
        graphqlOperation(GetListOfAdvisors, { id: selectedCategory.id })
      )
        .then(res => {
          //console.log("GET ADVISING CATEGORY RESPONSE: ", res);
          const advisorList = res.data.getAdvisingCategory.users.items;
          // console.log(
          //   "Schedule Page: Advisors for the selected category are ",
          //   advisorList
          // );
          setAdvisorList(advisorList);
        })
        .catch(err => console.log(err));
    }
  }, [selectedCategory]);

  //console.log("Schedule Page: Selected category is: ", selectedCategory);
  //console.log("Schedule Page: Selected advisor is: ", selectedAdvisor);
  //console.log("Schedule Page: AdvisorList ", advisorList);
  //console.log("Schedule Page: Schedular Modal is open ", open);
  //console.log("Schedule Page: Confirmation Modal is open ", openConfirmation);

  return (
    <>
      <div className={classes.hero}>
        <h3 className={classes.h3}>I would like to speak to someone from...</h3>
      </div>
      <SchedulePageContext.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          selectedAdvisor,
          setSelectedAdvisor,
          open,
          setOpen,
          openConfirmation,
          setOpenConfirmation
        }}
      >
        <div className={classes.content}>
          <CategoryList categories={advisingCategories} />
          {selectedCategory != null ? (
            <AdvisorList advisors={advisorList} />
          ) : null}
        </div>
        <SchedulerCalendarModal />
        <SchedulerConfirmationModal />
      </SchedulePageContext.Provider>
    </>
  );
}
