import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { removeCard } from "../redux/actions/CardList";
import "./Card.css";
import { useDispatch } from "react-redux";
import { editMode } from "../redux/actions/CardList";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ firstName, lastName, date, orderNumber }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ minWidth: 275, marginTop: "40px" }}>
      <CardContent>
        <div style={{ marginBottom: "10px" }}>
          <DeleteOutlineIcon
            onClick={() => {
              dispatch(removeCard(orderNumber));
            }}
            fontSize="small"
            style={{ marginRight: "5px" }}
            className="Icon"
          />
          <EditIcon
            fontSize="small"
            className="Icon"
            onClick={() => {
              dispatch(editMode(orderNumber));
            }}
            fontSize="small"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 600 }} gutterBottom>
            הזמנה {orderNumber}
          </Typography>
          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>פרטים</Typography>
          <Typography sx={{ fontSize: 15 }}>
            {lastName}, {firstName}
          </Typography>
          <Typography sx={{ fontSize: 15 }}>{date}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
