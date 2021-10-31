import React from "react";
import {
  Button,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import updateList from "../redux/actions/CardList";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [date, setdate] = React.useState("");
  const dispach = useDispatch();
  const orderNumber = useSelector((state) => state.orderCounter);

  function addCard() {
    dispach(
      updateList({
        firstName,
        lastName,
        date,
        orderNumber,
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
          הזמנה חדשה
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
            onClick={addCard}
            variant="contained"
            style={{ width: "223px" }}
          >
            הוספה
          </Button>
        </div>
      </div>
    </div>
  );
}
