import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { API, graphqlOperation } from "aws-amplify";
import { listAdvisingCategorys as ListAdvisingCategories } from "../../graphql/queries";
import { listCareerResources as ListCareerResources } from "../../graphql/queries";
import { listMeetings as ListMeetings } from "../../graphql/queries";
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
const meeting = [
  {
    name: "Today 9am-10am : Sarah Parker"
  },
  {
    name: "Tomorrow 11am-12pm : Jack Doe"
  },
  {
    name: "Next week: Jane Smith"
  },
  {
    name: "Next week: Dr Lasname"
  }
];
export function HomePage(props) {
  const classes = useStyles();
  const user = useContext(UserContext);

  const [advCats, setAdvCats] = useState([]);
  const [resources, setResources] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        const advCats = res.data.listAdvisingCategorys.items;
        setAdvCats(advCats);
        console.log(advCats);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    API.graphql(graphqlOperation(ListCareerResources))
      .then(res => {
        const resources = res.data.listCareerResources.items;
        setResources(resources);
        console.log(resources);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    API.graphql(graphqlOperation(ListMeetings))
      .then(res => {
        const meetings = res.data.listMeetings.items;
        setMeetings(meetings);
        console.log("Meetings: ", meetings);
      })
      .catch(err => console.log(err));
  }, []);
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
