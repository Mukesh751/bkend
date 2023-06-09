import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
 import Post from "./Post/Post";

 import useStyles from "./styles";

import { useDispatch } from "react-redux";
 import useStyle from "./Post/styles";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { deletePost, likePost } from "../../actions/posts";


const Posts = ({ setCurrentId , tag}) => {

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
         <Post setCurrentId={setCurrentId} post={post} />
       </Grid>): null
     ) ) }
    </Grid>
  );
};

export default Posts;
