import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {ThumbUpAltOutlined} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import {useHistory} from 'react-router-dom'
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history  = useHistory()
  

  const user = JSON.parse(localStorage.getItem('profile'))
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon className={classes.likeBtn} fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined className={classes.likeBtn} fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <div className={classes.likeBtn}><FavoriteBorderIcon fontSize="small"  /></div>;
  };

  const openPost = ()=>{
    
    history.push(`posts/${post._id}`)
  }

  return (
    <Card className={classes.card} raised elevation={5}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="body2" className={classes.author}>{post.name}</Typography>
          <Typography variant="body2" className={classes.author}>{moment(post.createdAt).fromNow()}</Typography>
        </div>
      </ButtonBase>
      <div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button style={{ color: '#222' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
              
            )}
          
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h3">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <div className={classes.title}>{post.title}</div>
        <div>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </div>
      </div>
       
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} className={classes.deleteBtn}>
            <DeleteIcon fontSize="small" style={{ color: '#f2545b' }} /> 
          </Button>
        )}
        
      </CardActions>
    </Card>
  );
};

export default Post;
