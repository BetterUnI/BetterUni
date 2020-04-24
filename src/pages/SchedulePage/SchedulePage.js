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
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }
}));

Modal.setAppElement("#root");

export function SchedulePage() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext);

  // State
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [advisorsLoading, setAdvisorsLoading] = useState(true);
  const [advisingCategories, setAdvisingCategories] = useState([]);
  const [advisorList, setAdvisorList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        const advisingCategories = res.data.listAdvisingCategorys.items;
        setAdvisingCategories(advisingCategories);
        setCategoriesLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCategory != null) {
      API.graphql(
        graphqlOperation(GetListOfAdvisors, { id: selectedCategory.id })
      )
        .then(res => {
          const advisorList = res.data.getAdvisingCategory.users.items;
          setAdvisorList(advisorList);
          setAdvisorsLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [selectedCategory]);

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
          <CategoryList
            categories={advisingCategories}
            loading={categoriesLoading}
          />
          {selectedCategory != null ? (
            <AdvisorList advisors={advisorList} loading={advisorsLoading} />
          ) : null}
        </div>
        <SchedulerCalendarModal />
        <SchedulerConfirmationModal />
      </SchedulePageContext.Provider>
    </>
  );
}
