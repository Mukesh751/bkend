import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./styles";

const App = (props) => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {props.heading}
        </Typography>

        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}tag={props.tag} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {console.log(currentId)}
              <Form currentId={currentId} setCurrentId={setCurrentId} tag={props.tag} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
