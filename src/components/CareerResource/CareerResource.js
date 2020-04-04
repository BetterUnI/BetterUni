import React from "react";

//STYLE dependencies
import { TableRow, TableCell } from "@material-ui/core";

const CareerResource = ({
  CareerResourceID,
  name,
  date,
  description,
  location,
  link
}) => (
  <TableRow>
    {/*ID for debugging only*/}
    <TableCell>{CareerResourceID}</TableCell>
    <TableCell>{name}</TableCell>
    {/*if there is a date then we know it is an event*/}
    <TableCell>{date}</TableCell>
    <TableCell>{description}</TableCell>
    <TableCell>{location}</TableCell>
    <TableCell>{link}</TableCell>
  </TableRow>
);

export default CareerResource;

//test to see how it looks

// export default function CareerResource() {
//   return <div className="CareerResource"></div>;
// }
