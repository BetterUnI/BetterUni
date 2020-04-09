import React from "react";
import HomeInfoListItem from "../HomeInfoListItem/HomeInfoListItem";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
  Table,
  TableBody
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./HomeInfoList.css";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
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
    float: "left",
    paddingLeft: 30,
    paddingRight: 30
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
              <TableBody>
                {props.homelists.map(homelist => (
                  <HomeInfoListItem homelist={homelist} />
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <Divider />
        <div className={classes.iconCenterAlignment}>
          <IconButton>
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}
