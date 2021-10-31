import React from "react";
import {
  Button,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { editCard as ed } from "../redux/actions/CardList";

export default function EditForm() {
  const editCardIndex = useSelector((state) => state.editCard);
  const cardList = useSelector((state) => state.cardList);
  const card = cardList.filter((card) => {
    return card.orderNumber === editCardIndex;
  })[0];

  const [firstName, setFirstName] = React.useState(card.firstName);
  const [lastName, setlastName] = React.useState(card.lastName);
  const [date, setdate] = React.useState(card.date);
  const dispach = useDispatch();
  const orderNumber = useSelector((state) => state.orderCounter);

  function editCard() {
    dispach(
      ed({
        firstName,
        lastName,
        date,
        orderNumber: editCardIndex,
      })
    );
  }

  return (
    <div
      style={{
        paddingTop: 70,
      }}
    >
      <div className="RigthFrom">
        <Typography style={{ fontWeight: 600, fontSize: 35 }}>
          הזמנה {editCardIndex}
        </Typography>
      </div>
      <div
        style={{
          marginTop: 50,
        }}
        className="RigthFrom"
      >
        <div style={{ marginRight: 40 }}>
          <FormHelperText
            id="outlined-weight-helper-text"
            className="RigthFrom"
          >
            שם המשפחה
          </FormHelperText>
          <OutlinedInput
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          ></OutlinedInput>
        </div>
        <div>
          <FormHelperText
            id="outlined-weight-helper-text"
            className="RigthFrom"
          >
            שם פרטי
          </FormHelperText>
          <OutlinedInput
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></OutlinedInput>
        </div>
      </div>
      <div
        style={{
          marginTop: 20,
        }}
        className="RigthFrom"
      >
        <div>
          <FormHelperText
            id="outlined-weight-helper-text"
            className="RigthFrom"
          >
            תאריך
          </FormHelperText>
          <OutlinedInput
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
          ></OutlinedInput>
        </div>
      </div>
      <div
        style={{
          marginTop: 20,
        }}
        className="RigthFrom"
      >
        <div>
          <Button
            onClick={editCard}
            variant="contained"
            style={{ width: "223px" }}
          >
            עדכון
          </Button>
        </div>
      </div>
    </div>
  );
}
