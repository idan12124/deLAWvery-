import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Divider, Grid, Typography } from "@mui/material";
import logo from "./Group 4209.png";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import CardList from "./components/CardList";
import { useSelector } from "react-redux";

function HomeScreen() {
  const editMode = useSelector((state) => state.editMode);
  const counter = useSelector((state) => state.cardList.length);
  console.log(editMode);

  return (
    <div style={{ height: "90vh", margin: 0, padding: 0 }}>
      <AppBar position="static" style={{ background: "#4e71ff" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{ height: 75, width: 165 }} />
        </Container>
      </AppBar>

      <div style={{ height: "100%" }}>
        <Grid container spacing={3} style={{ height: "100%" }}>
          <Grid item xs={8} style={{ height: "100%" }}>
            {editMode ? <EditForm /> : <Form />}
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={3} style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 80,
              }}
            >
              <div>
                <Typography style={{ fontWeight: 600, fontSize: 25 }}>
                  רשימת הזמנות
                </Typography>
              </div>
              <div>
                <Typography style={{ fontWeight: 600, fontSize: 15 }}>
                  מספר ההזמנות: {counter}
                </Typography>
              </div>
              <CardList />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeScreen;
