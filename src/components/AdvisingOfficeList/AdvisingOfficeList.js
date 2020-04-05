import React from "react";
import AdvisingOffice from "../AdvisingOffice/AdvisingOffice";
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
  Table,
  TableBody
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    height: 200,
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

export default function AdvisingOfficeList(props) {
  const classes = useStyles();

  return (
    <div className={classes.position}>
      <Card className={classes.content}>
        <CardHeader
          classes={{
            title: classes.headerTitle
          }}
          title="Advising Offices"
          avatar={
            <Avatar variant="rounded" className={classes.avatarBackgroundColor}>
              <SupervisorAccountOutlinedIcon fontSize="large" color="white" />
            </Avatar>
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableBody>
                {props.offices.map(office => (
                  <AdvisingOffice office={office} />
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
