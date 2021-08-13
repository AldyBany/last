import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import Poste from './Post/Poste';
import useStyles from './styles';
import {useHistory,useLocation} from 'react-router-dom'

const Posts = ({ setCurrentId }) => {
  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();
  const history  = useHistory()

  // console.log("les posts: ", posts)

  if(!posts.length && !isLoading){

    history.push('/')
  }

  return (
    isLoading ? <CircularProgress /> : (
     <div   className={classes.container}>
        {posts.map((post) => (
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )
  );
};

export default Posts;
