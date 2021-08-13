import React,{useState,useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid, Avatar,Toolbar,Button } from '@material-ui/core';
import memories from '../../images/memories.png';
import logo from '../../images/logo.svg'
import {Link,useHistory,useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const dispatch  = useDispatch()
    const history  = useHistory()
    const location  = useLocation()

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        history.push('/')
        setUser(null)
    }

    useEffect(()=>{
        const token = user?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp*1000 < new Date().getTime()){
                logout()
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    return (

        
        <div className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">myMemories</Typography>
                <img className={classes.image} src={logo} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user?(
                        <div className={classes.profile}>
                            <Avatar alt={user.result.name} src={user.result.imageUrl}/>
                            <Typography>{user.result.name}</Typography>
                            <Button variant="contained" onClick={logout} className={classes.Button}>Log Out</Button>
                        </div>
                    ):(
                        <Button component={Link} to="/auth" variant="contained" className={classes.Button}>Sign In </Button>
                    )
                }
            </Toolbar>
        </div>
    )
}

export default Navbar
