import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Notice from "./Post/Notice";

import useStyles from "./styles";

const Notices = ({ setCurrentId , tag}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();


  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
    {
        posts.map((post) => (
          post.tags===tag ? (
       <Grid item key={post._id} xs={12} sm={6}>
         <Notice setCurrentId={setCurrentId} post={post} />
       </Grid>): null
     ) ) }
    </Grid>
  );
};

export default Notices;
