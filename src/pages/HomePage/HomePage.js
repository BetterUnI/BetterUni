// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { API, graphqlOperation } from "aws-amplify";
import {
  listAdvisingCategorys as ListAdvisingCategories,
  listCareerResources as ListCareerResources
} from "../../graphql/queries";
import { makeStyles } from "@material-ui/styles";
import HomeInfoList from "../../components/HomeInfoList/HomeInfoList";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EventIcon from "@material-ui/icons/Event";
import { Avatar as ListIcon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      flexDirection: "column"
    }
  },
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
  h1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  },
  h2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25
    }
  },
  officeAvatarBackgroundColor: {
    backgroundColor: "#765BF7"
  },
  eventAvatarBackgroundColor: {
    backgroundColor: "#F65B5B"
  },
  meetingAvatarBackgroundColor: {
    backgroundColor: "#70B757"
  }
}));
export function HomePage(props) {
  const classes = useStyles();

  const [advCats, setAdvCats] = useState([]);
  const [resources, setResources] = useState([]);
  const [meetings, setMeetings] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    let isCancelled = false;

    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        if (!isCancelled) {
          const advCats = res.data.listAdvisingCategorys.items;
          setAdvCats(advCats);
        }
      })
      .catch(err => {
        if (!isCancelled) {
          console.log(err);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;
    API.graphql(graphqlOperation(ListCareerResources))
      .then(res => {
        if (!isCancelled) {
          const resources = res.data.listCareerResources.items;
          setResources(resources);
        }
      })
      .catch(err => {
        if (!isCancelled) {
          console.log(err);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (typeof user !== "undefined") {
      if (user.meetings) {
        setMeetings(user.meetings.items);
      }
    }
  }, [user]);

  return (
    <>
      <div className={classes.hero}>
        <center>
          <h1 className={classes.h1}>Welcome to BetterUni</h1>
          <img
            src="images/bulogo.png"
            width="100"
            height="100"
            alt="BetterUni logo"
          ></img>
          <h2 className={classes.h2}>
            We aim to provide you the tools, opportunities, <br /> and resources
            to succeed at Temple University and beyond!
          </h2>
        </center>
      </div>
      <div className={classes.content}>
        <HomeInfoList
          avatar={
            <ListIcon
              variant="rounded"
              className={classes.officeAvatarBackgroundColor}
            >
              <SupervisorAccountOutlinedIcon
                fontSize="large"
                color="secondary"
              />
            </ListIcon>
          }
          listTitle="Advising Offices"
          homeLists={advCats}
        />
        <HomeInfoList
          avatar={
            <ListIcon
              variant="rounded"
              className={classes.eventAvatarBackgroundColor}
            >
              <EventIcon fontSize="large" color="secondary" />
            </ListIcon>
          }
          listTitle="Career Events"
          homeLists={resources}
        />
        <HomeInfoList
          avatar={
            <ListIcon
              variant="rounded"
              className={classes.meetingAvatarBackgroundColor}
            >
              <AccessTimeIcon fontSize="large" color="secondary" />
            </ListIcon>
          }
          listTitle="Upcoming Meetings"
          homeLists={meetings}
        />
      </div>
    </>
  );
}
