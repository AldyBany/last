import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {ThumbUpAltOutlined} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import {useHistory} from 'react-router-dom'
import useStyles from './styles';

const Poste = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const history  = useHistory()

    const user = JSON.parse(localStorage.getItem('profile'))
    const Likes = () => {
      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = ()=>{
        console.log("this post: ",post._id)
          history.push(`posts/${post._id}`)
      }

    return (
        <div className="fond">

            <div className="card">
                <div className="thumbnail">
                    <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} className="left"/>
                </div>

                <div className="right">
                    <h1>{post.title}</h1>
                    <div className="author">
                        <h2>{post.name}</h2>
                    </div>
                    <div className="separator"></div>
                    <p>{post.message}</p>
                </div>
                <h6>{moment(post.createdAt).fromNow()}</h6>

                <ul>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Poste
