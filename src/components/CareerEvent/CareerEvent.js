import React from "react";

//STYLE dependencies
import { TableRow, TableCell } from "@material-ui/core";

const CareerEvent = ({
  careerEventID,
  name,
  date,
  description,
  location,
  link
}) => (
  <TableRow>
    <TableCell>{careerEventID}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{date}</TableCell>
    <TableCell>{description}</TableCell>
    <TableCell>{location}</TableCell>
    <TableCell>{link}</TableCell>
  </TableRow>
);

export default CareerEvent;

//test to see how it looks

// export default function CareerEvent() {
//   return <div className="careerEvent"></div>;
// }
