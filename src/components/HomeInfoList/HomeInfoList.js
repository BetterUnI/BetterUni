import React from "react";
import HomeInfoListItem from "../HomeInfoListItem/HomeInfoListItem";
import MeetingListItem from "../MeetingListItem/MeetingListItem";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody
} from "@material-ui/core";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    flex: "auto",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0
    }
  },
  inner: {
    height: 200,
    width: "100%",
    overflow: "auto"
  },
  iconCenterAlignment: {
    textAlign: "center"
  },
  position: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: 20
    }
  },
  avatarBackgroundColor: {
    backgroundColor: "#765BF7"
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
}));

export default function HomeInfoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.position}>
      <Card className={classes.content}>
        <CardHeader
          classes={{
            title: classes.headerTitle
          }}
          title={props.listTitle}
          avatar={props.avatar}
        />
        <Divider />
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              {props.listTitle === "Upcoming Meetings" ? (
                <TableBody>
                  {props.homeLists.map(homelist => (
                    <MeetingListItem
                      key={homelist.reasonForMeeting}
                      homelist={homelist}
                    />
                  ))}
                </TableBody>
              ) : (
                <TableBody>
                  {props.homeLists.map(homelist => (
                    <HomeInfoListItem key={homelist.name} homelist={homelist} />
                  ))}
                </TableBody>
              )}
            </Table>
          </div>
        </CardContent>
        <Divider />
        <div className={classes.iconCenterAlignment}>
          {props.listTitle === "Career Events" ? (
            <Button component={Link} to="/career">
              <KeyboardArrowDownIcon fontSize="large" />
            </Button>
          ) : props.listTitle === "Upcoming Meetings" ? (
            <Button component={Link} to="/meetings">
              <KeyboardArrowDownIcon fontSize="large" />
            </Button>
          ) : (
            <Button href="http://www.temple.edu/vpus/advising/offices.html">
              <KeyboardArrowDownIcon fontSize="large" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
